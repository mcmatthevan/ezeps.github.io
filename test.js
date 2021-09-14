    
    function $_GET(param) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace( 
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
    
        if ( param ) {
            return vars[param] ? vars[param] : null;	
        }
        return vars;
    }

            var map = L.map(
                "map",
                {
                    center: [48.584849, 7.697151],
                    crs: L.CRS.EPSG3857,
                    zoom: 17,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );
            
            map.on("click",function(e){
                console.log( e.latlng)
                window.top.postMessage(e.latlng.lat+','+e.latlng.lng, '*');
                location.href = IP + "/visualize?posX=" + e.latlng.lat + "&posY=" + e.latlng.lng + "&pattern=" + $_GET("pattern");
            });
            

        
    
            var tile_layer_396dc129e2504b7b8edfecd5a7aa8a78 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 17, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map);
        
    
            var tile_layer_ef669f6b135247aab5f5fccf985685b7 = L.tileLayer(
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                {"attribution": "Esri", "detectRetina": false, "maxNativeZoom": 19, "maxZoom": 19, "minZoom": 17, "noWrap": false, "opacity": 0.8, "subdomains": "abc", "tms": false}
            ).addTo(map);
        
