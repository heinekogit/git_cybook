      function initialize() {
        var mapDiv = document.getElementById("map_canvas");
        var mapCanvas = new google.maps.Map(mapDiv, {
          center : new google.maps.LatLng(35.681382, 139.766084),
          zoom : 14,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        });
      }

      google.maps.event.addDomListener(window, "load", initialize);