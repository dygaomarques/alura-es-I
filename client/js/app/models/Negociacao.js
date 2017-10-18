class Negociacao {

    /* Construindo classe e recebendo valores */
    constructor(data, quantidade, valor) {

        /* Criando propriedade data e tornando imutavel */
        this._data = new Date(data.getTime());
        /* Criando propriedade quantidade */
        this._quantidade = quantidade;
        /* Criando propriedade valor */
        this._valor = valor;

        /* Tornando propriedades imutáveis com o congelamento */
        Object.freeze(this);

    }

    /* Criando metodos para retornar as propriedades */
    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    /* Criando método para retornar o volume da Negociacão */
    get volume() {
        return this._quantidade * this._valor;
    }

}
