import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <h1>Página Sobre</h1>
    <Link to="/">Inicio</Link>
    <br/>
    <Link to="/tasks">Tarefas</Link>
    </>
  )
}

export default About