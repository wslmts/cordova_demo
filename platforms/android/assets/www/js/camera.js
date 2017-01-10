document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });

    function onSuccess(imageURI) {
        var image = document.getElementById('img1');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }
}

