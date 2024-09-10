function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
  let campoPesquisa =  document.getElementById("campo-pesquisa").value

  //se campoPesquisa for uma string sem nada
  if (campoPesquisa == ""){
    //section.innerHTML  "<span class='mensagem-erro'>Busca vazia</span>"
    //return
  } 

  campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
    let titulo = "";
    
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) { 
      titulo = dado.titulo.toLowerCase()

      // titulos = dado.titulos.toString().toLowerCase(); PARA COLOCAR NUMEROS

      //se titulo includer campoPesquisa 
      if(titulo.includes(campoPesquisa)) // ||

        //const titulosArray = dado.titulos.toString().split(','); // Converter para string e dividir
        //const temTituloExato = titulosArray.some(titulo => titulo.trim().toLowerCase() === campoPesquisa.toLowerCase()); PARA COLOCAR NUMEROS
      
        if (titulo.toLowerCase().includes(campoPesquisa)) // ||
          {
              // Constrói o HTML para cada resultado, formatando o título, descrição e link
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" style="color: ${dado.corPrincipal}" target="_blank">${dado.titulo}</a>
        </h2>
        <div class="item-resultado1">
        <p class="item-info">De: ${dado.localizacao}, <br>${dado.pais} </p>
        <p> Titulo(s): ${dado.titulos} </p> 
        <p> Desde: ${dado.fundado} </p>
        <!-- <p> Estadio: ${dado.estadio} </p> -->
        <p> Maior rival: ${dado.rival}
        </div>
        <p class="item-resultado">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais Informações</a>
      </div>
    `;
      }
    }

    if(!resultados) {
      resultados = "<span class='mensagem-erro'>Nada foi encontrado. Você não buscou por um time.</span>"
    }

    
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }

  window.onload = pesquisar;