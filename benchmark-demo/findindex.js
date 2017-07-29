var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

const arr = Array.from(Array(10000), (v, k) => `AK${k+1}`);

const obj = arr.reduce((obj, v, k) => {
  obj[v] = k;
  return obj;
}, {});

const map = arr.reduce((map, v, k) => {
    return map.set(v, k);
}, new Map());

const val = 'AK4321';

// add tests
suite
.add('Array.indexOf', () => arr.indexOf(val))
.add('Map.get', () => map.get(val))
.add('Object.key', () => obj[val])
.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function ()  {
  	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });
