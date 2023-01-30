fetch('./elements/navigation.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
}).then(() =>{
    const hamburger = document.querySelector(".hamburger"); 
    const menu = document.querySelector(".menu"); 

    hamburger.addEventListener("click",() => {
        hamburger.classList.toggle("active"); 
        menu.classList.toggle("active"); 
    })

    document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click",()=>{
        hamburger.classList.remove("active"); 
        menu.classList.remove("active"); 
    }))

    window.onscroll = () =>{
        hamburger.classList.remove("active"); 
        menu.classList.remove("active");
    }
})


