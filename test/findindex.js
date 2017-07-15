var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const arr = Array.from(Array(1000000), (v, k) => `a${k+1}`);
const obj = {};
const map = new Map([]);
let counter = 0
for (let v of arr) {
    obj[v] = counter;
    map.set(v, counter);
    counter ++;
}
const elem = 'a999999';

// add tests
suite
.add('Array.indexOf', () => arr.indexOf(elem))
.add('Map.get', () => map.get(elem))
.add('Object.key', () => obj[elem])
.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function ()  {
  	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });

