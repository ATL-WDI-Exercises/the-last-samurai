// our array of Samurai
var samurai = Array.from(Array(100).keys());

// samurai 1 kills samurai 2, and so on
while(samurai.length > 1) {
  samurai.shift();
}

// get the last man standing!
var lastSamurai = samurai[0] + 1; // The + 1 is because of zero-indexed arrays

// tell everyone who it is!
console.log(`#${lastSamurai} was the last Samurai left!`)
