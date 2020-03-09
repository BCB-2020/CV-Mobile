import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Callout } from 'react-native-maps';

//Delta is how wide the map region is
const initialRegion = {
  latitude: 40.705,
  longitude: -74.009,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const fullstackCoords = [-74.009, 40.705]; // NY

const markers = [
  {
    coordinates: {
      latitude: 40.705,
      longitude: -74.009,
    },
    title: 'Fullstack Academy',
    description: 'BCB formed here',
  },
  {
    coordinates: {
      latitude: 40.742101,
      longitude: -73.996657,
    },
    title: `Thomas' Crib`,
    description: 'Some guy lives here',
  },
];

const customMarkers = [
  {
    coordinates: {
      latitude: 40.705139,
      longitude: -74.013966,
    },
    title: 'Kung Fu Tea',
    description: 'Replenish brain juice here',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} initialRegion={initialRegion}>
          {markers.map(marker => (
            <Marker
              key={marker.title}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
            />
          ))}

          {customMarkers.map(marker => (
            <Marker
              key={marker.title}
              coordinate={marker.coordinates}
              pinColor={'indigo'}
              title={marker.title}
              description={marker.description}
            >
              {/* <View style={{ backgroundColor: 'red', padding: 10 }}>
                <Text>{marker.title}</Text>
              </View> */}
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
