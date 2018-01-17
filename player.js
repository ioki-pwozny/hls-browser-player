let url = window.location.search.split('?url=')[1] || window.prompt('URL for HLS file:');

function initHLS() {
    if (Hls.isSupported()) {
        let video = document.getElementById('video'),
            hls = new Hls();

        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play();
        });

        function handleClick() {
            if (video.paused) {
                video.src = '';
                video.removeEventListener('click', handleClick);
                initHLS();
            } else {
                video.pause();
            }
        }

        video.addEventListener('click', handleClick);
    }
}

if (url && url.indexOf('http') >= 0) {
    initHLS();
} else {
    document.body.innerHTML = 'incorrect url, reload this page to enter new url';
}