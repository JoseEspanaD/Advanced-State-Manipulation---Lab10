//Componente principal de nuestra aplicacion
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { Container } from 'react-bootstrap'; //Importamos el componente Container

const App = () => {
  //Creamos nuestro componente principal APP
  const [tasks, setTasks] = useState([]); //Estado para lista de tareas y funcion para ir actualizandola

  const addTask = (task) => {
    //Funcion para agregar una tarea
    setTasks([...tasks, task]); //Agregamos la nueva tarea a la lista de tareas
  };

  const removeTask = (index) => {
    //Funcion para eliminar una tarea
    const newTasks = [...tasks]; //Creamos una copia de la lista de tareas
    newTasks.splice(index, 1); //Eliminamos la tarea en el indice especificado
    setTasks(newTasks); //Se actualiza el estado de las tareas
  };

  return (
    <Container
      style={{
        backgroundColor: 'lightblue',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <h1 style={{ textAlign: 'center', fontWight: 'bold' }}>
        {' '}
        Mini Task Dashboard
      </h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </Container>
  );
};

export default App;
