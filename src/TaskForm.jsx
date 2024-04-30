// Componente Formulario
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'; //Importamos los componentes necesarios

const TaskForm = ({ addTask }) => {
  //Creamos nuestro componente TaskForm que recibe la funcion addTask como prop
  const [task, setTask] = useState(''); //Estado para tarea actual e ir actualizando

  const handleChange = (e) => {
    //Funcion para manipular el cambio en el campo de entrada
    setTask(e.target.value); //Se actualiza el estado de la tarea con el campo de entrada
  };

  const handleSubmit = (e) => {
    //Funcion para manipular el envio del formulario
    e.preventDefault(); //Evitar que se envie automaticamente el formulario
    if (!task.trim()) return;
    addTask(task); //Llamamos a la funcion addTask para pasar la tarea como prop
    setTask(''); //Reiniciamos el estado a una cadena vacia para poder recibir otra futura tarea
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskInput">
        <Form.Control
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm; //Exportamos para poder utilizar el componente en otros lugares
