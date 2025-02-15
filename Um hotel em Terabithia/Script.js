var valido = true;
var hotel;
var dayEvento;
var hoEvento;
var senhaCorreta = "2678"; 
var nome;
var hospedes = [];

function inicio() {
    menu = parseInt(prompt("'HOME PAGE' \nmenu \n1) Reservar Quartos \n2) Cadastro \n3) Cadastrar e Pesquisar \n4) Eventos \n5) Buffet \n6) Auditório \n7) Restaurante \n8) Abastecer Carro \n9)Manut. Ar Condicionado \n10) Sair"));

    switch (menu) {
        case 1:
            reserva();
            break;
        case 2:
            cadastroComum();
            break;
        case 3:
            cadastrarPesquisar();
            break;
        case 4:
            cadastrarEventos();
            break;
        case 5:
            buffet();
            break;
        case 6:
            auditorio();
            break;
        case 7:
            restaurante();
            break; 
        case 8:
            abastecerCarro();
            break; 
        case 9:
            arCondicionado();
            break; 
        case 10:
            sair();
            break;
        default:
            erro();
    }
}

function nomeHotel() {
    hotel = prompt("Digite o nome do Hotel");
    if (hotel === null) {
        close.window();
        return;
    }
    if (hotel !== "") {
        alert("O nome do hotel é " + hotel);
        loginFuncionario();
    } else {
        alert("Por favor Digite um nome válido !");
        nomeHotel();
    }
}

