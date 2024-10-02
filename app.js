function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campo-pesquisa").value;

if (campoPesquisa == "") {
  section.innerHTML = "<p>Nada foi encontrado </p>"
  return 
};

campoPesquisa = campoPesquisa.toLowerCase();

console.log(campoPesquisa);

let resultados = "";
let titulo ="";
let descricao ="";
let tags ="";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  descricao = dado.descricao.toLowerCase()
  tags = dado.tags.toLocaleLowerCase()
  //se no título includes campoPesquisa
  if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    //cria um novo elemento
    resultados += `
    <div class="item-resultado">
                    <h2>
                      <a href=${dado.redes_sociais} target="_blank">
                        ${dado.titulo}
                      </a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p class="descricao-meta">${dado.esporte}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>

                  </div>
    `

  }
  else {
  resultados = "<p>Nada foi encontrado. Digite o nome de um atleta ou esporte.</p>"
  }
  //Então, faça...
  console.log(dado.titulo.includes(campoPesquisa))
    
}

section.innerHTML = resultados;
}
// console.log(dados);

