$(document).ready(function() {
    $('#form-todolist').submit(function(e) {
        e.preventDefault();
        var taskName = $('#tarefa').val();
        if (taskName.trim() !== '') {
            $('#lista-tarefas').append('<li>' + taskName + '</li>');
            $('#tarefa').val('');
        }
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completo');
    });
});