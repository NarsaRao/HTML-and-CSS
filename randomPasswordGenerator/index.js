document.getElementById("button").addEventListener("click",function(){
    let chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength=15;
    let password1="";
    let password2="";
    for(let i=0;i<passwordLength;i++){
       let randomNumber1=Math.floor(Math.random()*chars.length);
       let randomNumber2=Math.floor(Math.random()*chars.length);
        password1+=chars[randomNumber1];
        password2+=chars[randomNumber2];
    }
    document.getElementById("password1").textContent=password1;
    document.getElementById("password2").textContent=password2;
})