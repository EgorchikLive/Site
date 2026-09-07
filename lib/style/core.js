function playPause() {
    var audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play(); 
        $('.pause-btn').show();
        $('.play-btn').hide();
    } else {
        audio.pause(); 
        $('.play-btn').show();
        $('.pause-btn').hide();
    }
}
