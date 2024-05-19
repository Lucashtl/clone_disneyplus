document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const faq = document.querySelectorAll('[data-faq-question]')
    const herosection = document.querySelector('.hero');
    const alturahero = herosection.clientHeight;


    window.addEventListener('scroll', function(){
        const valorAtual = window.scrollY

        if(valorAtual < alturahero){
            ocultaheader();
        }else{
            exibiheader();
        }
    })



    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botoes){
            const abaAlvo = botoes.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodas();
            removeBotoes();
            aba.classList.add('shows__list--is-active')
            botoes.target.classList.add('shows__tabs__button--is-active')
        })

        for( let i = 0; i < faq.length; i++){
            faq[i].addEventListener('click', abreoufecharesposta);
        }
    }
})

function ocultaheader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}
function exibiheader(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function abreoufecharesposta(elemento){
    const classe =  'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    
        elementoPai.classList.toggle(classe)
}

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