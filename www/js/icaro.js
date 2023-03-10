

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

    var nome_operatore = localStorage.getItem('nome_operatore');
    var cognome_operatore = localStorage.getItem('cognome_operatore');
    var descrizione_struttura = localStorage.getItem('descrizione_struttura');

    var dettaglio = descrizione_struttura;
    var nominativo = cognome_operatore+" "+ nome_operatore;

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
                    <h6 style="font-family: Verdana; margin-top:5%; margin-left:5%;" class="style-text"><b>'+dettaglio+'<br>Data: '+ getDate() + '<br>' + nominativo + '</b></h6>\
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
    var success = false;

    if (device.model.indexOf("iPhone") != -1)
        success = true;

    return success;
}
function isiPad() {
    var success = false;

    if (device.model.indexOf("iPad") != -1)
        success = true;

    return success;
}

function getDATAFORCALL()
{
    var currentdate = new Date(); 
    var month='';
    switch ((currentdate.getMonth()+1)) {
        case 1:
            month="01";
            break;
        case 2:
            month="02";
            break;
        case 3:
            month="03";
            break;
        case 4:
            month="04";
            break;
        case 5:
            month="05";
            break;
        case 6:
            month="06";
            break;
        case 7:
            month="07";
            break;
        case 8:
            month="08";
            break;
        case 8:
            month="09";
        break;

        default:
            break;
    }
    var datetime=currentdate.getFullYear()+"-"+month
    //var datetime = "Now: " + currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/"+ currentdate.getFullYear() + " @ "+ currentdate.getHours() + ":"+ currentdate.getMinutes() + ":"  + currentdate.getSeconds();

    return datetime;
}

function getDATA()
{
    var currentdate = new Date(); 
    var month='';
    switch ((currentdate.getMonth()+1)) {
        case 1:
            month="01";
            break;
        case 2:
            month="02";
            break;
        case 3:
            month="03";
            break;
        case 4:
            month="04";
            break;
        case 5:
            month="05";
            break;
        case 6:
            month="06";
            break;
        case 7:
            month="07";
            break;
        case 8:
            month="08";
            break;
        case 8:
            month="09";
        break;

        default:
            break;
    }
    var datetime=currentdate.getFullYear()+"-"+month + currentdate.getFullYear()
    //var datetime = "Now: " + currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/"+ currentdate.getFullYear() + " @ "+ currentdate.getHours() + ":"+ currentdate.getMinutes() + ":"  + currentdate.getSeconds();

    return datetime;
}

function getTIME()
{
    var currentdate = new Date(); 
    var time=currentdate.getHours()+":"+currentdate.getMinutes()+":"+currentdate.getSeconds()
   
    return time;
}
/*
function refresh_token() {
    var refresh_token = localStorage.getItem('refresh_token');
    var details = {
        'grant_type': 'refresh_token',
        'client_secret': '9cf35845-f09e-4d73-a7f0-048d51bc06a5',
        'client_id': 'simeal',
        'refresh_token': refresh_token,
    };


    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("https://login-dev.maggiolicloud.it/auth/realms/" + realms + "/protocol/openid-connect/token/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    }).then((response) => response.json())
        .then((responseData) => {
            var access_token = responseData['access_token'];
            var refresh_token = responseData['refresh_token'];
            localStorage.setItem('refresh_token', refresh_token);

            if (access_token != '' && access_token != null && access_token != undefined) {

                var url = 'https://gateway.icaro-dev.maggioli.cloud/services/autorizzazioniservice/api/account-info';
                $.ajax({
                    url: url,
                    type: 'GET',
                    xhrFields: { withCredentials: true },
                    crossDomain: true,
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
                    },
                    success: function (result, textStatus, jqXHR) {
                        localStorage.removeItem('Cookie');
                        localStorage.removeItem('X-XSRF-TOKEN');

                        window.cordova.plugins.CookiesPlugin.getCookie(url, (cookies) => {

                            var cookie = cookies;
                            localStorage.setItem('Cookie', cookie);
                            var aCOOKIE = cookie.split(";");
                            var XSRF_TOKEN = aCOOKIE[0];

                            var aXSRF_TOKEN = XSRF_TOKEN.split("=");
                           
                            localStorage.setItem("X-XSRF-TOKEN", aXSRF_TOKEN[1]);

                        });

                    },
                    error: function () { },
                });

            }
            else {
                console.log("Access token empty");
            }
        }).catch(err => {
            console.log(err)
        });

}
*/