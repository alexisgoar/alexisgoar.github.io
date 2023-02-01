
fetch('/elements/novedades.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_novedades");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    console.log("test"); 
}).then(() =>{

    const novedades = document.querySelectorAll(".novedades-content"); 

    novedades.forEach(n => {
            n.addEventListener("click", () =>{
                n.classList.toggle("sold_out"); 
        })
    });
})


