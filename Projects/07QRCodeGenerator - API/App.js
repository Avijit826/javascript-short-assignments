const input = document.getElementById('input')
const button = document.getElementById('submit')
const img = document.getElementById('img')

button.addEventListener('click', () =>{
    if (!input.value) return;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
})