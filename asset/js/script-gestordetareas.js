document.addEventListener('DOMContentLoaded', function () {
    const tareaForm = document.getElementById('tareaForm');
    const tareaInput = document.getElementById('tarea');
    const listaTareas = document.getElementById('listaTareas');

    tareaForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nuevaTarea = tareaInput.value.trim();

        if (nuevaTarea !== '') {
            agregarTarea(nuevaTarea);
            tareaInput.value = '';
        }
    });

    function agregarTarea(textoTarea) {
        const nuevaLi = document.createElement('li');
        nuevaLi.className = 'list-group-item';
        nuevaLi.textContent = textoTarea;

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm float-end';
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function () {
            listaTareas.removeChild(nuevaLi);
        });

        nuevaLi.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaLi);
    }
});
