class NegociacoesView extends View {

    /* Método privado para construir o templete da tabela */
    template(model) {

        /* Montando e retornando o template */
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${model.negociacoes.map((negociacao) => {
                        return `
                            <tr>
                                <td>${DateHelper.dateToText(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="3"><strong>TOTAL</strong></td>
                        <td>${model.negociacoes.reduce((total, negociacao) => total += negociacao.volume, 0)}</td>
                    </tr>
                </tfoot>
            </table>
        `;

    }

}
