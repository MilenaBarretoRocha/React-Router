# React-Router


###  React é fundamental para criar aplicações de página única (SPA) mais dinâmicas. 


#### Instruções:

- Crie um novo projeto React usando o comando create-react-app.
- Instale o pacote `react-router-dom` para lidar com as rotas.

##### Estrutura do proje 
- Crie uma estrutura básica de arquivos, como src/components, src/pages, etc.

- Crie três páginas simples: Home, Tarefas e Sobre.
- Cada página pode ser um componente funcional simples.

#### Configurando a rota no `app.js`

- No componente principal (geralmente App.js), importe BrowserRouter, Route, e Switch do react-router-dom.

~~~javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tarefas from './pages/Tarefas';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tarefas" component={Tarefas} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </Router>
  );
}

export default App;

~~~


#### Importante


- Em cada página, adicione links para navegar entre as páginas usando o componente `Link` do react-router-dom.

 ~~~javascript
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/tarefas">Ver Tarefas</Link>
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}

export default Home;

~~~

  
