$(document).ready(function()
{



	$("#btnAdd").click(function()
	{
		conteudo = $("#novaAnotacao").val();
		if(conteudo != "")
		{
			divAnotacao = '<div class="anotacao">';
			divAnotacao += '<div class="topo">';
			divAnotacao += '<img class="excluir" src="img/excluir.png" title="excluir" alt="excluir">';
			divAnotacao += '</div>';
			divAnotacao += conteudo;
			divAnotacao += '</div>';
			$("#anotacoes").append(divAnotacao);
			$("#novaAnotacao").val("");
			$("#novaAnotacao").focus();
		}
		else
		{
			alert("A anotação não pode ser vazia");
		}


	});



	$("#anotacoes").on("click",".excluir", function()
	{
		anotacao = $(this).parent().parent();
		$("#confirmacao").show();
	});


	$("#nao").click(function()
	{
		$("#confirmacao").hide();
	});

	$("#sim").click(function()
	{
		anotacao.remove();
		$("#confirmacao").hide();
	});
});