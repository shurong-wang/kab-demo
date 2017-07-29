kab 使用说明
---
1. [Benchmark 官网](https://benchmarkjs.com/)
2. `npm i --save benchmark`
3. `npm i --save microtime`
4. 示例：

    ```javascript
    var suite = new Benchmark.Suite;

    // add tests
    suite.add('RegExp#test', function() {
      /o/.test('Hello World!');
    })
    .add('String#indexOf', function() {
      'Hello World!'.indexOf('o') > -1;
    })
    .add('String#match', function() {
      !!'Hello World!'.match(/o/);
    })
    // add listeners
    .on('cycle', function(event) {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
    ```
