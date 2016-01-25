// The Last Samurai

/*
var samurai = [];
for (var i = 1; i <= 100; i++) {
  samurai.push(i);
}
*/

function lastSamurai(numSamurai) {

  var samurai = Array.from(new Array(numSamurai).keys(), x => x + 1);

  var killer = 0;
  while(samurai.length > 1) {
    var toBeKilled = (killer + 1) % samurai.length;
    console.log('(%s) %s is about to kill (%s) %s leaving remaining = %s',
                killer, samurai[killer], toBeKilled, samurai[toBeKilled], samurai.length - 1);
    samurai.splice(toBeKilled, 1);
    killer = toBeKilled % samurai.length;   // because we spliced out the dead guy.
  }

  return samurai[0];
}

console.log('For 5 Samurai, the last one standing is:', lastSamurai(5));
console.log();
console.log('For 100 Samurai, the last one standing is:', lastSamurai(100));
