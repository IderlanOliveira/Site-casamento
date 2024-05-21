const listaConvidados = document.querySelector('.lista-convidados tbody');
const botaoAdicionar = document.getElementById('adicionarConvidado');

const convidados = [
  { nome: 'João Silva', confirmado: true },
  {nome: "iderlan Oliveira", confirmado: true}
  // Adicione mais convidados aqui
];

function atualizarLista() {
  listaConvidados.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

  convidados.forEach(convidado => {
    const linha = document.createElement('tr');
    const nomeCelula = document.createElement('td');
    const confirmacaoCelula = document.createElement('td');

    nomeCelula.textContent = convidado.nome;
    confirmacaoCelula.innerHTML = convidado.confirmado ? 'Sim' : 'Não';

    linha.appendChild(nomeCelula);
    linha.appendChild(confirmacaoCelula);

    listaConvidados.appendChild(linha);
  });
}

atualizarLista(); // Exibe a lista inicial de convidados

botaoAdicionar.addEventListener('click', () => {
  const nome = prompt('Digite o nome do convidado:');

  if (nome) {
    convidados.push({ nome, confirmado: false });
    atualizarLista();
  }
});
