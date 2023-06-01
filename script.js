function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensagem.textContent = "Texto encriptado com sucesso!";
      paragrafo.textContent = "";
      boneco.src = "https://static.vecteezy.com/ti/vetor-gratis/p1/5632856-executivo-homem-sucesso-trabalho-bem-feito-conceito-homem-gerente-obteve-promocao-e-levantou-maos-para-cima-ilustracao-colorida-em-gratis-vetor.jpg";
    } else {
      boneco.src = "./img/boneco.png";
      tituloMensagem.textContent = "Ops! Nenhuma mensagem foi encontrada.";
      pagrafo.textContent = "Insira o texto para encriptar ou desencriptar.";
      swal("Ooops!", "Deves digitar um texto.", "ATENÇÃO");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto desencriptado com sucesso.";
        paragrafo.textContent = "";
        boneco.src = "https://img.freepik.com/vetores-premium/conceito-de-vicio-em-internet-com-situacao-de-personagem-o-homem-tem-um-vicio-doentio-em-bate-papo-on-line-e-esta-amarrado-com-cordas-ao-laptop-ilustracao-vetorial-com-cena-de-pessoas-em-design-plano-para-web_9209-11334.jpg?w=740";
      } else {
        boneco.src = "./img/boneco.png";
        tituloMensagem.textContent = "Poxa. Nenhuma mensagem foi encontrada.";
        paragrafo.textContent = "Digite o texto que deseja encriptar ou desencriptar.";
        swal("Ooops!", "Deves digitar um texto aqui. ", "ATENÇÃO");
      }
  }