class Mensagem {

    constructor(text = '') {

        /* Recebendo a mensagem */
        this._text = text;

    }

    /* Getter para retornar o texto */
    get text() {
        return this._text;
    }

    /* Setter para definir a mensagem */
    set text(text) {
        return this._text = text;
    }
}
