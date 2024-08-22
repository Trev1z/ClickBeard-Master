
        function logar(){

            var login = document.getElementById('email').value;
            var senha = document.getElementById('senha').value;

            if(login == "admi@admin.com" && senha == "admin"){
                alert('Sucesso');
                location.href = "admin.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }

        function user(){

            var login = document.getElementById('login').value;
            var senha = document.getElementById('senha').value;

            if(login == "user" && senha == "Ea+1useruser"){
                alert('Sucesso');
                location.href = "agendamento.html";
            }else{
                alert('Usuario ou senha incorretos');
            }

        }
