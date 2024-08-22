document.addEventListener('DOMContentLoaded', function() {
    const dados = JSON.parse(localStorage.getItem('agendamento'));
  
    if (dados) {
      const tableBody = document.getElementById('agendaTableBody');
  
      const novaLinha = document.createElement('tr');
      novaLinha.innerHTML = `
        <td>${dados.cliente}</td>
        <td>${dados.servicos}</td>
        <td>${dados.horario}</td>
        <td>${dados.funcionario}</td>
        <td>${dados.data}</td>
      `;
  
      tableBody.appendChild(novaLinha);
  
      // Limpar os dados 
      localStorage.removeItem('agendamento');
    }
  });