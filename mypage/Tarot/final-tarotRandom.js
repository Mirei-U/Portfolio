function getMessage(){
  var imglist = new Array(
    "Cards/0愚者.jpg","Cards/1魔術師.png","Cards/2女教皇.png","Cards/3女帝.png","Cards/4皇帝.png","Cards/5法皇.png","Cards/6恋人.png",
    "Cards/7戦車.png","Cards/8力.png","Cards/9隠者.png","Cards/10運命の輪.png","Cards/11正義.png","Cards/12吊るされた男.png",
    "Cards/13死神.png","Cards/14節制.png","Cards/15悪魔.png","Cards/16塔.png","Cards/17星.png","Cards/18月.png","Cards/19太陽.png",
    "Cards/20最後の審判.png","Cards/21世界.png","Cards/0愚者逆位置.jpg","Cards/1魔術師逆位置.png","Cards/2女教皇逆位置.png",
    "Cards/3女帝逆位置.png","Cards/4皇帝逆位置.png","Cards/5法皇逆位置.png","Cards/6恋人逆位置.png","Cards/7戦車逆位置.png",
    "Cards/8力逆位置.png","Cards/9隠者逆位置.png","Cards/10運命の輪逆位置.png","Cards/11正義逆位置.png","Cards/12吊るされた男逆位置.png",
    "Cards/13死神逆位置.png","Cards/14節制逆位置.png","Cards/15悪魔逆位置.png","Cards/16塔逆位置.png","Cards/17星逆位置.png","Cards/18月逆位置.png",
    "Cards/19太陽逆位置.png","Cards/20最後の審判逆位置.png","Cards/21世界逆位置.png");
  var selectnum = Math.floor(Math.random() * imglist.length);
  var output = "<img src=" + imglist[selectnum] + ">";

  var e = document.getElementById("showMessage");
  // e.innerHTML= imglist[selectnum];
  // document.write(output);
  e.innerHTML= output;
}
