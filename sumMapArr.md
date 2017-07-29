## 求和数组性能比较

// 给定一个很大的数组，数组里面有许多整数，要求：
// 将数组中【和】为 10 的每一对数配对并找出，返回这些数配对后的数组
// 例如：[11, 3, 8, 9, 7, -1, 1, 2, 4...]
// 得到：[[11,-1],[3,7],[8,2],[9,1]...]

```javascript
function getMapArr1(arr) {
    const resArr = [];
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === 10) {
                resArr.push([arr[i], arr[j]]);
            }
        }
    }
    return resArr;
}

function getMapArr2(arr) {
    const resArr = [];
    arr = arr.sort((a, b) => a - b);

    for (let i = 0, j = arr.length - 1; i < j;) {
        const a = arr[i];
        const b = arr[j];
        if (a + b === 10) {
            resArr.push([a, b]);
            i++;
            j--;
        }
		else if (a + b < 10) {
            i++;
        }
		else {
            j--;
        }
    }

    return resArr;
}

// const arr = [11, 4, 9, 3, -1, -3, 6, 7, 9, 13, 8];
// const arr = [...Array(19).keys()];
const arr = [...Array(21).keys()];
```

### Nested Loops

```javascript
getMapArr1(arr);
```

### Sorted Loops

```javascript
getMapArr2(arr);
```
