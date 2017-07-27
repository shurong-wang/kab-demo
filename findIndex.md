## 获取元素位置性能比较

```javascript
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
```

### Array.indexOf

```javascript
arr.indexOf(elem);
```

### Map.get

```javascript
map.get(elem);
```

### Object.key

```javascript
obj[elem];
```
