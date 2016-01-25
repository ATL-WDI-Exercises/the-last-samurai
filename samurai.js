// The Last Samurai

var samurai = [];
for (var i = 1; i <= 100; i++) {
  samurai.push(i);
}

var killer = 0;
while(samurai.length > 1) {
  var toBeKilled = (killer + 1) % samurai.length;
  console.log('%s, %s ==> %s about to kill %s : %s',
              killer, toBeKilled, samurai[killer], samurai[toBeKilled], samurai.length);
  samurai.splice(toBeKilled, 1);
  killer = toBeKilled % samurai.length;   // because we spliced out the dead guy.
}

console.log('Last one standing:', samurai);
