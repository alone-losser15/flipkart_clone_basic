// function addcart(){
//     var Product_Img = document.getElementById("main_img").innerHTML;
//     var Product_Details = document.getElementById("Product_Details").innerHTML;
//     var Price = document.getElementById("Price").innerHTML;
//     var Quantity =1;

//     console.log(Quantity);
//     console.log(Price);
//     console.log(Product_Details);
//     console.log(Product_Img);

//     let i=1;
//     let j="id"+i;
//     console.log(typeof j);
//     console.log(typeof i);
//     console.log(j);
//     console.log(document.getElementById("id1").innerHTML);
//     // while(document.getElementById(j).textContent.value != "...")
//     // {
//     //     i++;
//     //     j="id"+i;
//     //     console.log(typeof j);
//     //     console.log(j);
//     // }
    
// }

console.log(document.getElementById("cart_productdetail").innerHTML);

window.addEventListener('load', () =>{
    var price1=localStorage.getItem('Price1');
    var img1=localStorage.getItem('Product_Img1');
    var detail1=localStorage.getItem('Product_Details1');

    var price2=localStorage.getItem('Price2');
    var img2=localStorage.getItem('Product_Img2');
    var detail2=localStorage.getItem('Product_Details2');

    var price3=localStorage.getItem('Price3');
    var img3=localStorage.getItem('Product_Img3');
    var detail3=localStorage.getItem('Product_Details3');

    var price4=localStorage.getItem('Price4');
    var img4=localStorage.getItem('Product_Img4');
    var detail4=localStorage.getItem('Product_Details4');

    var price6=localStorage.getItem('Price5');
    var img6=localStorage.getItem('Product_Img5');
    var detail6=localStorage.getItem('Product_Details5');

    var price5=localStorage.getItem('Price6');
    var img5=localStorage.getItem('Product_Img6');
    var detail5=localStorage.getItem('Product_Details6');

    var price7=localStorage.getItem('Price7');
    var img7=localStorage.getItem('Product_Img7');
    var detail7=localStorage.getItem('Product_Details7');

    var price8=localStorage.getItem('Price8');
    var img8=localStorage.getItem('Product_Img8');
    var detail8=localStorage.getItem('Product_Details8');

    var price9=localStorage.getItem('Price9');
    var img9=localStorage.getItem('Product_Img9');
    var detail9=localStorage.getItem('Product_Details9');

    var price10=localStorage.getItem('Price10');
    var img10=localStorage.getItem('Product_Img10');
    var detail10=localStorage.getItem('Product_Details10');

    var price11=localStorage.getItem('Price11');
    var img11=localStorage.getItem('Product_Img11');
    var detail11=localStorage.getItem('Product_Details11');

    var price12=localStorage.getItem('Price12');
    var img12=localStorage.getItem('Product_Img12');
    var detail12=localStorage.getItem('Product_Details12');

    var price13=localStorage.getItem('Price13');
    var img13=localStorage.getItem('Product_Img13');
    var detail13=localStorage.getItem('Product_Details13');

    var price14=localStorage.getItem('Price14');
    var img14=localStorage.getItem('Product_Img14');
    var detail14=localStorage.getItem('Product_Details14');

    var price15=localStorage.getItem('Price15');
    var img15=localStorage.getItem('Product_Img15');
    var detail15=localStorage.getItem('Product_Details15');

    var price16=localStorage.getItem('Price16');
    var img16=localStorage.getItem('Product_Img16');
    var detail16=localStorage.getItem('Product_Details16');
    if(detail1!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img1+'</div><div><h5>'+ detail1+'</h5></div><div>'+price1+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail2!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img2+'</div><div><h5>'+ detail2+'</h5></div><div>'+price2+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail3!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img3+'</div><div><h5>'+ detail3+'</h5></div><div>'+price3+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail4!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img4+'</div><div><h5>'+ detail4+'</h5></div><div>'+price4+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail5!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img5+'</div><div><h5>'+ detail5+'</h5></div><div>'+price5+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail6!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img6+'</div><div><h5>'+ detail6+'</h5></div><div>'+price6+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail7!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img7+'</div><div><h5>'+ detail7+'</h5></div><div>'+price7+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail8!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img8+'</div><div><h5>'+ detail8+'</h5></div><div>'+price8+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail9!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img9+'</div><div><h5>'+ detail9+'</h5></div><div>'+price9+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail10!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img10+'</div><div><h5>'+ detail10+'</h5></div><div>'+price10+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail11!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img11+'</div><div><h5>'+ detail11+'</h5></div><div>'+price11+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail12!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img12+'</div><div><h5>'+ detail12+'</h5></div><div>'+price12+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail13!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img13+'</div><div><h5>'+ detail13+'</h5></div><div>'+price13+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail14!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img14+'</div><div><h5>'+ detail14+'</h5></div><div>'+price14+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail15!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img15+'</div><div><h5>'+ detail15+'</h5></div><div>'+price15+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }
    if(detail16!=null){
        document.getElementById("cart_productdetail").innerHTML+='<div> </div><div>'+img16+'</div><div><h5>'+ detail16+'</h5></div><div>'+price16+'</div><div><input type="number" name="quantity" id="quantity1" value="1"></div>';
    }

})

