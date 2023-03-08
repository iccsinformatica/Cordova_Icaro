

var onSuccess = function (position) {

    var element = document.getElementById('geolocation');

    element.innerHTML = 'Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n'
        + '<hr />' + element.innerHTML;
};

function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}

function getDate() {
    var d = new Date();
    var strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    return strDate;
}

function getHeader() {

    var dettaglio = "ICARO EVO ";
    var nominativo = "Milani Claudio";

    //var descrizione=getLocal("descrizione");
    var device_model = getLocal("device_model");
    var idutente = getLocal("idutente");
    //var nominativo=getLocal("nominativo");

    var string_utente = nominativo + " (" + idutente + ")";

    if (isiPhone()) {
        var header_small = '\<div class="header header-logo-left header-fixed pl-3 header-active" style="height: 100px; padding-top: 35px" id="first_header">\
           <span class="header-title" style="line-height: 30px;">'+ dettaglio + '<br><span class="font-12" id="span_utente">' + string_utente + '</span></span>\
           <span href="javascript:void(0)" onclick="window.location=(\'simeal_impostazioni.html\');"  class="header-icon header-icon-1"><i class="fa fa-cog"></i></span>\
       </div>';
    }
    else {
        var header_small = '\
            <div class="d-flex flex-row " style="margin-left:10%;"  >\
                <img id="logo" name="logo" src="./img/person.svg" "/>\
                <div style="width:50%; margin-left:5%;>\
                    <h6 style="font-family: Verdana; margin-top:5%; margin-left:5%;" class="style-text"><b>Data: '+ getDate() + '<br>' + nominativo + '</b></h6>\
                </div>\
            </div>';
    }// <div style="width: 20%; margin-right:5%; ">\<button type="button" class="btn btn-warning" onclick="logout();">\Logout\</button>\</div>\

    $("#div_header_small").html(header_small);
}

function getLocal(key) {
    value = localStorage.getItem(key);
    return value;
}

function setSession(key, value) {
    sessionStorage.setItem(key, value);
}

function setLocal(key, value) {
    localStorage.setItem(key, value);
}

function getSession(key) {
    value = sessionStorage.getItem(key);
    return value;
}

function destroySession(key) {
    value = sessionStorage.removeItem(key);
    return value;
}

function logout() {

    function onConfirm(button) {

        if (button == 1)
            window.location = ("icaro_login.html");
    }

    navigator.notification.confirm(
        'Sicuro di voler uscire?',
        onConfirm,
        'Attenzione'
    );


}

function isiOS() {
    return (isiPhone() || isiPad());
}
function isiPhone() {
    var success=false;

    if(device.model.indexOf("iPhone") != -1)
        success=true;

    return success;
}
function isiPad() {
    var success=false;

    if(device.model.indexOf("iPad") != -1)
        success=true;

    return success;
}