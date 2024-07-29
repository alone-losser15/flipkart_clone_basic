var gallery={0:"../img/scroll1.jpg",1:"../img/scroll2.jpg",2:"../img/scroll3.jpg",3:"../img/scroll4.jpg"};
let i=500;
console.log('<img src='+'"'+gallery[i]+'"'+' >');
console.log(i);
console.log('url('+gallery[i]+')')

function frwd()
{
    i++;
    console.log(i);
    console.log("forward");
    var j = i%4;
    console.log(j);
    document.getElementById("scroll").style.backgroundImage = 'url('+gallery[j]+')';
    // scroll.style.backgroundImage = 'url('+gallery[j]+')';
}
console.log(i);
function bkwd()
{
    i--;
    console.log(i);
    console.log("backward");
    var k = i%4;
    console.log(k);
    document.getElementById("scroll").style.backgroundImage = 'url('+gallery[k]+')';
    // scroll.style.backgroundImage = 'url('+gallery[j]+')';
}
console.log(i);
