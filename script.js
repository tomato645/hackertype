var sentens = "let len = sentens.length-sentens.length;<br/>let max__len = sentens.length;<br/>let show_sentens = <br/>let len = sentens.length-sentens.length;<br/>let max__len = sentens.length;<br/>let show_sentens = <br/> function type(){<br/>  if (len < max__len) {show_sentens = show_sentens + sentens.charAt(len);<br/>document.getElementById(hackertyper).innerHTML = show_sentens;<br/>len++<br/>}<br/>document.addEventListener('keypress', type);"
// var sentens = "aaaaae"

// TODO: resetで文章も？
// TODO: 乱数偏りなくしたい

let len = sentens.length-sentens.length;
let max__len = sentens.length;
let show_sentens = ""

// ランダムな文字数をsentensから表示
function type(){
  if (len < max__len) {
    var repeat = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(repeat);

    for (let i = 0; i <= repeat; i++){
      console.log("doing");
      show_sentens = show_sentens + sentens.charAt(len);
      document.getElementById("hackertyper").innerHTML = show_sentens;
      len++
    }
  }else{
    granted();
  }
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
    console.log("ctrlkey"+num);

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
  console.log(font);
  document.documentElement.style.setProperty("--font-family", font);
}

// キー検出
document.addEventListener('keypress', type);
