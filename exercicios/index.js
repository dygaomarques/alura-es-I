class Arquivo {

    constructor(nome, tamanho, tipo) {
        this._nome = nome;
        this._tamanho = tamanho;
        this._tipo = tipo;
    }

    get nome() {
        return this._nome;
    }

    get tamanho() {
        return this._tamanho;
    }

    get tipo() {
        return this._tipo;
    }
}

class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
         event.preventDefault();
        // arquivo1/230mb/avi
        let informacoes = this._inputDados.value.toUpperCase();
        let expressao = /[A-Z0-9]+\/\d+MB\/[A-Z0-9]/;

        var novoUpload = new Arquivo();

        if(expressao.test(informacoes)) {
          let novoUpload = new Arquivo(...informacoes.split('/'));
          console.log(`Dados do arquivo: nome ${novoUpload.nome}, tamanho ${novoUpload.tamanho}, tipo ${novoUpload.tipo}`);
        }

        this._limpaFormulario();
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}
