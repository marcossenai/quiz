let questaoAtual = 1;
let pontos = 0;
let tentativas = 0;

function mostrarQuestao(numeroQuestao) {
    const questoes = document.querySelectorAll('.questao');
    questoes.forEach(questao => {
        questao.style.display = 'none';
    });
    document.getElementById(`questao${numeroQuestao}`).style.display = 'block';
}

function atualizarPontos() {
    const Pontuacao = document.querySelectorAll('.pontos');
    Pontuacao.forEach(Pontuacao => {
    Pontuacao.textContent = pontos;
    });
}


function reiniciarQuiz() {
    questaoAtual = 1;
    pontos = 0;
    tentativas = 0;
    mostrarQuestao(questaoAtual);
    atualizarPontos();
}
mostrarQuestao(questaoAtual);

function resultado(numeroQuestao) {
    const questaoValor = document.getElementById(`questao${numeroQuestao}`);
    const opcao = questaoValor.querySelector('input[type="radio"]:checked');

    if (!opcao) {
        alert('Por favor, selecione uma resposta.');
        return;
    }

    const respostaCorretaSpan = opcao.parentElement.querySelector('.resposta-correta');

    if (respostaCorretaSpan) {
        console.log("Resposta correta.");
        pontos += 10;
        atualizarPontos();
        tentativas = 0;
        questaoAtual++;

        if (questaoAtual <= 5) {
            mostrarQuestao(questaoAtual);
        } else {
            alert(`Parabéns! Você completou o quiz com uma pontuação de ${pontos}.`);
            reiniciarQuiz();
        }
    } else {
        console.log("Resposta incorreta.");
        tentativas++;

        if (tentativas >= 2) {
            alert('Você excedeu suas tentativas. Começando novamente.');
            reiniciarQuiz();
        } else {
            alert('Resposta incorreta. Tente novamente.');
        }
    }
}

