function c(){
    let radius=document.querySelector("#n1").value
    let res;
    const pi=(22/7);
    res=(4/3)*pi*(radius**3);
    document.querySelector("#output").innerHTML="Volume is"
    document.querySelector("#res").innerHTML=res
    
}