class NegociacaoController {

    constructor() {

        /* Armazenando função para buscar elemento em uma keyword */
        let element = document.querySelector.bind(document);

        /* Buscando campos do formulário */
        this._inputData = element('#data');
        this._inputQuantidade = element('#quantidade');
        this._inputValor = element('#valor');

        /* Instanciando classe ListaNegociacoes */
        this._listaNegociacoes = new ListaNegociacoes();

        /* Instanciando classe NegociacoesView */
        this._negociacoesView = new NegociacoesView(element('#negociacoes-view'));

        /* Mostrando tabela na view inicialmente vazia */
        this._negociacoesView.update(this._listaNegociacoes);

        /* Instanciando classes de mensagem */
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(element('#mensagem-view'));

        this._mensagemView.update(this._mensagem);

    }

    /* Método para adicionar nova negociação a lista */
    adicionarNovaNegociacao(event) {

        /* Desabilitando recarregamento da página após submit */
        event.preventDefault();

        /*
         * Passando dados da negociacao para o método
         * {adicionaNegociacao} da classe {ListaNegociacoes}
         * que fica responsável por puxar a nova negociação
         * para dentro do array
         */
        this._listaNegociacoes.adicionaNegociacao(this._novaNegociacao());

        this._mensagem.text = 'Negociação cadastrada com sucesso!'
        
        this._mensagemView.update(this._mensagem);

        /* Atualizando a view para mostrar a lista com as negociações */
        this._negociacoesView.update(this._listaNegociacoes);


        /* Chamando método internamente para limpar o formulário */
        this._cleanForm();
    }

    /* Método para instânciar uma nova negociação */
    _novaNegociacao() {

        return new Negociacao(
            /* Convertendo texto para data */
            DateHelper.textToDate(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

    }

    /* Método privado para limpar o formulário */
    _cleanForm() {

        /* Seleciona formulário e da um reset */
        document.querySelector('form').reset();

        /* Dá foco no campo de data novamente */
        this._inputData.focus();
    }

}
