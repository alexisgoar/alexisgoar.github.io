fetch('/elements/slideshow.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_slideshow");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
}).then(() =>{
    document.getElementById('radio1').checked =true; 
    let counter = 2; 
    setInterval( () => {
        document.getElementById('radio'+counter).checked = true; 
        ++counter; 
        if(counter>4){
            counter = 1;
        }
    }
    ,5000); 
}
)


