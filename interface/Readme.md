# 介面 - interface

## 定義:
- 規範物件中的屬性

### ts 宣告
```ts
interface User{
    id:number;
    name:string;
    email:string;
}

let userDetail:User = {
    id: 0,
    name: "Chicken",
    email: "chicken@gmail.com"
}
```

### js 宣告
```js
var userDetail = {
    id: 0,
    name: "Chicken",
    email: "chicken@gmail.com"
};
```

### wy 宣告
```wy
吾有一物。名之曰「使用者明細」
昔之「使用者明細」之「「序號」」者。今零是矣。
昔之「使用者明細」之「「名字」」者。今「「雞」」是矣。
昔之「使用者明細」之「「信箱」」者。今「「chicken@gmail.com」」是矣。
```

![文言](https://github.com/LonelyYeezhiChicken/my-first-ts/blob/main/interface/interfaceDemo.svg)

[回首頁](https://github.com/LonelyYeezhiChicken/my-first-ts)