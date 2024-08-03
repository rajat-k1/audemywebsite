<template>
  <div id="map" style="width: 100%; height: 500px;"></div>
</template>

<script setup>
import { onMounted } from 'vue';

// Load the external script
const loadTomTomScript = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = "https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps-web.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  await loadTomTomScript();

  let center = [-97.7431, 30.2672];
  const map = tt.map({
    key: "1JNM9zmAHGoFlR8FiiV1syDoa05dafLP",
    container: "map",
    zoom: 1,
    center: center,
  });

  map.on("load", () => {
    let calipopup = new tt.Popup({
      closeButton: false,
    }).setText("California School for the Blind");
    let calimarker = new tt.Marker()
      .setLngLat([-119.4179, 36.7783])
      .setPopup(calipopup);
    calimarker.addTo(map);

    let texaspopup = new tt.Popup({
      closeButton: false,
    }).setText("Texas School for the Blind and Visually Impaired");
    let texasmarker = new tt.Marker()
      .setLngLat([-97.7431, 30.2672])
      .setPopup(texaspopup);
    texasmarker.addTo(map);

    let kansaspopup = new tt.Popup({
      closeButton: false,
    }).setText("Kansas School for the Blind");
    let kansasmarker = new tt.Marker()
      .setLngLat([-98, 38.5])
      .setPopup(kansaspopup);
    kansasmarker.addTo(map);

    let illinoispopup = new tt.Popup({
      closeButton: false,
    }).setText("Illinois School for the Visually Impaired");
    let illinoismarker = new tt.Marker()
      .setLngLat([-89, 40])
      .setPopup(illinoispopup);
    illinoismarker.addTo(map);

    let arizonapopup = new tt.Popup({
      closeButton: false,
    }).setText("Arizona State School for the Deaf and the Blind");
    let arizonamarker = new tt.Marker()
      .setLngLat([-111.0937, 34.0489])
      .setPopup(arizonapopup);
    arizonamarker.addTo(map);

    let hezepopup = new tt.Popup({
      closeButton: false,
    }).setText("HeZe Special Education Center (菏泽市特殊教育中心)");
    let hezemarker = new tt.Marker()
      .setLngLat([117.0208, 36.6683])
      .setPopup(hezepopup);
    hezemarker.addTo(map);

    let tompkinspopup = new tt.Popup({
      closeButton: false,
    }).setText("Obra D. Tompkins High School");
    let tompkinsmarker = new tt.Marker()
      .setLngLat([-95.3698, 29.7604])
      .setPopup(tompkinspopup);
    tompkinsmarker.addTo(map);
  });
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 500px;
}
</style>
