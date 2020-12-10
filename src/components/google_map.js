import React from 'react';
import GoogleMapReact from 'google-map-react';

export default (props)=> {
    return (
        <GoogleMapReact
          containerElement={ <div style={{height: '100%'}}/> }
          defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}
        />
            
    );
};