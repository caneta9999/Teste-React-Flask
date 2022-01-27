import { useEffect, useState } from "react";
export default function Form(){
	const styleForm = {border: "2px solid black", padding: "5px", display: "inline-block"}
	const styleInputIdade = {width: "150px"}
	  const [initialData, setInitialData] = useState([{}]);
	  useEffect(() => {
		fetch('/form').then(
		  response => response.json()
		).then(data => setInitialData(data))
	  }, []);
	return <form style={styleForm} action="http://localhost:3000/form" method = "POST">
			  <div class="form-group">
				<label for="nomeInput">Nome: </label>
				<input type="text" class="form-control" name="nomeInput" id="nomeInput" aria-describedby="nomeCampo" placeholder="Digite seu nome" maxlength="100" required/>
			  </div>
			  <div class="form-group">
				<label for="idadeInput">Idade: </label>
				<input type="number" style={styleInputIdade} class="form-control" name="idadeInput" id="idadeInput" aria-describedby="idadeCampo" min="1" max="150" placeholder="Digite sua idade" required/>
			  </div>
			  <div>
				<label for="estadoSelect">Estado: </label> 
					<select id="estadoSelect" name="estadoSelect" aria-describedby="estadoSelecionar">
						<option value="AC">AC</option>
						<option value="AL">AL</option>
						<option value="AP">AP</option>
						<option value="AM">AM</option>
						<option value="BA">BA</option>
						<option value="CE">CE</option>
						<option value="DF">DF</option>
						<option value="ES">ES</option>
						<option value="GO">GO</option>
						<option value="MA">MA</option>
						<option value="MT">MT</option>
						<option value="MS">MS</option>
						<option value="MG">MG</option>
						<option value="PA">PA</option>
						<option value="PB">PB</option>
						<option value="PR">PR</option>
						<option value="PE">PE</option>
						<option value="PI">PI</option>
						<option value="RJ">RJ</option>
						<option value="RN">RN</option>
						<option value="RS">RS</option>
						<option value="RO">RO</option>
						<option value="RR">RR</option>
						<option value="SC">SC</option>
						<option value="SP">SP</option>
						<option value="SE">SE</option>
						<option value="TO">TO</option>
					</select>
			  </div>
			  <label for id="inputSubmit">Clique para enviar </label> 
			  <input id="inputSubmit" class="btn" aria-describedby="botãoEnviar" value="Enviar" type="submit"/>
			</form>
}