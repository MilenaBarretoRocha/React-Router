import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = () => {
  return (
    <>
    <h1>Página de Tarefas</h1>
    <Link to="/">Inicio</Link>
    <br/>
    <Link to="/about">Sobre</Link>
    </>
  )
}

export default Tasks