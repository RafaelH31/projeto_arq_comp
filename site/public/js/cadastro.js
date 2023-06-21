
    function cadastrar() {

        var nomeVar = nome_input.value;
        var emailVar = email_input.value;
        var senhaVar = senha_input.value;
        var jogoVar = select_jogo.value;
        var confirmacaoSenhaVar = confirmacao_senha_input.value;

        erro_email.innerHTML = "";
        erro_senha.innerHTML = "";
        erro_confirmar_senha.innerHTML = "

        if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == ""|| jogoVar == "" ) {
            alert("Preencha os campos vazios")

        } else {

           
            if (emailVar.indexOf("@") == -1 || emailVar.endsWith(".com") == false) {

                erro_email.innerHTML = "email inválido"
                input_email.className = "invalido"


                if (emailVar.indexOf("@") == -1) {

                    erro_email.innerHTML = `Está faltando o @`


                }
                else if (emailVar.endsWith(".com") == false) {

                    erro_email.innerHTML = `Está faltando o ".com"`

                }

            }

            else if (!/[!@#\$%\^&\*\(\)\-_\+=\[\]{};':"\\|,.<>\/?]/.test(senhaVar)) {
                erro_senha.innerHTML = 'Senha inválida!'
                erro_senha.innerHTML += ' A senha deve conter pelo menos um caractere especial.'
                input_senha.className = "invalido"

            }

            else if (senhaVar.length < 8) {
                erro_senha.innerHTML = 'Senha inválida!'
                erro_senha.innerHTML += ' Precisa ter ao menos 8 dígitos'
                input_senha.className = 'invalido'

            }

            else if
                (confirmacaoSenhaVar != senhaVar) {
                erro_confirmar_senha.innerHTML = `A senha de confirmação não corresponde à senha inserida. Por favor, tente novamente`
                input_confirmar_senha.className = "invalido"

            }
            window.location = 'index.html'
        }

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nomeVar,
                emailServer: emailVar,
                senhaServer: senhaVar,
                jogoServer: jogoVar,
            })
        })

    }
