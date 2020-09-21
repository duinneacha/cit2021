<template>
  <div id = "map" style="z-index=-1">
      <gmap-map
        :center = "center"
        :zoom = "zoom"
        :tilt="45"
        :options = "options"
        style = "width: 100%; height: 750px;">
        <gmap-marker
          :position="{lat: 51.8545184, lng: -8.3118038}"
          :clickable="true"
          :draggable="false"
          :icon="adIcon"
        >
        </gmap-marker>
        <GmapCircle
          :center="{lat: 51.8544344, lng: -8.3116638}"
          :radius="13"
          :visible="true"
          :options="{fillColor:'blue',fillOpacity:1.0}"
        ></GmapCircle>
        
      </gmap-map>
  </div>

</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use (VueGoogleMaps, {
  load: {
    key: 'AIzaSyDpJEdfJN6T7gIZfwezdu3L_MLL6Z7Y3j4'
  }
})
export default {
   data() {
    return {
      adIcon: {
        // url: './marker.png',
        path: "M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z",
        fillColor: "yellow",
        fillOpacity: 1,
        scale: .1,
        strokeColor: "black",
        strokeWeight: 1,
        labelOrigin: {x: 10, y: -1000}
      },
      place: null,
      center: {
        lat: 51.8543334,
        lng: -8.3118038
      },
      zoom: 17,
      markers: [
        {name: "Ali Nutrition", position: {lat: 51.8544344, lng: -8.3138638}, icon: "c:\ad\ad"}
      ],
      options: {
        zoomControl: true, // Sets the zoom control of the map
        mapTypeControl: false, // Hides the map type control
        scaleControl: false, // Hides the scale control of the map
        streetViewControl: true, // Hides the StreeView control from the map
        fullscreenControl: true // Set the full screen control to view the map in full screen
      },
    }
    
 
  }
}
</script>