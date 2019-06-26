function encryp(elemento){
    let words = document.getElementsByTagName('input')[0].value;
    let wordencrypt = btoa(words);
    document.getElementById('result').innerHTML = wordencrypt;
}

function desencryp(elemento){
    let words = document.getElementsByTagName('input')[0].value;
    let wordencrypt = atob(words); 
    document.getElementById('result').innerHTML = wordencrypt;  
}