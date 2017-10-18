class DateHelper {

    constructor() {

        /* Lançando um erro caso a classe seja instânciada */
        throw new Error('Esta classe não pode ser instânciada');
    }

    /* Método estático para transformar o texto em data */
    static textToDate(text) {

        if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
            throw new Error('A data deve estar no formato aaaa-mm-dd');
        }

        return new Date(text.split('-'));

    }

    /* Método estático para transformar o data em texto */
    static dateToText(date) {

        return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;

    }

}
