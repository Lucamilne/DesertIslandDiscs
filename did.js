var frames = document.querySelectorAll(".frame");
var order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Fisher-Yates Shuffle
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

shuffle(order);

for (var i =  0; i < frames.length; i++) {
    frames[i].style.order = order[i].toString();
};