function loginFuncionario() {
    nome = prompt("Digite o seu nome de usuário: ");
    if (nome === null) {
        nomeHotel();
        return;
    }
    while (nome === "") {
        alert("Por favor, digite um nome de usuário válido !");
        nome = prompt("Digite o seu nome de usuário: ");
    }
    senha = prompt("Digite sua senha: ");
    while (senha !== senhaCorreta) {  
        alert("Senha incorreta, digite novamente.")
        senha = prompt("Digite a sua senha: ");
    }
    alert(`Bem-vindo ao hotel ${hotel}, ${nome}. É um prazer ter você conosco!`);
    inicio();
}



        function reserva() {
            diaria = prompt("Qual o valor padrão da diária? ");
            if (diaria === null) {
                inicio();
                return;
            }
            diaria = parseFloat(diaria);

            if (isNaN(diaria) || diaria <= 0 || diaria === "") {
                alert("Digite um valor válido, " + nome);
                reserva();

            } else {
                quantidadeDias = parseInt(prompt("Quantas diárias serão necessárias? "));
                if (isNaN(quantidadeDias) || quantidadeDias > 30 || quantidadeDias <= 0 || quantidadeDias === "") {
                    alert("Valor inválido !");
                    inicio();
                } else {
                    totalHospedagem = diaria * quantidadeDias;
                    alert("O valor de " + quantidadeDias + " dias de hospedagem é de: R$" + totalHospedagem);
                    confirmaReserva();
                }
            }
        }

        function confirmaReserva() {

            hospede = prompt("Qual o nome do hóspede ?");
            if (hospede === null) {
                reserva();
                return;
            }
            while (hospede === "") {
                alert("Você digitou um nome inválido.");
                hospede = prompt("Qual o nome do hóspede ?");
            }

            confirma = prompt(nome + ", você confirma a hospedagem para " + hospede + " por " + quantidadeDias + " dias ? S/N");

            while (confirma.toUpperCase() !== "N" && confirma.toUpperCase() !== "S") {
                alert("Digite S (sim) ou N (não) para confirmar ou não a reserva.");
                confirma = prompt(nome + ", você confirma a hospedagem para " + hospede + " por " + quantidadeDias + " dias ? S/N");
            }
            if (confirma.toUpperCase() === "S") {
                alert(nome + ", reserva efetuada para " + hospede + ". O valor total é de: R$" + totalHospedagem);
                inicio();
            } else if (confirma.toUpperCase() === "N") {
                alert(nome + " reserva não efetuada !");
                inicio();
            } else {
                alert("Digite S ou N para confirmar ou não a reserva.");
            }
        }

        function erro() {
            alert('Por favor, Digite um número entre 1 e 10.');
            inicio();
        }

        function sair() {
            confirma = confirm("Você deseja realmente sair ?");
            if (confirma) {
                alert("Muito obrigado e até logo, " + nome);
                window.close();
            } else {
                inicio();
            }
        }

        function cadastroComum() {
            valorPadrao = prompt("Qual o valor padrão da diária?");
            if (valorPadrao === null) {
                inicio();
                return;
            }
            valorPadrao = parseFloat(valorPadrao);

            while (isNaN(valorPadrao) || valorPadrao === "" || valorPadrao <= 0) {
                alert("Você digitou um nome inválido.");
                valorPadrao = parseFloat(prompt("Qual o valor padrão da diária?"));
            } cadastroComum2();
        }

        function cadastroComum2() {
            somaTotal = 0;
            gratuidade = 0;
            meiaDiaria = 0;

            while (true) {
                nome = prompt("Digite o nome do Hospede? ");

                if (nome.toUpperCase() === "PARE") {
                    valido = false;
                    break;

                } else if (nome === "") {
                    alert(nome + ", digite um nome válido !");

                } else {
                    idadeUsuario = parseInt(prompt("Digite a idade do hospede"));

                    if (isNaN(idadeUsuario) || idadeUsuario === "" || idadeUsuario <= 0) {
                        alert("Digite um valor válido !");

                    } else if (idadeUsuario <= 6) {
                        alert(nome + " Cadastrada (o) com sucesso. " + nome + " Possui Gratuídade.");
                        gratuidade++;

                    } else if (idadeUsuario >= 60) {
                        alert(nome + " Cadastrada (o) com sucesso. " + nome + " Paga meia.");
                        somaTotal += valorPadrao / 2;
                        meiaDiaria++;

                    } else {
                        alert(nome + " Cadastrada (o) com sucesso. ");
                        somaTotal += valorPadrao;
                    }
                }
            }
            alert(`${nome}, o valor total das hospedagens é R$${somaTotal}; ${gratuidade} grauidade(s); ${meiaDiaria} meias(s)`);
            inicio();
        }

        function cadastrarPesquisar() {
            opcoes = parseInt(prompt("'Pesquisar Cadastro' \nO que deseja? \n1) Cadastrar \n2) Pesquisar \n3) Listar \n 4) Sair "));

            switch (opcoes) {
                case 1:
                    cadastrarHospede();
                    break;
                case 2:
                    pesquisarHospede();
                    break;
                case 3:
                    listarhospedes();
                    break;
                case 4:
                    sair();
                    break;
                default:
                    erro2();
            }
        }
        function erro2() {
            alert('Por favor, Digite um número entre 1 e 4.');
            inicio();
        }
        function cadastrarHospede() {

            while (true) {
                nome = prompt("Qual o nome do Hospede ?");
                if (nome === "") {
                    alert("Valor inválido.");
                    break;
                }
                else if (hospedes.length >= 15) {
                    alert("Numero máximo de hospedes cadastrados.");
                    break;
                } else {
                    hospedes.push(nome);
                    alert(`Hospede ${nome} foi cadastrado (a) com sucesso!`);

                    confirma = prompt("Deseja continuar cadastrando hospedes ? S (sim) N (não)");

                } if (confirma.toUpperCase() === "N") {
                    cadastrarPesquisar();
                    break;
                } else {
                    (confirma.toUpperCase() === "S")
                }
            }
        }
        function pesquisarHospede() {
            buscaHospede = prompt("Digite o nome do hospede para realizar a pesquisa");

            if (nome === "") {
                alert("Valor inválido.");
            } else if (hospedes.includes(buscaHospede)) {
                alert(`Hóspede ${buscaHospede} foi encontrada(o)!`);
                cadastrarPesquisar()
            } else {
                alert(`Hóspede ${buscaHospede} não foi encontrada(o)!`);
                cadastrarPesquisar()
            }
        }
        function listarhospedes() {
            if (hospedes.length === 0) {
                alert("Nenhum hóspede cadastrado.");
                cadastrarPesquisar();
            } else {
                alert("Lista de todos os hóspedes:\n" + hospedes.join("\n"));
                inicio();
            }
        }

        function cadastrarEventos() {
            garcon = 10.50;

            duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));

            if (isNaN(duracaoEvento) || duracaoEvento <= 0) {
                alert("Você digitou um valor inválido. Por favor digite novamente!");
                cadastrarEventos();
            }
            quantidadeGarcons = parseInt(prompt("Quantos garçons serão necessários?"));
            8
            if (isNaN(quantidadeGarcons) || quantidadeGarcons <= 0) {
                alert("Você digitou um valor inválido. Por favor digite novamente!");
                cadastrarEventos();
            }
            valorTotalEvento = garcon * quantidadeGarcons * duracaoEvento;

            menu = prompt(`Custo total: R$${valorTotalEvento}. Gostaria de efetuar a reserva ? S/N`);
            if (menu.toUpperCase() === "S") {
                alert(`${nome}. reserva efetuada com sucesso`);
                inicio();
            } else if (menu.toUpperCase() === "N") {
                alert(`${nome}. reserva não efetuada`);
                inicio();
            } else {
                alert("Digite S ou N para confirmar ou não a reserva.");
            }
        }
        function buffet() {
            quantidadeConvidados = parseInt(prompt("Digite a quantidade de convidados"));
            if (quantidadeConvidados > 350) {
                alert("Quantidade de convidados superior à capacidade máxima");
                buffet();
            } else if (quantidadeConvidados <= 0) {
                alert("Valor invalido! Digite novamente.");
                buffet();
            } else {
                cafeLitros = quantidadeConvidados * 0.2;
                aguaLitros = quantidadeConvidados * 0.5;
                salgados = quantidadeConvidados * 7;

                cafePreco = cafeLitros * 0.80;
                aguaPreco = aguaLitros * 0.40;
                salgadoPreco = (salgados * 34) / 100;

                precoTotalbuffet = cafePreco + aguaPreco + salgadoPreco;
                alert(`O evento precisará de ${cafeLitros.toFixed(2)} litros de café, ${aguaLitros.toFixed(2)} litros de água e ${salgados} salgados. O custo total do evento será de R$ ${precoTotalbuffet.toFixed(2)}.`);
                confirmar = prompt(`Gostaria de efetuar a reserva ? S/N`);
                if (confirmar.toUpperCase() === "S") {
                    alert(`${nome}. reserva efetuada com sucesso`);
                    inicio();
                } else if (confirmar.toUpperCase() === "N") {
                    alert(`${nome}. reserva não efetuada`);
                    inicio();
                } else {
                    alert("Digite S ou N para confirmar ou não a reserva.");
                }
            }
        }
        function auditorio() {
            while (true) {
                cadeiras = 0;
                convidados = prompt("Qual o número de convidados para o seu evento?");
                if (convidados === null) {
                    inicio();
                    return;
                }
                convidados = parseInt(convidados);

                if (isNaN(convidados) || convidados <= 0) {
                    alert("Número de convidados inválido");
                } else if (convidados > 350) {
                    alert("Quantidade de convidados superior à capacidade máxima");
                } else {
                    if (convidados <= 150) {
                        alert("Use o auditório Laranja.");
                        corfirmaAuditorio();
                    } else if (convidados > 150 && convidados <= 220) {
                        cadeiras = convidados - 150;
                        alert(`Use o auditório Laranja (inclua mais ${cadeiras} cadeiras).`);
                        corfirmaAuditorio();
                    } else if (convidados <= 350) {
                        alert('Use o auditório Colorado.');
                        corfirmaAuditorio();
                    }
                }
            }
        }
        function corfirmaAuditorio() {
            confirmar = prompt(`Gostaria de efetuar a reserva ? S/N`);
            if (confirmar.toUpperCase() === "S") {
                alert(`${nome}. reserva efetuada com sucesso`);
                inicio();
            } else if (confirmar.toUpperCase() === "N") {
                alert(`${nome}. reserva não efetuada`);
                inicio();
            } else {
                alert("Digite S ou N para confirmar ou não a reserva.");
                corfirmaAuditorio();
            }
        }

        function restaurante() {
            var dayEvento = prompt("Qual dia da semana é seu evento? (Digite em minúsculas, sem acento)");
            if (dayEvento === "segunda" || dayEvento === "terca" || dayEvento === "quarta" || dayEvento === "quinta" || dayEvento === "sexta") {
                var hoEvento = prompt("Qual é o horário do evento?");
                if (hoEvento === null) {
                    inicio();
                    return;
                }
                hoEvento = parseInt(hoEvento);

                if (hoEvento >= 7 && hoEvento <= 23) {
                    restauranteEmpresa(dayEvento, hoEvento); // Passando os valores corretos
                } else {
                    alert("Restaurante Indisponível.");
                    inicio();
                }
            } else if (dayEvento === "sabado" || dayEvento === "domingo") {
                var hoEvento = prompt("Qual é o horário do evento?");
                if (hoEvento === null) {
                    inicio();
                    return;
                }
                hoEvento = parseInt(hoEvento);

                if (hoEvento >= 7 && hoEvento <= 15) {
                    alert("Restaurante disponível");
                    inicio();
                } else {
                    alert("Restaurante Indisponível.");
                    inicio();
                }
            } else {
                alert("Dia inválido!");
                inicio();
            }
        }

        function restauranteEmpresa(dayEvento, hoEvento) {
            var nomeEmpresa = prompt('Qual o nome da empresa?');
            if (nomeEmpresa !== "") {
                alert(`Restaurante reservado para ${nomeEmpresa}: ${dayEvento} às ${hoEvento}hs`);
                inicio();
            } else {
                alert('Digite um nome válido.');
                restauranteEmpresa(dayEvento, hoEvento);
            }
        }

        function restauranteEmpresa(dayEvento, hoEvento) {
            var nomeEmpresa = prompt('Qual o nome da empresa?');
            if (nomeEmpresa !== "") {
                alert(`Restaurante reservado para ${nomeEmpresa}: ${dayEvento} às ${hoEvento}hs`);
                inicio();
            } else {
                alert('Digite um nome válido.');
                restauranteEmpresa(dayEvento, hoEvento);
            }
        }
        function abastecerCarro() {
            while (true) {
                alcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
                if (!isNaN(alcoolWayne) && alcoolWayne > 0) {
                    break;
                } else {
                    alert('Valor Inválido.');
                }
            }
            while (true) {
                gasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
                if (!isNaN(gasolinaWayne) && gasolinaWayne > 0) {
                    break;
                } else {
                    alert('Valor Inválido.');
                }
            }
            while (true) {
                alcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
                if (!isNaN(alcoolStark) && alcoolStark > 0) {
                    break;
                } else {
                    alert('Valor Inválido.');
                }
            }
            while (true) {
                gasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));
                if (!isNaN(gasolinaStark) && gasolinaStark > 0) {
                    break;
                } else {
                    alert('Valor Inválido.');
                }
            }
            abastecerCarro2(alcoolWayne, gasolinaWayne, alcoolStark, gasolinaStark);
        }

        function abastecerCarro2(alcoolWayne, gasolinaWayne, alcoolStark, gasolinaStark) {
            var litrosAbastecidos = 42;
            var totalAlcoolWayne = alcoolWayne * litrosAbastecidos;
            var totalGasolinaWayne = gasolinaWayne * litrosAbastecidos;
            var totalAlcoolStark = alcoolStark * litrosAbastecidos;
            var totalGasolinaStark = gasolinaStark * litrosAbastecidos;

            let combustivelWayne, precoTotalWayne;
            if (totalAlcoolWayne / totalGasolinaWayne < 0.7) {
                combustivelWayne = "álcool";
                precoTotalWayne = totalAlcoolWayne;
            } else {
                combustivelWayne = "gasolina";
                precoTotalWayne = totalGasolinaWayne;
            }

            let combustivelStark, precoTotalStark;
            if (totalAlcoolStark / totalGasolinaStark < 0.7) {
                combustivelStark = "álcool";
                precoTotalStark = totalAlcoolStark;
            } else {
                combustivelStark = "gasolina";
                precoTotalStark = totalGasolinaStark;
            }

            let postoMaisBarato;
            if (precoTotalWayne < precoTotalStark) {
                postoMaisBarato = "Wayne Oil";
                alert(`É mais barato abastecer com ${combustivelWayne} no posto ${postoMaisBarato}.`);
                menuInicio();
            } else {
                postoMaisBarato = "Stark Petrol";
                alert(`É mais barato abastecer com ${combustivelStark} no posto ${postoMaisBarato}.`);
                menuInicio();
            }
        }

        function arCondicionado() {
            var menorOrcamento = Infinity;
            var nomeEmpresaMenorOrcamento = "";

            while (true) {
                var nomeEmpresa = prompt('Qual o nome da empresa?');
                var valorPorAparelho = parseFloat(prompt('Qual o valor por aparelho?'));
                var quantidadeAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
                var percentualDesconto = parseFloat(prompt('Qual a porcentagem de desconto?'));

                if (percentualDesconto > 0) {
                    var quantiMinimaDesconto = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));
                }

                var valorTotal = valorPorAparelho * quantidadeAparelhos;

                if (quantidadeAparelhos > quantiMinimaDesconto) {
                    var desconto = (percentualDesconto / 100) * valorTotal;
                    valorTotal -= desconto;
                }

                if (valorTotal < menorOrcamento) {
                    menorOrcamento = valorTotal;
                    nomeEmpresaMenorOrcamento = nomeEmpresa;
                }

                alert(`O serviço da empresa ${nomeEmpresa} custará R$ ${valorTotal.toFixed(2)}`);

                var continuar = prompt('Deseja informar novos dados? S/N').toUpperCase();
                if (continuar !== 'S') {
                    break;
                }
            }

            alert(`O orçamento de menor valor é o de ${nomeEmpresaMenorOrcamento} por R$ ${menorOrcamento.toFixed(2)}`);
            menuInicio();
        }

        nomeHotel();