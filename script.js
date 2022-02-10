var sentens = "let len = sentens.length-sentens.length;<br/>let max__len = sentens.length;<br/>let show_sentens = <br/>let len = sentens.length-sentens.length;<br/>let max__len = sentens.length;<br/>let show_sentens = <br/> function type(){<br/>  if (len < max__len) {show_sentens = show_sentens + sentens.charAt(len);<br/>document.getElementById(hackertyper).innerHTML = show_sentens;<br/>len++<br/>}<br/>document.addEventListener('keypress', type);"
// var sentens = "aaaaae"

// TODO: resetで文章も？

let len = sentens.length-sentens.length;
let max__len = sentens.length;
let show_sentens = ""

function type(){
  if (len < max__len) {

    show_sentens = show_sentens + sentens.charAt(len);
    document.getElementById("hackertyper").innerHTML = show_sentens;
    len++
  }else{
    granted();
  }
}

function granted() {
    document.getElementById("hackertyper").innerHTML = "";
    document.getElementById('granted').style.display = 'inline';
}

function reset() {
  document.getElementById("granted").style.display = "none";
  console.log("reset");
}

// キー検出
document.addEventListener('keypress', type);


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
