//「解答済み」を表示するプログラム
function distinction(){
    var result = "";
    var grep = "";
    var grep2 = "";
    var f;
    //保存されているデータの数だけループ
    for(var i=0; i<localStorage.length; i++){
      //i番目のキーを取得
      var arr = storage.key(i);
  result += arr+"s";
  var grep = result.match(/.*(?=\\t20)/);
  var a = grep;
  var b= a.toString();
  var c = b.slice(-2);
  var d = c.replace("s","");
  if(d.length==1){
  e = "0"+d;
  }else{
  e = d;
  }
  var grep2 = grep2 + "p" + e;
  $("td#p"+e).text('解答済み');
  }
  }