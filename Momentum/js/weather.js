function onGeoSucess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`lat: ${lat}, lon: ${lon}`);
}

function offGeoError() {
    alert("can't geolocation data");
}


navigator.geolocation.getCurrentPosition(onGeoSucess, offGeoError);