const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// 要素数を出力し、出力した要素数をaに代入
a = holidays.length;

// for文の場合
for (let i = 0; i < a; i++) {
    console.log(holidays[i]);
}

// while文の場合
let b = 0;
while (b < a) {
    console.log(holidays[b]);
    b++;
}