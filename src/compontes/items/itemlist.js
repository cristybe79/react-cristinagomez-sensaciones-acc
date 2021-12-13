
const aux = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([{ id: "01", titulo: "pulsera infinito", detalle: "pulsera infinito blanca", precio: 200,img:"../img/pulsera01.jpg"}],2000)
    })

})

aux.then((res) => {
    console.log(res)
    return"hola"
}).then((res)=>{
    console.log(res)
})