function buynow1()
{
    var price1=Number(localStorage.getItem('Price1'));
    var img1=localStorage.getItem('Product_Img1');
    var detail1=localStorage.getItem('Product_Details1');

    var price2=Number(localStorage.getItem('Price2'));
    var img2=localStorage.getItem('Product_Img2');
    var detail2=localStorage.getItem('Product_Details2');

    var price3=Number(localStorage.getItem('Price3'));
    var img3=localStorage.getItem('Product_Img3');
    var detail3=localStorage.getItem('Product_Details3');

    var price4=Number(localStorage.getItem('Price4'));
    var img4=localStorage.getItem('Product_Img4');
    var detail4=localStorage.getItem('Product_Details4');

    var price6=Number(localStorage.getItem('Price5'));
    var img6=localStorage.getItem('Product_Img5');
    var detail6=localStorage.getItem('Product_Details5');

    var price5=Number(localStorage.getItem('Price6'));
    var img5=localStorage.getItem('Product_Img6');
    var detail5=localStorage.getItem('Product_Details6');

    var price7=Number(localStorage.getItem('Price7'));
    var img7=localStorage.getItem('Product_Img7');
    var detail7=localStorage.getItem('Product_Details7');

    var price8=Number(localStorage.getItem('Price8'));
    var img8=localStorage.getItem('Product_Img8');
    var detail8=localStorage.getItem('Product_Details8');

    var price9=Number(localStorage.getItem('Price9'));
    var img9=localStorage.getItem('Product_Img9');
    var detail9=localStorage.getItem('Product_Details9');

    var price10=Number(localStorage.getItem('Price10'));
    var img10=localStorage.getItem('Product_Img10');
    var detail10=localStorage.getItem('Product_Details10');

    var price11=Number(localStorage.getItem('Price11'));
    var img11=localStorage.getItem('Product_Img11');
    var detail11=localStorage.getItem('Product_Details11');

    var price12=Number(localStorage.getItem('Price12'));
    var img12=localStorage.getItem('Product_Img12');
    var detail12=localStorage.getItem('Product_Details12');

    var price13=Number(localStorage.getItem('Price13'));
    var img13=localStorage.getItem('Product_Img13');
    var detail13=localStorage.getItem('Product_Details13');

    var price14=Number(localStorage.getItem('Price14'));
    var img14=localStorage.getItem('Product_Img14');
    var detail14=localStorage.getItem('Product_Details14');

    var price15=Number(localStorage.getItem('Price15'));
    var img15=localStorage.getItem('Product_Img15');
    var detail15=localStorage.getItem('Product_Details15');

    var price16=Number(localStorage.getItem('Price16'));
    var img16=localStorage.getItem('Product_Img16');
    var detail16=localStorage.getItem('Product_Details16');

    var price=price1+price2+price3+price4+price5+price6+price7+price8+price9+price10+price11+price12+price13+price14+price15+price16;
    localStorage.setItem("price",price);
}

