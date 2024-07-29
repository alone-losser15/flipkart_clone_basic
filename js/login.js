let name1="Harsh Kishor";
let add="H6 NIT KKR , Kurukshetra PIN code 136119";
let mob=9307854038;
let email="harshkishor8809@gmail.com"

function loginC(){
    var username=document.getElementById("username1").value;
    var password=document.getElementById("password1").value;
    var repassword=document.getElementById("repassword1").value;
    console.log(username);
    console.log(password);
    console.log(repassword);
    console.log(name1);
    console.log(add);
    console.log(mob);
    console.log(email);
    if(repassword!=password)
    {
        alert('BOTH PASSWORD IS NOT SAME');
    }
    else{
        if(username=="harsh3003"){
            if(password=="12345"){
                // document.getElementById("continue_shoping").innerHTML='<button><a href="home.html">CONTINUE SHOPPING</a></button> >>>>';
                alert('Login Successfully continue to shopping');
                localStorage.setItem('user_name',name1);
                localStorage.setItem('address',add);
                localStorage.setItem('contact',mob);
                localStorage.setItem('email',email);
                
                
            }
            else{
                alert('Password did not match');
            }
        }
        else{
            alert('Invalid User id');    
        }
    }
}