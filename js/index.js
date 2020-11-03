window.mostrarPersonaje = function(){
  let p = this.personaje;
  let molde = document.querySelector('.modal-molde').cloneNode(true);
  molde.querySelector('.imagen-personaje-modal').src = p.image;
  molde.querySelector('.nombre-personaje-h3').innerHTML = p.name;
  molde.querySelector('.genero-personaje-h3').innerHTML = p.gender;
  let spanEstado = molde.querySelector('.estado-personaje-h3');
  let icono = document.createElement('i');
  icono.classList.add('icono-estado');
  if(p.status == 'Alive'){
    icono.classList.add('fas','fa-heart','text-info');
  }else if(p.status == 'Dead'){
    icono.classList.add('fas','fa-book-dead','text-danger');
  }else {
    icono.classList.add('fas','fa-question','text-success');
  }

  spanEstado.appendChild(icono);

  Swal.fire({
    title: p.name,
    html: molde.innerHTML,
    confirmButtonText: "cerrar"
});
  console.log(p);
};

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
