$(document).ready(function() {

    $("form").submit(function(event) {
        event.preventDefault();
        
        const novaTarefa = $("#nova-tarefa").val();
        
        if (novaTarefa) {
            $("ul").append(`<li>${novaTarefa}</li>`);
            
            $("#nova-tarefa").val("");
        }
    });

    $("ul").on("click", "li", function() {
        $(this).toggleClass("riscado");
    });

    $("#limpar-lista").click(function() {
        $("ul").empty();
    });
});