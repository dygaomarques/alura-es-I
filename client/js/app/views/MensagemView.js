class MensagemView extends View {

    /* Método privado para construir o templete da mensagem */
    template(model) {

        /* Montando e retornando o template */
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : ``;

    }

}
