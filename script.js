function porcentagem_1()
{
    var porcentagem = document.getElementById("porcentagem").value;

    var num = document.getElementById("num").value;
    document.getElementById("valor1").value = (num / 100) * porcentagem;
}

function porcentagem_2()
{
    var num1 = document.getElementById("num1").value;

    var num2 = document.getElementById("num2").value;
    document.getElementById("valor2").value = (num1 * 100) / num2 + "%";
}