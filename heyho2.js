quantity1.addEventListener('input', function(){
    let quantity1 = document.getElementById('quantity1').value;
    document.getElementById('price').innerHTML = "Pesos:   " + quantity1 * 145;  
});


quantity2.addEventListener('input', function(){
    let quantity2 = document.getElementById('quantity2').value;   
    document.getElementById('price2').innerHTML = "Pesos:   " + quantity2 * 165;    
});


quantity3.addEventListener('input', function(){
    let quantity3 = document.getElementById('quantity3').value;   
    document.getElementById('price3').innerHTML = "Pesos:   " + quantity3 * 195;    
});

quantity4.addEventListener('input', function(){
    let quantity4 = document.getElementById('quantity4').value;   
    document.getElementById('price4').innerHTML = "Pesos:   " + quantity4 * 220;    
});

quantity5.addEventListener('input', function(){
    let quantity5 = document.getElementById('quantity5').value;   
    document.getElementById('price5').innerHTML = "Pesos:   " + quantity5 * 210;    
});