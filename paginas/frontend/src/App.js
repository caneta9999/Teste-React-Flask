import './App.css';
import Navbar from './Componentes/navbar.js';
import Footer from './Componentes/footer.js';
import Push from './Componentes/push.js';
import Form from './Componentes/form.js';
import ItemLista from './Componentes/itemLista.js';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from "react";
function App() {
  const [visitantes, setVisitantes] = useState(0);
  const visitantesLista = [];
  useEffect(() => {
    fetch('/visitantes').then(res => res.json()).then(data => {
      setVisitantes(data.visitantes);
    });
  }, []);
  for(var i in visitantes){
	visitantesLista.push(<ItemLista nome={visitantes[i][0]} idade={visitantes[i][1]} estado={visitantes[i][2]} data={visitantes[i][3]}/>);
  }
  return (
    <div className="App">
		<Helmet htmlAttributes={{ lang: 'pt' }}/>
		<Navbar/>
		<Push height="60px"/>
		<h1>Marque sua presença!</h1>
		<Form/>
		<h2>Visitantes anteriores</h2>
		<section id="visitantesSection">
			<ul id="visitantesLista">
				<hr/>
				{visitantesLista}
			</ul>
		</section>
		<Push height="60px"/>
		<Footer/>
	</div>
  );
}

export default App;
