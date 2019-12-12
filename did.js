const frames = document.querySelectorAll(".frame");
let order = frameCount(frames.length - 1);

function frameCount(n) {
    if (n < 0) {
        return [];
    } else {
        const frameArray = frameCount(n - 1);
        frameArray.push(n);
        return frameArray;
    }
}

// Fisher-Yates Shuffle
function shuffle(array) {
    let m = array.length, t, i;

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

for (let i =  0; i < frames.length; i++) {
    frames[i].style.order = order[i].toString();
};
