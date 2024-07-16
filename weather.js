function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live it", lat, lng)
}
function onGeoError(){
    alert("can't find you No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);