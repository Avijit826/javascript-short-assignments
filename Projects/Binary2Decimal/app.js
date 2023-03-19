// document.querySelector('.btn').addEventListener('click',calc);
// function calc(){
//     num = document.querySelector('#binary').value;
//     dec = parseInt(num, 2);
//     document.querySelector('.result').innerHTML = 'Decimal Number :' + dec;
// }

if(window.location.search != ''){
    let arr = window.location.search.split('=');
    let bin = arr[1];
    for (let i=0; i<bin.length;i++){
        if(bin[i] == 0 || bin[i] == 1){
            continue;
        }
        else{
            alert('This is not a valid binery number\nThe result of it may not correct'); 
            break;
        }
    }
    let dec = parseInt(bin, 2);
    document.querySelector('.result').innerHTML = 'Decimal Number :' + dec;  
}