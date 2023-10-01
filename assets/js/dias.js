function atualizarContador() {
    const dataAtual = new Date();
    const dataInicial = new Date("2023-09-23"); // Data inicial (pode ser a data atual)
    
    const diferenca = dataAtual - dataInicial;
    
    const milissegundosPorSegundo = 1000;
    const milissegundosPorMinuto = milissegundosPorSegundo * 60;
    const milissegundosPorHora = milissegundosPorMinuto * 60;
    const milissegundosPorDia = milissegundosPorHora * 24;
    const milissegundosPorMes = milissegundosPorDia * 30; // Assumindo 30 dias por mês
    const milissegundosPorAno = milissegundosPorDia * 365; // Assumindo 365 dias por ano
    
    const anosPassados = Math.floor(diferenca / milissegundosPorAno);
    const mesesPassados = Math.floor((diferenca % milissegundosPorAno) / milissegundosPorMes);
    const diasPassados = Math.floor((diferenca % milissegundosPorMes) / milissegundosPorDia);
    const horasPassadas = Math.floor((diferenca % milissegundosPorDia) / milissegundosPorHora);
    const minutosPassados = Math.floor((diferenca % milissegundosPorHora) / milissegundosPorMinuto);
    const segundosPassados = Math.floor((diferenca % milissegundosPorMinuto) / milissegundosPorSegundo);
    
    document.getElementById("anos").innerText = anosPassados;
    document.getElementById("meses").innerText = mesesPassados;
    document.getElementById("dias").innerText = diasPassados;
    document.getElementById("horas").innerText = horasPassadas;
    document.getElementById("minutos").innerText = minutosPassados;
    document.getElementById("segundos").innerText = segundosPassados;
}

setInterval(atualizarContador, 1000); // Atualizar a cada segundo
