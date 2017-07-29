# 获取元素位置性能比较

```javascript
const arr = Array.from(Array(10000), (v, k) => `AK${k+1}`);

const obj = arr.reduce((obj, v, k) => {
  obj[v] = k;
  return obj;
}, {});

const map = arr.reduce((map, v, k) => {
    return map.set(v, k);
}, new Map());

const val = 'AK4321';
```

## Array.indexOf

```javascript
arr.indexOf(val);
```

## Map.get

```javascript
map.get(val);
```

## Object.key

```javascript
obj[val];
```
