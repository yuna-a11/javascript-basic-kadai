// numの値を1以上の正の整数で設定
let num = 15; // ここを任意の正の数に変更可能

// 条件分岐
if (num % 3 === 0 && num % 5 === 0) {
  console.log("3と5の倍数です");
} else if (num % 3 === 0) {
  console.log("3の倍数です");
} else if (num % 5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}