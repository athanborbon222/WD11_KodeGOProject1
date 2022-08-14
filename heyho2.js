quantity1.addEventListener('input', function(){
    let quantity1 = document.getElementById('quantity1').value;
    document.getElementById('price').innerHTML = quantity1 * 145 + " Pesos";  
});


quantity2.addEventListener('input', function(){
    let quantity2 = document.getElementById('quantity2').value;   
    document.getElementById('price2').innerHTML = quantity2 * 165 + " Pesos";    
});


quantity3.addEventListener('input', function(){
    let quantity3 = document.getElementById('quantity3').value;   
    document.getElementById('price3').innerHTML = quantity3 * 195 + " Pesos";    
});

quantity4.addEventListener('input', function(){
    let quantity4 = document.getElementById('quantity4').value;   
    document.getElementById('price4').innerHTML = quantity4 * 220 + " Pesos";    
});

quantity5.addEventListener('input', function(){
    let quantity5 = document.getElementById('quantity5').value;   
    document.getElementById('price5').innerHTML = quantity5 * 210 + " Pesos";    
});