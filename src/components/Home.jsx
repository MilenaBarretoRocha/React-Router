import React from 'react'
import { Link  } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <h1>Página Inicial</h1>
    <Link to="/about">Sobre</Link>
    <br/>
    <Link to="/tasks">Tarefas</Link>
    </>
  )
}

export default Home