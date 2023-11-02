function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let av = sum / 3;
    return av;
}

function createSentence(num, noun) {
    let sent = "On average, a Berkeley student has " + num + " " + noun + "s";
    return sent;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * (max + 1))
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, "bunny");

console.log(sentence);