var files = [ "cheetah", "monkey", "bear", "ohmyyy" ];
var sounds = [];

function loadSounds() {
    for (var i = 0; i < files.length; i++)
        loadSound(files[i] + ".wav");
}

function loadSound(file) {
    var sound = new Audio();
    sound.src = "https://s3.amazonaws.com/PewPew/v1.0/" + file;
    sound.load();

    sounds.push(sound);
}

chrome.tabs.onRemoved.addListener(function(tabId, removeObject) {
    var random = Math.random() * 100;

   if (random < 75)
        return;

    sounds[parseInt(random / 33)].play();
});

loadSounds();
