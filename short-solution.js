// The Last Samurai

function lastSamurai(numSamurai) {
  var samurai = Array.from(new Array(numSamurai).keys(), x => 'Samurai ' + (x + 1));
  var toBeKilled = 1;
  while(samurai.length > 1) {
    samurai.splice(toBeKilled++, 1);
    toBeKilled %= samurai.length;
  }
  return samurai[0];
}

console.log('For 5 Samurai, the last one standing is', lastSamurai(5));
console.log('For 100 Samurai, the last one standing is', lastSamurai(100));
