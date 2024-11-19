document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
        const targetTab = botao.target.dataset.tabButton;
        const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
        hideAllTabs();
        tab.classList.add('casting__list--is-active');
        removeBotaoAtivo();
        botao.target.classList.add('casting__tab__button--is-active')
        })
    }
        



})

function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++ ) {
        buttons[i].classList.remove('casting__tab__button--is-active');
    }

}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length;i++) {
        tabsContainer[i].classList.remove('casting__list--is-active');
    }
}