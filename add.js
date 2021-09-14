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

$(function(){
    var current1 = 0, current2 = 0;
    var cord;
    var coordsm;
window.onmessage = function(ev){
    current2 = 1;
    let data = ev.data.split(",");
    coordsm = [parseFloat(data[0]),parseFloat(data[1])];
};
    $("#b2").click(function(){
        if (current2 == 0){
            $("#method1").remove();
            current2 = -1;
            $("p").html("Cliquez pour déterminer la position.");
            $("p").after("<iframe src='test.html?pattern="+ $_GET("pattern")+ "'></iframe>");
        } else if (current2 == 1){
            let pattern = $_GET("pattern").split(",");
            for (let i = 0 ; i < pattern.length ; i++){
                pattern[i] = parseInt(pattern[i]);
            }
            $("iframe").remove();
            $("p").html("Veuillez patienter... <img class='loading_img' src='https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif' alt=''/>");
            /posX=([0-9\.]+)&posY=([0-9\.]+)/.test($("iframe").attr("src"));
            $.ajax({
                type: "POST",
                url: IP+"/addpos",
                data: {args:JSON.stringify({
                    posX: coordsm[0],
                    posY: coordsm[1],
                    pattern: pattern
                })},
                dataType: "json",
                success: function (response) {
                    if (response === "OK"){
                        location.href = "index.html";
                    }
                }
            });
        }
    });
    $("#b1").click(function(){
        if (current1 == 0){
            $("#method2").remove();
            current1 = -1
            $("p").html("Détermination de la position, veuillez patienter... <img class='loading_img' src='https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif' alt=''/>");
            navigator.geolocation.getCurrentPosition(function(pos){
                cord = pos.coords;
                $("p").html("Confirmez la position en cliquant sur OK.");
                $("p").after("<iframe src=\""+IP+"/visualize?posX="+cord.latitude+"&posY="+cord.longitude+"&pattern="+$_GET("pattern")+"\"></iframe>");
                current1 = 1;
            },function(){
                $("p").html("Une erreur est survenue.");
            },{
                enableHighAccuracy: true
            });
        } else if (current1 == 1){
            let pattern = $_GET("pattern").split(",");
            for (let i = 0 ; i < pattern.length ; i++){
                pattern[i] = parseInt(pattern[i]);
            }
            $("iframe").remove();
            $("p").html("Veuillez patienter... <img class='loading_img' src='https://media.giphy.com/media/sSgvbe1m3n93G/giphy.gif' alt=''/>");
            $.ajax({
                type: "POST",
                url: IP+"/addpos",
                data: {args:JSON.stringify({
                    posX: cord.latitude,
                    posY: cord.longitude,
                    pattern: pattern
                })},
                dataType: "json",
                success: function (response) {
                    if (response === "OK"){
                        location.href = "index.html";
                    }
                }
            });
        }
    });
});