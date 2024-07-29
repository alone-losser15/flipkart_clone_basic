                

// document.getElementById("pro_price").innerHTML= 76000;
// document.getElementById("delivery_charges").innerHTML= 0;
// document.getElementById("offers").innerHTML= 0;
// document.getElementById("total_price").innerHTML= 76000;
console.log(document.getElementById("pro_price").innerHTML);
console.log(document.getElementById("delivery_charges").innerHTML);
console.log(document.getElementById("offers").innerHTML);
console.log(document.getElementById("total_price").innerHTML);
// var p=document.getElementById("Price").innerHTML;
// console.log(p);
window.addEventListener('load', () =>{
    var price=localStorage.getItem('price');
    document.getElementById('pro_price').innerHTML=price;
    document.getElementById("total_price").innerHTML=price;
    document.getElementById("offers").innerHTML=0;
    document.getElementById("delivery_charges").innerHTML=0;
})

function confirmbuy(){
    
}