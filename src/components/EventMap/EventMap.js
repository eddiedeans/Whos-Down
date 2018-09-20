import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '250px',
    height: '200px',
    position: "static!important"
  }

export class MapContainer extends Component {
    render() {
      return (
        <Map 
        google={this.props.google} 
        zoom={11} 
        style={style}
        initialCenter={{
            lat: 33.6846,
            lng: -117.8265
          }}
        >
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
              {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div> */}
          {/* </InfoWindow> */}
        </Map>
      );
    }
  }
 
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCxubm463ms-PFfjtji3HziARII4kd1_tM")
  })(MapContainer)