function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) { 
      // Constrói o HTML para cada resultado, formatando o título, descrição e link
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://www.instagram.com/acmilan/" target="_blank">${dado.titulo}</a>
          </h2>
          <p> Estadio: ${dado.estadio} </p>
          <p> ${dado.localizacao}, ${dado.pais} </p>
          <p class="item-resultado">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
    }
  
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }