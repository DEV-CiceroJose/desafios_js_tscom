let notas = [4.5, 7, 8, 5, 10, 7.5]
let med = 0,media = 0
for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
    med += notas[i]
}
media = (med/6)
 console.log(media)
let acima_med = notas.filter((n) => {
    return n >= 6;
})
console.log(acima_med)