const text = document.getElementById('text')
const button = document.querySelector('#convert-btn')

button.addEventListener("click", function(){
    document.getElementById('camel-case').innerHTML = text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => chr.toUpperCase());
    document.getElementById('pascal-case').innerHTML = text.value.replace(/\w+/g, (s, chr) => s[0].toUpperCase()+s.slice(1).toLowerCase());
    document.getElementById('snake-case').innerHTML = text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '_'))
    document.getElementById('screaming-snake-case').innerHTML = text.value.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '_'))
    document.getElementById('kebab-case').innerHTML = text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '-'))
    document.getElementById('screaming-kebab-case').innerHTML = text.value.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '-'))


})

// // camel case
// text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => chr.toUpperCase())

// text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(s){return s.slice(1).toUpperCase()})

// // pascal case
// text.value.replace(/\w+/g, function(s){return s[0].toUpperCase() + s.slice(1).toLowerCase();});

// text.value.replace(/\w+/g, (s, chr) => s[0].toUpperCase()+s.slice(1).toLowerCase())

// // snake case
// text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '_'))

// // Screaming Snake Case
// text.value.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '_'))

// // kebab case
// text.value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '-'))

// // Screaming kebab Case
// text.value.toUpperCase().replace(/[^a-zA-Z0-9]+(.)/g, (s, chr) => s.replace( ' ' , '-'))

