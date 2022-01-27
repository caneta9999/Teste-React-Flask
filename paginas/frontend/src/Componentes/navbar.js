export default function Navbar(){
	const styleNavbar = {backgroundColor : '#34ebdb',width : '100%', top:'0',position: 'fixed'}
	return <header class='p-1 justify-content-center clearfix' style={styleNavbar}>
				<p id="pCabecalho">Cadastro de visitantes</p>
			</header>;
}