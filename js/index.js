window.mostrar = (datos)=>{
    const contenidoDiv = document.querySelector("#contenido");
    let ul = document.createElement("ul");
    for(let i=0; i<datos.length;++i){
        let personaje = datos[i];
        let li = document.createElement("li");
        let spanNombre = document.createElement("span");
        spanNombre.innerText = personaje.name;
        let spanEstado = document.createElement("span");
        spanEstado.innerText = personaje.status;
        let imagen = document.createElement("img");
        imagen.src = personaje.image;

        li.appendChild(spanNombre);
        li.appendChild(spanEstado);
        li.appendChild(imagen);
        ul.appendChild(li);
}
    
    
    contenidoDiv.appendChild(ul);

    

};
window.addEventListener('DOMContentLoaded', async ()=>{
    let resultados = await axios.get('https://rickandmortyapi.com/api/character/');
    window.mostrar(resultados.data.results);
    
});
    

