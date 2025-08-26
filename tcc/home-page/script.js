document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.servicos-track');
    const btnEsq = document.querySelector('.seta-navegacao.esquerda');
    const btnDir = document.querySelector('.seta-navegacao.direita');
    const card = document.querySelector('.card-servico');
    const gap = 40; // igual ao CSS
    const cardsPorPagina = Math.floor(document.querySelector('.servicos-viewport').offsetWidth / (card.offsetWidth + gap));
    const scrollAmount = (card.offsetWidth + gap) * cardsPorPagina;
  
    let position = 0;
  
    btnDir.addEventListener('click', () => {
      position -= scrollAmount;
      const maxScroll = -(track.scrollWidth - document.querySelector('.servicos-viewport').offsetWidth);
      if (position < maxScroll) position = maxScroll;
      track.style.transform = `translateX(${position}px)`;
    });
  
    btnEsq.addEventListener('click', () => {
      position += scrollAmount;
      if (position > 0) position = 0;
      track.style.transform = `translateX(${position}px)`;
    });
  });
  
  