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

// confirmação de presença

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configure o body parser para receber JSON
app.use(bodyParser.json());

// Defina a rota para a confirmação de presença
app.post('/confirmacao-presenca', (req, res) => {
  const { nome, email, presenca } = req.body;

  // Valide os dados
  if (!nome || !email || !presenca) {
    return res.status(400).send('Dados inválidos');
  }

  // Processe os dados (exemplo: salve no banco de dados)
  console.log(`Confirmação de presença: ${nome}, ${email}, ${presenca}`);

  // Envie uma resposta de sucesso
  res.status(200).send('Confirmação de presença enviada!');
});

// Inicie o servidor
app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});
