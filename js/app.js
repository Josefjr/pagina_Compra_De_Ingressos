// Objeto para armazenar as quantidades disponíveis
const quantidades = {
    pista: 100,
    superior: 200,
    inferior: 400,
};

// Função para comprar ingressos
function comprar() {
    const tipoIngresso = document.getElementById('tipo-ingresso').value;
    const qtdComprar = parseInt(document.getElementById('qtd').value);

    // Verificar a entrada do usuário
    if (isNaN(qtdComprar) || qtdComprar <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Verificar a disponibilidade
    if (qtdComprar > quantidades[tipoIngresso]) {
        alert(`Quantidade indisponível para ${tipoIngresso}!`);
        return;
    }

    // Atualizar a quantidade disponível
    quantidades[tipoIngresso] -= qtdComprar;

    // Atualizar as quantidades exibidas no HTML
    document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidades[tipoIngresso];
}

