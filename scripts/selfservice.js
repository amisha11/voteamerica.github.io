// var remoteUrl = "http://localhost:8000";                                                                 
var remoteUrl = "https://api.carpoolvote.com/live";

// call page with querystring
// self.html?UUID_driver=9dba44a5-8188-4ced-925f-11c80fa9e130&DriverPhone=07958110786

// will support fairly old browsers?
// 
// http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var UUID_driver = getParameterByName('UUID_driver'); 
var UUID_rider = getParameterByName('UUID_rider'); 
var Score = getParameterByName('Score'); 

// these will be put input into the text field rather than passed as querystring params
// var DriverPhone = getParameterByName('DriverPhone'); 
// var RiderPhone = getParameterByName('RiderPhone'); 
// var LastName = getParameterByName('LastName'); 

function getCheckValue() {
  var phoneNumField = document.getElementById("inputPhoneNumber");

  return phoneNumField.value;
}
 
if (UUID_driver === null) {
  var buttonCancelDriveOffer = document.getElementById("btnCancelDriveOffer");

  buttonCancelDriveOffer.classList.add("hiddenButton");
}

if (UUID_rider === null) {
  var buttonCancelRideRequest = document.getElementById("btnCancelRideRequest");

  buttonCancelRideRequest.classList.add("hiddenButton");
}

if (Score === null) {
  var buttonAcceptDriverMatch = document.getElementById("btnAcceptDriverMatch");

  buttonAcceptDriverMatch.classList.add("hiddenButton");
}


function cancelRideRequest() {
  // var checkField = (RiderPhone || LastName || "");
  var checkField = getCheckValue();

  buttonCancelDriveOffer.classList.add("hiddenButton");

  var url = 
    remoteUrl + 
    '/cancel-ride-request?' + 
    'UUID=' + UUID_rider + 
    '&RiderPhone=' + checkField;

  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();
}

function cancelRiderMatch() {
  var checkField = getCheckValue();

  var url = 
    remoteUrl + '/cancel-rider-match?' + 
    'UUID_driver=' + UUID_driver +
    '&UUID_rider=' + UUID_rider + 
    '&Score=' + Score +
    '&RiderPhone=' + checkField;

  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();
}

function cancelDriveOffer() {
  var checkField = getCheckValue();
  // var checkField = (DriverPhone || LastName || "");

  var url = 
    remoteUrl + '/cancel-drive-offer?' + 
    'UUID=' + UUID_driver +
    '&DriverPhone=' + checkField;

  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();
}

function cancelDriverMatch() {
  var checkField = getCheckValue();

  var url = 
    remoteUrl + '/cancel-driver-match?' + 
    'UUID_driver=' + UUID_driver +
    '&UUID_rider=' + UUID_rider + 
    '&Score=' + Score +
    '&DriverPhone=' + checkField;

  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();
}

function acceptDriverMatch() {
  var checkField = getCheckValue();

  var url = 
    remoteUrl + '/accept-driver-match?' + 
    'UUID_driver=' + UUID_driver +
    '&UUID_rider=' + UUID_rider + 
    '&Score=' + Score +
    '&DriverPhone=' + checkField;

  var request = new XMLHttpRequest();

  request.open("GET", url);
  request.send();
}
