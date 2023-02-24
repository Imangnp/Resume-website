function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {blat: 40.785091, lng: -73.968285},
        {blat: 41.785091, lng: -72.868885},
        {blat: 40.755091, lng: -73.968285}
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerClusterer = new MarkerClusterer(map, markers, {imagePath:"https://developers.google.com/maps/javascript/examples/markerclusterer/m"});
}