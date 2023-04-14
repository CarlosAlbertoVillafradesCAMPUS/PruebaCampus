// script llenado dinamico
let carts = [
    {
        title: "Hunters",
        image: "../images/hunters.png"
    },
    {
        title: "Cafeteria hunters",
        image: "../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg"
    },
    {
        title: "8vo piso",
        image: "../images/cafeteria 8vo.jpg"
    },
    {
        title: "Baños",
        image: "../images/aseo.png"
    },
    
]

carts.forEach((val,id) => {
    document.querySelector("#contenedor-tarjetas").insertAdjacentHTML("beforeend", `
    <div class="tarjetas">
        <p>${val.title}</p>
        <img src="${val.image}" alt="">
        <button>Ver datos</button>
    </div>`)
})
// script accordion