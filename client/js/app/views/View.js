class View {

    constructor(element) {

        /* Armazenando elemento para ser exibido */
        this._element = element;

    }

    /* Método que se chamado sem ser implementado na classe filha lança um erro */
    template() {

        throw Error('O método template() deve ser implementado!');
    }

    /* Método para atualizar a view de acordo com o templete gerado */
    update(model) {

        /* Alterando conteúdo HTML do elemento recebido com o template gerado */
        this._element.innerHTML = this.template(model);

    }

}
