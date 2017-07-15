var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

function toThousands1 (num) {
    num = (num || 0).toString();
    var newNum = '';
    var counter = 0;
    for (var i = num.length - 1; i >= 0; i--) {
        counter += 1;
        newNum = num.charAt(i) + newNum;
        if ((counter % 3 === 0) && i != 0) {
            newNum = ',' + newNum;
        }
    }
    return newNum;
}

function toThousands2 (num) {
    var num = (num || 0).toString();
    switch (num.length % 3) {
        case 1:
            num = '00' + num;
            break;
        case 2:
            num = '0' + num;
            break;
    }
    return num.match(/\d{3}/g).join(',').replace(/^0+/, '');
}

function toThousands3 (num) {
    var num = (num || 0).toString();
    if (num.length % 3 > 0) {
        num = '0'.repeat(3 - num.length % 3) + num;
    }
    return num.match(/\d{3}/g).join(',').replace(/^0+/, '');
}

function toThousands4 (num) {
    var numStr = '' + num;
    var len = numStr.length;
    if(len <= 3) {
        return numStr;
    }
    var subNumStr = '';
    while(len > 3){
        len -= 3;
        subNumStr = ',' + numStr.substr(len, 3) + subNumStr;
    }
    return numStr.substr(0, len) + subNumStr;
}

function toThousands5 (num) {
    // return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
		return (num || 0).toString().replace(/(?=(?!\b)(\d{3})+$)/g, ',');
}

// add tests
suite
.add('toThousands1', toThousands1)
.add('toThousands2', toThousands2)
.add('toThousands3', toThousands3)
.add('toThousands4', toThousands4)
.add('toThousands5', toThousands5)
.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function ()  {
  	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });


