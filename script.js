// Objeto ListaTareas
const ListaTareas = {
    tareas: [], // Hice un arreglo para almacenar las tareas

    // Creamos una función para poder agregar una tarea al arreglo de tareas con la fecha actual
    agregarTarea: function(tarea) {
      const fechaActual = new Date();
      const tareaConFecha = `${tarea} - ${fechaActual.toLocaleDateString()}`;
      
      this.tareas.push(tareaConFecha);
    },
  
    // Función para mostrar la lista de tareas en el elemento con id "listatareas"
    mostrarLista: function() {
      const listaTareasElement = document.getElementById("listatareas");
      listaTareasElement.innerHTML = ""; // Limpiar la lista antes de mostrar las tareas
       //Recorremos el arreglo de las tareas y agregamos cada tarea como un elemento de lista 
      this.tareas.forEach(function(tarea) {
        const tareaElement = document.createElement("li");
        tareaElement.textContent = tarea;
        listaTareasElement.appendChild(tareaElement);
      });
    }
  };
  
  // Vinculamos el evento "submit" del formulario
  document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario y se recargue la página
  
    const inputTarea = document.getElementById("inputtarea");
    const tarea = inputTarea.value.trim(); // Obtenemos el valor del campo
  
    if (tarea !== "") {
      ListaTareas.agregarTarea(tarea); // aqui se agrega la tarea al arreglo tareas con la fecha 
      ListaTareas.mostrarLista(); // Mostrar la lista de tareas actualizada en el html
      inputTarea.value = ""; // Limpiar el campo de texto después de agregar la tarea
    }
  });
  