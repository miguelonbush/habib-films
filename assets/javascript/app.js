function pesquisar() {
    let entrada = document.getElementById("entrada").value;
    let section = document.getElementById("resultado-pesquisa");

    let resultado = "";

    if (!entrada || entrada.length < 2) {
        resultado = `
        <div style="text-align: center; justify-content: center; width: 70%; padding: 1rem;" class="caixa-resultado">
            <h1 style="font-size: 1.5rem;" class="auxiliar">Ops! Precisa de mais um pouquinho para encontrar o filme perfeito. Tente digitar o nome do filme, gênero ou diretor que você procura.</h1>
        </div>
        `

        return section.innerHTML = resultado;
    }

    entrada = entrada.toLowerCase();

    let titulo = "";
    let genero = "";
    let diretor = "";

    for (dado of dados) {
        titulo = dado.titulo.toLowerCase();
        genero = dado.genero.toLowerCase();
        diretor = dado.diretor.toLowerCase();
        tituloTraduzido = dado.titulo_traduzido.toLowerCase();

        if (titulo.includes(entrada) || genero.includes(entrada) || diretor.includes(entrada) || tituloTraduzido.includes(entrada)) {
            resultado += `
            <div class="caixa-resultado">
                <div class="imagem-caixa">
                    <img src="${dado.imagem}" alt="">
                </div>
                <div class="texto-caixa">
                    <h1>${dado.titulo_traduzido} <span style="font-weight: 100;">(${dado.ano})</span></h1>
                    <p style="margin-bottom: 1.5rem;">${dado.sinopse}</p>
                    <p><span style="font-weight: bold;">Dirigido por: </span>${dado.diretor}</p>
                    <p><span style="font-weight: bold;">Elenco: </span>${dado.elenco}</p>
                    <p class="paragrafo-genero" style="font-weight: bold;">Gênero: <span class="genero">${dado.genero}</span></p>
                    <div class="botoes-caixa">
                        <a target="_blank" href="${dado.imdb}"><img src="https://m.media-amazon.com/images/G/01/IMDb/brand/guidelines/imdb/IMDb_Logo_Rectangle_Gold._CB443386186_.png" alt=""></a>
                        <a target="_blank" href="${dado.letterboxd}"><img src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb-1000px.png" alt=""></a>
                    </div>
                </div>
            </div>
            `;
        }
    }

    if (!resultado) {
        resultado = `
        <div style="text-align: center; justify-content: center; width: 55%; padding: 2rem;" class="caixa-resultado">
            <h1 style="font-size: 1.5rem;" class="auxiliar">Não encontramos o que você procura.</h1>
        </div>
        `
    }

    section.innerHTML = resultado;
}

/* function limpar() {
    document.getElementById("entrada").value = "";
} */