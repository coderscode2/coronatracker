/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Dimensions, Alert, Text, Image, FlatList} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { PERMISSIONS, request, requestMultiple} from 'react-native-permissions';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { calculateDeltaForCoords } from '../../utils/helpers';
import { getReportedCases } from '../../api';
import RedDot from '../../../assets/red-dot.png';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

class TrackerMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: {},
            reportedCases: []
        };
        this.watchID = null;

    }

    componentDidMount() {
        const reportedCases = getReportedCases();
        this.setState({reportedCases});
        requestMultiple([PERMISSIONS.IOS.LOCATION_ALWAYS, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]).then(
            (statuses) => {
              console.log('LOCATION_ALWAYS', statuses[PERMISSIONS.IOS.LOCATION_ALWAYS]);
              console.log('LOCATION_WHEN_IN_USE', statuses[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]);
            },
          );
        
        Geolocation.requestAuthorization();
        Geolocation.getCurrentPosition( 
            position => {
        this.setState({coordinates: position.coords});
      },
      error => Alert.alert('Unable to retrieve your location', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    // this.watchID = Geolocation.watchPosition(position => {
    //   this.setState({coordinates: position.coords});
    // });
    }

    renderPin(data) {
        return (
            <Marker
      coordinate={data.coordinates}
      title={data.symptoms}
      description={data.confirmed}
    />
        )
    }

    render() {
        return (
            <View style={styles.container}>
        {
          this.state.coordinates && this.state.coordinates.latitude && 
          <MapView  
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: this.state.coordinates.latitude,
                longitude: this.state.coordinates.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <View>
                {
                    this.state.reportedCases.map((e, index) => {
                        return (
                        <Marker
                            coordinate={e.coordinates}
                            title={`Age: ${e.age}. Symptoms: ${e.symptoms}`}
                            description={`Status: ${e.confirmed === true ? 'Positive' : 'Negative'}. Reported: ${e.reportedDate}\n Symptoms: ${e.symptoms}`}
                            key={index}
                        >
                        <Image source={RedDot} style={{height: 50, width: 50}} />
                      </Marker>
                    )
                 })
                }
            
            </View>
     </MapView>
        }
   </View>
        )
    }
}

export default TrackerMap

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: Dimensions.get('window').height,
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});