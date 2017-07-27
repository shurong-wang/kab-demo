## 数字千分位格式化性能比较

```javascript
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
```

### toThousands1

```javascript
toThousands1()
```

### toThousands2

```javascript
toThousands2()
```

### toThousands3

```javascript
toThousands3()
```

### toThousands4

```javascript
toThousands4()
```

### toThousands5

```javascript
toThousands5()
```
