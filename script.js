const sorterbutton = document.querySelector("#btn");
sorterbutton.addEventListener("click", function () {
  const inputentre = parseInt(document.getElementById("input-entre").value, 10);
  const inpute = parseInt(document.getElementById("input-e").value, 10);

  const erro = document.querySelector("#erromsg");

  if (inputentre > inpute) {
    erro.innerText = "O valor minimo não pode ser maior que o valor maximo";
    return;
    result.innerText = "";
  }
  erro.innerText = "";
  result.innerText = "";

  if (isNaN(inputentre) || isNaN(inpute)) {
    erro.innerText = "Opa! Você esqueceu de preencher os números.";

    result.innerText = "";
    return;
  }
  result.innerText = "";

  const NumeroAleatorio =
    Math.floor(Math.random() * (inpute - inputentre + 1)) + inputentre;

  document.getElementById("result").innerText = NumeroAleatorio;
});
