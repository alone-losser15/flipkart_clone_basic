//function expand(){
   // document.getElementById("main_img").innerHTML='<img src="ROG 5 ULTIMATE.png" alt="" ondblclick="expand()">'
//}
function expand1(){
    document.getElementById("main_img").innerHTML='<img src="../img/img40.jpg" ondblclick="expand()">'
}
function expand2(){
    document.getElementById("main_img").innerHTML='<img src="../img/img41.jpg" ondblclick="expand()">'
}
function expand3(){
    document.getElementById("main_img").innerHTML='<img src="../img/img42.jpg" ondblclick="expand()">'
}
// function expand4(){
//     document.getElementById("main_img").innerHTML='<img src="img3.jpg" ondblclick="expand()">'
// }
// function expand5(){
//     document.getElementById("main_img").innerHTML='<img src="i" ondblclick="expand()">'
// }

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
    localStorage.setItem("Price4",Price);
    localStorage.setItem("Product_Details4",Product_Details);
    localStorage.setItem("Product_Img4",Product_Img);
}