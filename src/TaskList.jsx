import React, { useState, useEffect } from 'react';
import { ListGroup, Button } from 'react-bootstrap'; // Importamos los componentes necesarios a utilizar

const TaskList = ({ tasks, removeTask }) => { // Definimos nuestro componente de lista de tareas
  const [totalTasks, setTotalTasks] = useState(0); //Creamos un estado totalTasks y lo inicializamo con el valor 0 (numero de tareas)

  useEffect(() => { //Ejecutamos la funcion cada vez que se cambie la lista de tareas para mostrar la longitud actual de la lista
    setTotalTasks(tasks.length);
  }, [tasks]);

  //Funcion para eliminar todas las tareas
  const removeAllTasks = () => {
    setTotalTasks(0); //Reiniciamos el contador de tareas
    //Eliminamos todas las tareas comenzando desde el final de la lista
    for (let i = tasks.length - 1; i>=0; i--) {
      removeTask(i); 
    }
  };

  return (
    <div>
      <h2>{totalTasks} pending tasks :c </h2>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center">
            <span>{task}</span>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeTask(index)}
            >
              Remove
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        variant="danger"
        onClick={removeAllTasks}
        className="mt-3"
      >
        Delete all Tasks
      </Button>
    </div>
  );
};

export default TaskList; //Exportamos el componente para poder usarlo en otros lugares