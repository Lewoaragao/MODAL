var modal = document.querySelector('.contentModal')
var modalTitle = document.querySelector('.modalTitle')
var modalButton = document.querySelector('.modalButton')
var modalParagraph = document.querySelector('.modalParagraph')

function abrirModal() {
    modal.style.display = 'none'
    setTimeout(() => {
        modal.style.display = 'flex'
    }, 0)
}


function fecharModal() {
    let msgFecharModal = confirm('Fechar modal?')

    if (msgFecharModal == true) {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'flex'
    }
}

modalTitle.addEventListener('click', () => {
    setTimeout(() => {
        alert('Clicou no título e essa mensagem apareceu depois de 1 segundos')
    }, 1000)
})

modalParagraph.addEventListener('click', () => {
    alert('Clicou no parágrafo')
})