    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBs5SzjnpO0CBnZkjT3wlODSiF2_VqgjN4"></script>

      function initialize() {
        /*
         * 地図を作成
         */
        var mapDiv = document.getElementById("map_canvas");
        var mapCanvas = new google.maps.Map(mapDiv, {
          center : new google.maps.LatLng(0.1, 0.1),
          zoom : 10,
          mapTypeId : google.maps.MapTypeId.ROADMAP
        });

        /*
        * マーカーを作成
        */
        //普通のマーカー
        var marker1 = createMarker({
          position : new google.maps.LatLng(0, 0),
          map : mapCanvas
        });

        //アイコンの画像を変更
        var marker2 = createMarker({
          position : new google.maps.LatLng(0.1, 0.1),
          map : mapCanvas,
          icon : "https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=home%7CFFFF00"
        });

        //ドラッグできるマーカー
        var marker3 = createMarker({
          position : new google.maps.LatLng(0.2, 0.2),
          map : mapCanvas,
          draggable : true
        });

        /*
         * マーカーを操作できるようにする
         */
        var marker1_check = document.getElementById("marker1_check");
        google.maps.event.addDomListener(marker1_check, "click", function() {
          var mMap = null;
          if (marker1_check.checked === true) {
            mMap = mapCanvas;
          }
          marker1.setMap(mMap);
        });

        var marker2_btn = document.getElementById("marker2_btn");
        var marker2_txt = document.getElementById("marker2_txt");
        google.maps.event.addDomListener(marker2_btn, "click", function() {
          marker2.setIcon(marker2_txt.value);
        });
        marker2_txt.value = marker2.getIcon();

        var marker3_btn = document.getElementById("marker3_btn");
        var marker3_txt = document.getElementById("marker3_txt");
        google.maps.event.addDomListener(marker3_btn, "click", function() {
          marker3_txt.value = marker3.getPosition();
        });
        marker3_txt.value = marker3.getPosition();

      }

      function createMarker(opts) {
        var marker = new google.maps.Marker(opts);
        return marker;
      }


      google.maps.event.addDomListener(window, "load", initialize);
