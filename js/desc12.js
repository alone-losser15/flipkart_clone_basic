function expand(){
    document.getElementById("main_img").innerHTML='<img src="../img/ROG 5 ULTIMATE.png" alt="" ondblclick="expand()">'
}
function expand1(){
    document.getElementById("main_img").innerHTML='<img src="../img/ROG 5 ULTIMATE1.jpeg" ondblclick="expand()">'
}
function expand2(){
    document.getElementById("main_img").innerHTML='<img src="../img/ROG 5 ULTIMATE2.jpeg" ondblclick="expand()">'
}
function expand3(){
    document.getElementById("main_img").innerHTML='<img src="../img/ROG 5 ULTIMATE3.jpeg" ondblclick="expand()">'
}
function expand4(){
    document.getElementById("main_img").innerHTML='<img src="../img/ROG 5 ULTIMATE4.jpeg" ondblclick="expand()">'
}
function expand5(){
    document.getElementById("main_img").innerHTML='<img src="../img/ROG 5 ULTIMATE5.jpg" ondblclick="expand()">'
}

function cartopen(){
    var myWindow = window.open("../html/mycart.html", "_blank");
}
function buynow(){
    var price=document.getElementById("Price").innerHTML;
    console.log(price);
    localStorage.setItem("price",price);
    // var win=window.open("buypage.html","_blank");
}
function addcart(){
    var Product_Img = document.getElementById("main_img").innerHTML;
    var Product_Details = document.getElementById("Product_Details").innerHTML;
    var Price = document.getElementById("Price").innerHTML;
    var Quantity =1;

    console.log(Quantity);
    console.log(Price);
    console.log(Product_Details);
    console.log(Product_Img);
    localStorage.setItem("Price12",Price);
    localStorage.setItem("Product_Details12",Product_Details);
    localStorage.setItem("Product_Img12",Product_Img);
}