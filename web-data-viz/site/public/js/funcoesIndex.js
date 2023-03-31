function abrirLogin() {
    var cadastroId = document.querySelector(".cadastro");
    var loginId = document.querySelector(".login");
    cadastroId.style = "display:none"
    console.log("Abrir login")
    loginId.style = "display:flex;"
}
function abrirCadastro() {
    var cadastroId = document.querySelector(".cadastro");
    var loginId = document.querySelector(".login");
    loginId.style = "display:none;"
    console.log("Abrir cadastro")
    cadastroId.style = "display:flex;"
}
function closeCadastro() {
    var cadastroId = document.querySelector(".cadastro");
    cadastroId.style = "display:none"
}
function closeLogin() {
    var loginId = document.querySelector(".login");
    loginId.style = "display:none;"

}
function btnSairShow() {
    if (sessionStorage.length == 0) {
        console.log(sessionStorage.lenght)
        document.getElementById("sairBtn").style = "display:none;"
    } else {
        console.log(sessionStorage.lenght)
        document.getElementById("sairBtn").style = "display: inline-block;"
    }
}
function validarCadastro() {
    alert(`Por favor, insira os dados corretamente.`)

    nomeVar = nomeCadastro.value;
    emailVar = inpEmailCadastro.value;
    senhaVar = inpSenhaCadastro.value;
    confirmacaoSenhaVar = inpSenhaConfirmacao.value;
    codigoEmpresaVar = inpCodigoEmpresa.value;


    if (nomeVar == "") {

        nomeCadastro.style = " border: 3px solid #ff0000 ;"

    } else {
        nomeCadastro.style = "border: 1px solid #ccc; "

    }

    if (emailVar == "") {

        inpEmailCadastro.style = " border: 3px solid #ff0000 ;"

    } else {
        inpEmailCadastro.style = " border: 1px solid #ccc;  "
    }

    if (senhaVar == "") {

        inpSenhaCadastro.style = " border: 3px solid #ff0000 ;"

    }
    else {
        inpSenhaCadastro.style = "border: 1px solid #ccc;"
    }

    if (confirmacaoSenhaVar == "") {

        inpSenhaConfirmacao.style = " border: 3px solid #ff0000 ;"

    }
    else {
        inpSenhaConfirmacao.style = "  border: 1px solid #ccc; "
    }

    if (codigoEmpresaVar == "") {

        inpCodigoEmpresa.style = " border: 3px solid #ff0000 ;"

    } else {
        inpCodigoEmpresa.style = " border: 1px solid #ccc; "
    }
    console.log(senhaVar + " " + confirmacaoSenhaVar)
    if (senhaVar != confirmacaoSenhaVar) {

        alert(`As senhas não coincidem!`)
        inpSenhaConfirmacao.style = " border: 3px solid #ff0000 ;"
        inpSenhaCadastro.style = " border: 3px solid #ff0000 ;"

    } else {
        console.log("Senha correta")
    }
}
function validarLogin() {

    alert(`Login inválido.`)
    emailVar = inpEmail.value;
    senhaVar = inpSenha.value;

    if (emailVar == "") {

        inpEmail.style = " border: 3px solid #ff0000 ;"
    } else {
        inpEmail.style = "border: 1px solid #ccc; "
    }

    if (senhaVar == "") {

        inpSenha.style = " border: 3px solid #ff0000 ;"
    }

    else {
        inpSenha.style = " border: 1px solid #ccc; "
    }



}
function entrar() {
    // aguardar();


    var emailVar = inpEmail.value;
    var senhaVar = inpSenha.value;

    if (emailVar == "" || senhaVar == "") {
        validarLogin();
        //cardErro.style.display = "block";
        mensagem_erro.innerHTML =
            "(Mensagem de erro para todos os campos em branco)";
        //finalizarAguardar();
        return false;
    } else {
        //setInterval(sumirMensagem, 5000);
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!");

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then((json) => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;

                    setTimeout(function () {

                        window.location = "./dashboard/cards.html";
                    }, 1000); // apenas para exibir o loading
                });
            } else {
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then((texto) => {
                    console.error(texto);
                    //finalizarAguardar(texto);
                });
            }
        })
        .catch(function (erro) {
            console.log(erro);
        });

    return false;
}
function cadastrar() {
    //aguardar();
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nomeCadastro.value;
    var emailVar = inpEmailCadastro.value;
    codigoEmpresaVar = inpCodigoEmpresa.value;
    var senhaVar = inpSenhaCadastro.value;
    var confirmacaoSenhaVar = inpSenhaConfirmacao.value;

    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "" ||
        codigoEmpresaVar == ""
    ) {
        console.log("Campos vazios");

        return false;
    } else {
        validarCadastro();
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                // cardErro.style.display = "block";

                //mensagem_erro.innerHTML =
                // "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "index.html";
                }, "2000");

                // limparFormulario();
                // finalizarAguardar();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
            // finalizarAguardar();
        });

    return false;
}

btnSairShow();

