// 体重と身長を変数に代入
let weight = 68; // kg
let height = 1.7; // m

// BMIを計算
let bmi = weight / (height * height);

// 結果をコンソールに出力
console.log("体重: " + weight + "kg");
console.log("身長: " + height + "m");
console.log("BMI: " + bmi.toFixed(2)); // 小数点以下2桁に整形