const holidays = [
  "元日", "成人の日", "建国記念の日", "天皇誕生日", "春分の日",
  "昭和の日", "憲法記念日", "みどりの日", "こどもの日",
  "海の日", "山の日", "敬老の日", "秋分の日",
  "スポーツの日", "文化の日", "勤労感謝の日"
];

console.log("=== for文で祝日を出力 ===");

for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}

console.log("=== while文で祝日を出力 ===");

let index = 0; // 繰り返しのカウンタを初期化
while (index < holidays.length) {
  console.log(holidays[index]);
  index++; // カウンタを増加
}