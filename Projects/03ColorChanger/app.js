const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

document.querySelector('#button').addEventListener('click', function () {
    let color = '#';
    for (let i=0;i<6;i++){
        color+= hex[getNumber()]
    }
    document.querySelector('#canvas').style.backgroundColor = color;
});
function getNumber(){
    return Math.floor(Math.random() * hex.length)
}