export default function ItemLista(props){
	return <li>
			Nome:{props.nome}<br/>
			Idade: {props.idade}<br/>
			Estado: {props.estado}<br/>
			Data da visita: {props.data}<br/>
			<hr/>
			</li>
}