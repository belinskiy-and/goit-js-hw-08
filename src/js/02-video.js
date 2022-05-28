// import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.on('pause', function() {
    console.log('pause the video!');
});

player.on('timeupdate', function (data) {    
    try {
        dataJSON = JSON.stringify(data);
        localStorage.setItem("videoplayer-current-time", dataJSON);
    }
    catch(error) {
        console.log(error);
    }
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


try {
    dataJSON = localStorage.getItem("videoplayer-current-time");
    data = JSON.parse(dataJSON);

    console.log(data.seconds);

    player.setCurrentTime(data.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
    
}
catch(error) {
    console.log(error);
}


