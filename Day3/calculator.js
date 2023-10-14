function c(){
    let num1=document.querySelector("#n1").value
    let opr=document.querySelector("#opr").value
    let num2=document.querySelector("#n2").value
    let res;
    if(opr=="+"){
        res=parseFloat(num1)+parseFloat(num2)
    }else if(opr=="-"){
        res=parseFloat(num1)-parseFloat(num2)
    }else if(opr=="*"){
        res=parseFloat(num1)*parseFloat(num2)
    }else if(opr=="/"){
        res=parseFloat(num1)/parseFloat(num2)
    }
    document.querySelector("#output").innerHTML="Your answer is"
    document.querySelector("#res").innerHTML=res
}