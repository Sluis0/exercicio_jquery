$(document).ready(function() {
    // Adiciona uma nova tarefa
    $('#botao-adicionar').click(function(e) {
        e.preventDefault(); // Evita o envio padrão do formulário
        const tarefa = $('#nova-tarefa').val();
        const data = $('#date').val();
        const prioridade = $('#prioridade').val();
        const detalhes = $('#detalhes').val();

        if (tarefa.trim() !== '') {
            let infoData = ''; // Variável para armazenar a informação da data
            if (data.trim() !== '') {
                infoData = `<p>Data: ${data}</p>`;
            }

            const novaTarefa = `
                <li>
                    <h3>Tarefa:</h3>
                    <textarea readonly id="nome-tarefa">${tarefa}</textarea>
                    ${infoData}
                    <p>Prioridade: ${prioridade}</p>
                    <p>Detalhes: ${detalhes}</p>
                    <div class="botoes">
                        <button type="button" class="botao-concluir" id="botao-concluir">Concluir</button>
                        <button type="button" class="botao-deletar" id="botao-deletar">Deletar</button>
                    </div>
                </li>
            `;
            $('#tarefas-adicionadas ul').append(novaTarefa); // Adiciona a nova tarefa à lista
            $('#lista-tarefas').slideDown(); // Mostra a seção de lista de tarefas
            $('form')[0].reset(); // Limpa os campos do formulário
        }
    });

    // Marca como concluída ou desmarca uma tarefa
    $('#tarefas-adicionadas').on('click', '.botao-concluir', function() {
        $(this).closest('li').toggleClass('concluida');
    });

    // Remove uma tarefa da lista
    $('#tarefas-adicionadas').on('click', '.botao-deletar', function() {
        $(this).closest('li').remove();
    });
});
