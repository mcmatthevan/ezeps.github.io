if (location.protocol === "file:" || /localhost/.test(location.href)){
    var IP = "http://localhost:6700";
} else {
    var IP = "https://palgania.ovh:6700";
}
