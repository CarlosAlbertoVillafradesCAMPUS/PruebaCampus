let container1 =  document.querySelector(".container1");
let text = document.querySelector(".first-message")
let nav = [
    {
        name: "Inicio",
        href: "../index.html"
    },
    {
        name: "Servicios",
        href: "../servicios/index.html"
    },
    {
        name: "Soporte",
        href: "../soporte/index.html"
    },
];
let optional = {
    name: "Soporte",
    href: "../soporte/index.html"
}
nav.forEach((val,id)=>{
    container1.insertAdjacentHTML("beforeend", `
    <a class="alink" href="${val.href}">${val.name}</a>
`)
})
let children = "Cafeteria virtual";
console.log()
if((text.children[0].textContent == children)){
    container1.insertAdjacentHTML("beforeend", `
    <div> <img src="../images/cart-regular-24.png" alt=""></div>`)
}

