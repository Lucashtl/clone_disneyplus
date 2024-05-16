document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botoes){
            const abaAlvo = botoes.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodas();
            removeBotoes();
            aba.classList.add('shows__list--is-active')
            botoes.target.classList.add('shows__tabs__button--is-active')

        })
    }
})

function removeBotoes(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodas(){
    const containerLista = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < containerLista.length; i++){
        containerLista[i].classList.remove('shows__list--is-active')
    }
}