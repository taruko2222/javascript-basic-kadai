// 変数numの定義
let num = 15;

//変数numが3と5の倍数の場合： “3と5の倍数です”
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {   //変数numが3の倍数の場合： “3の倍数です”
    console.log("3の倍数です");
} else if (num % 5 === 0) {     //変数numが5の倍数の場合： “5の倍数です”
    console.log("5の倍数です");
} else {
    console.log(num);
}

