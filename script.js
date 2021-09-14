$(function () {
    
    $.ajax({
        type: "GET",
        url: IP + "/ping",
        dataType: "json",
        success: function (response) {
            if (response === "OK"){
                $("embed").attr("src",IP+"/index");
                $("#adddiv").show();
            }
        }
    });
});