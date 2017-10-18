class ListaNegociacoes {

    constructor() {

        /* Criando array para receber as negociações */
        this._negociacoes = [];

    }

    /* Método para adicionar uma nova negociação no array */
    adicionaNegociacao(negociacao) {

        /* Puxando negociação para dentro do array */
        this._negociacoes.push(negociacao);

    }

    /* Método para retornar as negociações */
    get negociacoes() {

        /* Retornando nova lista de negociações para blindar as negociações originais */
        return [].concat(this._negociacoes);
    }

}
