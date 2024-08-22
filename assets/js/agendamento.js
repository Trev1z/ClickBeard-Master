
      function enviarDados() {
        const cliente = document.getElementById('cliente').value;
        const servicos = document.getElementById('servicos').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;
        const funcionario = document.getElementById('funcionario').value;

        // Armazenar dados no localStorage
        localStorage.setItem('agendamento', JSON.stringify({
          cliente,
          servicos,
          data,
          horario,
          funcionario
        }));

        // Redirecionar para a página de administração
        window.location.href = 'admin.html';
      }
