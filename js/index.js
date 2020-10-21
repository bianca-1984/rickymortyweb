window.mostrarPersonaje = function(){
let p = this.personaje;
console.log(p);
}

window.mostrar = (datos)=>{
    const contenidoDiv = document.querySelector("#contenido");
    let molde = document.querySelector('.card-molde');
    for(let i=0; i<datos.length;++i){
        let personaje = datos[i];
        let div = molde.cloneNode(true);
        div.querySelector('.nombre-personaje').innerText = personaje.name;
        div.querySelector('.imagen-personaje').src = personaje.image;
        div.querySelector('.btn-detalle').personaje = personaje;
        div.querySelector('.btn-detalle').addEventListener('click',window.mostrarPersonaje);
        contenidoDiv.appendChild(div);
        
}

    

};
window.addEventListener('DOMContentLoaded', async ()=>{
    let resultados = await axios.get('https://rickandmortyapi.com/api/character/');
    window.mostrar(resultados.data.results);
    
});
    

