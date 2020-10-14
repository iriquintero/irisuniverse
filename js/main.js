const grid = new Muuri('.images', {
    layout: {
        rounding: false
      }
});

window.addEventListener('load',() => {
    grid.refreshItems().layout();
    document.getElementById('images').classList.add('image-loaded');

    const enlaces = document.querySelectorAll('#categories a');
    enlaces.forEach((elemento)=> {
        elemento.addEventListener('click', (evento)=> {
            evento.preventDefault();
            enlaces.forEach((enlace)=>enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const category = evento.target.innerHTML.toLowerCase(); 
            category=== "all" ? grid.filter('[data-category]'): grid.filter(`[data-category="${category}"]`);
        });
    });
});