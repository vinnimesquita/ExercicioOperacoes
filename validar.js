function soma(){
    var tn1 = document.getElementById('txn1');
    var tn2 = document.getElementById('txn2');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');

    var campos = [];
    if(tn1.value == ''){
        campos.push('Número 1');
    }
    
    if(tn2.value == ''){
        campos.push('Número 2');
    }

     if (campos.length > 0 ) {
        
    alert('Preencha o(s) campo(s): ' + campos.join(' e ') + ' !');
     }

    else {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var d = (n1 + n2) ;
     operacao.innerHTML = `<b>Operação:</b> Adição  ` ;
     resultado.innerHTML = `<b>Resultado:</b> ${d}` ;
   
    } 
}
function subtracao(){
    var tn1 = document.getElementById('txn1');
    var tn2 = document.getElementById('txn2');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');

    var campos = [];
    if(tn1.value == ''){
        campos.push('Número 1');
    }
    
    if(tn2.value == ''){
        campos.push('Número 2');
    }

     if (campos.length > 0 ) {
        
    alert('Preencha o(s) campo(s): ' + campos.join(' e ') + ' !');
     }

    else {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var d = (n1 - n2) ;
     operacao.innerHTML = `<b>Operação:</b> Subtração  ` ;
     resultado.innerHTML = `<b>Resultado:</b> ${d}` ;
   
    } 
}
function multiplicacao(){
    var tn1 = document.getElementById('txn1');
    var tn2 = document.getElementById('txn2');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');

    var campos = [];
    if(tn1.value == ''){
        campos.push('Número 1');
    }
    
    if(tn2.value == ''){
        campos.push('Número 2');
    }

     if (campos.length > 0 ) {
        
    alert('Preencha o(s) campo(s): ' + campos.join(' e ') + ' !');
     }

    else {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var d = (n1 * n2) ;
     operacao.innerHTML = `<b>Operação:</b> Multiplicação  ` ;
     resultado.innerHTML = `<b>Resultado:</b> ${d}` ;
   
    } 
}
function divisao(){
    var tn1 = document.getElementById('txn1');
    var tn2 = document.getElementById('txn2');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado');

    var campos = [];
    if(tn1.value == ''){
        campos.push('Número 1');
    }
    
    if(tn2.value == ''){
        campos.push('Número 2');
    }

     if (campos.length > 0 ) {
        
        alert('Preencha o(s) campo(s): ' + campos.join(' e ') + ' !');
     }

     else if(tn2.value == 0){
        alert('O campo "Número 2" não pode ser 0 !');
    }
    else {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var d = (n1 / n2) ;
     
    operacao.innerHTML = `<b>Operação:</b> Divisão  ` ;
   resultado.innerHTML = `<b>Resultado:</b> ${d}` ;
   
    } 
}

function divisaoInteira(){
    var tn1 = document.getElementById('txn1');
    var tn2 = document.getElementById('txn2');
    var operacao = document.getElementById('operacao');
    var resultado = document.getElementById('resultado')

    var campos = [];
    if(tn1.value == ''){
        campos.push('Número 1');
    }
    
    if(tn2.value == ''){
        campos.push('Número 2');
    }
   
    if (campos.length > 0 ) {
        
        alert('Preencha o(s) campo(s): ' + campos.join(' e ') + ' !');
     }

     else if(tn2.value == 0){
        alert('O campo "Número 2" não pode ser 0 !');
    }
    else {
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var d = Math.trunc(n1 / n2) ;
    operacao.innerHTML = `<b>Operação:</b> Divisão (Inteira) ` ;
   resultado.innerHTML = `<b>Resultado:</b> ${d}` ;
   
    } 
}









   
    

