import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  StyleSheet,
  StatusBar
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { gyroscope } from 'react-native-sensors';

const App = () => {
  const gyroValue = useSharedValue({ x: 0, y: 0, z: 0 });
  const prev = useSharedValue({ x: 0, y: 0 });
  const derivedTranslations = useDerivedValue(() => {
    'worklet';
    const MAX_X = 60;
    const MAX_Y = 60;

    let newX = prev.value.x + gyroValue.value.y * -1;
    let newY = prev.value.y + gyroValue.value.x * -1;

    if (Math.abs(newX) >= MAX_X) newX = prev.value.x;
    if (Math.abs(newY) >= MAX_Y) newY = prev.value.y;

    prev.value = { x: newX, y: newY };
    return { x: newX, y: newY };

  }, [gyroValue.value]);

  useEffect(() => {
    const subscription = gyroscope.subscribe(({ x, y, z }) => {
      gyroValue.value = { x, y, z };
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [gyroValue.value]);

  const AnimatedStyles = {
    motion: useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: withSpring(derivedTranslations.value.x) },
          { translateY: withSpring(derivedTranslations.value.y) }
        ]
      }
    })
  }

  return (
    <SafeAreaView>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground style={Style.container} source={require('./src/img/bgstreet.png')} resizeMode="cover">
        <Animated.View style={AnimatedStyles.motion}>
          <Image style={Style.item} source={require('./src/img/tommy.png')} />
        </Animated.View>
        <View style={Style.footer}>
          <Image style={Style.shadow} source={require('./src/img/shadow.png')} />
          <View style={Style.iconContainer}>
            <Image style={Style.icon} source={require('./src/img/letter.png')} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const Style = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: 500,
    resizeMode: 'contain'
  },
  footer: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 260,
    bottom: 0,
  },
  shadow: {
    height: 76,
  },
  iconContainer: {
    backgroundColor: 'yellow',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#000',
    width: '100%',
    flex: 1,
  },
  icon: {
    height: 100,
    marginTop: 24,
    resizeMode: 'contain'
  }
});

export default App;
