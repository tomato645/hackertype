var sentens = "let len = sentens.length-sentens.length;<br/>let max__len = sentens.length;<br/>let show_sentens = <br/>let len = sentens.length-sentens.length;<br/>let max__len = sentens.length;<br/>let show_sentens = <br/> function type(){<br/>  if (len < max__len) {show_sentens = show_sentens + sentens.charAt(len);<br/>document.getElementById(hackertyper).innerHTML = show_sentens;<br/>len++<br/>}<br/>document.addEventListener('keypress', type);"
// var sentens = "aaaaae"

// TODO: 乱数偏りなくしたい

let len = sentens.length-sentens.length;
let max__len = sentens.length;
let show_sentens = ""

// ランダムな文字数をsentensから表示
function type(){
  // 文章が終わったか
  if (len < max__len) {
    // 乱数が満たされるまで文字の表示を繰り返す。
    random();
    for (let i = 0; i <= repeat; i++){
      show_sentens = show_sentens + sentens.charAt(len);
      document.getElementById("hackertyper").innerHTML = show_sentens;
      len++
    }
  }else{
    // 文章が終わったら
    granted();
  }
}

// 変数宣言
let repeat = 0;
var max = document.getElementById("speed");
var min = 1;

// 数値を生成
function random() {
  // speedを取得
  max = document.getElementById("speed");
  // speedを出力
  document.getElementById("Speed_num").innerHTML = "("+ max.value +")";
  // 乱数を生成
  repeat = Math.floor(Math.random() * (max.value - min) + min);
}

// 成功表示
function granted() {
  document.getElementById("hackertyper").innerHTML = "";
  document.getElementById('granted').style.display = 'inline';
}

// リセット
function reset() {
  document.getElementById("granted").style.display = "none";
  len = 0;
  show_sentens = "";
}

// 隠しコマンド
var num = 0;
document.addEventListener('keydown', event => {
  if (event.ctrlKey) {
    num++

    if (num == 3) {
      granted();
    }

    if (num == 6) {
      num = 0
      reset();
    }
  }
});

function change_font(font) {
  document.documentElement.style.setProperty("--font-family", font);
}

// キー検出
document.addEventListener('keypress', type);

















































































































































































































































































































































































































































































































































