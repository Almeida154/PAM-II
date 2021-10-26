import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Platform,
  Linking,
  TextInput,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const App = () => {
  const [coords, setCoords] = useState({});
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [cep, setCep] = useState('');
  const [label, setLabel] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async ({ coords }) => {
        setCoords({
          lat: coords.latitude,
          lon: coords.longitude,
        });

        const req = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${coords.latitude},${coords.longitude}&key=AIzaSyDxfQaag_b9ubDHYSA6x5jdX287OJxygFw`,
        );

        const res = await req.json();

        const data = res.results[0].formatted_address.split(',');
        setStreet(data[0]);
        setCity(data[2]);
        setCep(data[3]);

        setLoading(!isLoading);
      },
      error => console.log('error: ' + error.message),
      {
        timeout: 20000,
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  }, []);

  const handleOpenMaps = () => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const url = Platform.select({
      ios: `${scheme}${label != '' ? label : 'Default Label'}@${coords?.lat},${
        coords?.lon
      }`,
      android: `${scheme}${coords?.lat},${coords?.lon}(${
        label != '' ? label : 'Default Label'
      })`,
    });
    Linking.openURL(url);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          paddingTop: 22,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            opacity: 0.7,
            fontWeight: 'bold',
            fontSize: 24,
            marginBottom: 30,
          }}>
          Your current location:
        </Text>
        {isLoading ? (
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item
              marginLeft={20}
              alignItems="center"
              marginVertical={16}>
              <SkeletonPlaceholder.Item
                width={180}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              marginLeft={20}
              alignItems="center"
              marginVertical={16}>
              <SkeletonPlaceholder.Item
                width={180}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              marginLeft={20}
              alignItems="center"
              marginVertical={16}>
              <SkeletonPlaceholder.Item
                width={180}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
              marginLeft={20}
              alignItems="center"
              marginVertical={16}>
              <SkeletonPlaceholder.Item
                width={180}
                height={20}
                borderRadius={4}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={120}
                height={20}
                borderRadius={4}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        ) : (
          <>
            <View
              style={{
                backgroundColor: '#f6f6f6',
                padding: 20,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  opacity: 0.7,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                City:
                <Text style={{ fontWeight: 'normal' }}>{` ${city}`}</Text>
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#f6f6f6',
                padding: 20,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  opacity: 0.7,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Street:
                <Text style={{ fontWeight: 'normal' }}>{` ${street}`}</Text>
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#f6f6f6',
                padding: 20,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                  opacity: 0.7,
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Cep:
                <Text style={{ fontWeight: 'normal' }}>{` ${cep}`}</Text>
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#f6f6f6',
                padding: 20,
                borderRadius: 10,
              }}>
              <TextInput
                style={{ padding: 0, margin: 0, color: '#333' }}
                placeholder="Label here"
                placeholderTextColor="#999999"
                selectionColor="#333"
                value={label}
                onChangeText={text => setLabel(text)}
              />
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: '#333',
                marginTop: 30,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  paddingVertical: 20,
                  paddingHorizontal: 80,
                }}
                onPress={() => handleOpenMaps()}>
                Open
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default App;
