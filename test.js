       
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

        
    
            var tile_layer_26d874eb9dfc4ac2876c7a34d8e8114a = L.tileLayer(
                "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=sk.eyJ1IjoibHVtYWhlbGwiLCJhIjoiY2t0a2M1dXFlMDFsZjJ1bjJlZXR6anF4byJ9.X-_qJgkBC6ROLU-T91i-6A",
                {"attribution": "Mapbox", "detectRetina": false, "maxNativeZoom": 23, "maxZoom": 23, "minZoom": 17, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map);
        
    