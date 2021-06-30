
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/kermit_avatar.png') {
      myImage.setAttribute('src','https://g.foolcdn.com/editorial/images/631594/shiba-inu-dogecoin.jpg');
    } else {
      myImage.setAttribute('src','img/kermit_avatar.png');
    }
}