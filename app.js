
const form = document.querySelector("form");
const arrayInfo=Array.from(form);
const arrayOne=[];
let sum = [];
console.log(arrayInfo);

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});


const getArrayInfo=array=>{
    array.forEach(e=>arrayOne.push(e.value));
    console.log(arrayOne); 
    return arrayOne;
}

const cardNumber = index => {
    const cardNumber = document.getElementById("cn").value;
    while (cardNumber === "" || isNaN(parseInt(cardNumber))) {
        return false
    }
    let toArrayReverseNum = cardNumber.split("").reverse();

    console.log(toArrayReverseNum);
    for (let i = 0; i < toArrayReverseNum.length; i++) {
        let evenOperation = [];
        if ((i + 1) % 2 === 0) {
            evenOperation = toArrayReverseNum[i] * 2;
            toArrayReverseNum[i] = evenOperation;
            if (evenOperation >= 10) {
                evenOperation = parseInt((evenOperation / 10) + (evenOperation % 10));
                toArrayReverseNum[i] = evenOperation;
                console.log(evenOperation);
            }
        } else {
            toArrayReverseNum[i] = parseInt(toArrayReverseNum[i]);
        }

        sum = sum + parseInt(toArrayReverseNum[i]);

    }

    //realizar operación modulo10 a la suma total para saber si es valida o no
    const moduloOp = sum % 10;
    if (moduloOp === 0) {

        return true
    } else {
        return false
    }

};

const expire=index=>{
    console.log(index);
    return true
}

const securityCode=index=>{
   const cvv=document.getElementById("cvv").value;
    if(isNaN(cvv) || cvv=="" || cvv.length!==3 ){
        document.getElementById("cvv").style.borderColor="red";
        return false
    }else{
        alert("bien");
        return true;
        
    }
    
}

const name=index=>{
    
    const name1=document.getElementById("name").value;
    if(isNaN(name1) ){
        document.getElementById("name").classList.add("succes");
        return true; cd

    }else{
        return false
    }
    
    
    
    
}




const validateCardDetails=array=> {
    
getArrayInfo(arrayInfo);
    
  if(cardNumber(arrayOne[0]) && expire(arrayOne[1])&&
  securityCode(arrayOne[2]) &&name(arrayOne[3])) {
    console.log(true);  
    return true;
      
  }else{
      console.log(false);
      return false;
  }

};

