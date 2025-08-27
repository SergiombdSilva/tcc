document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.servicos-track');
  const btnEsq = document.querySelector('.seta-navegacao.esquerda');
  const btnDir = document.querySelector('.seta-navegacao.direita');
  const gap = 40; // deve ser igual ao CSS

  const viewport = document.querySelector('.servicos-viewport');
  const card = document.querySelector('.card-servico');
  const cardsPorPagina = Math.floor(viewport.offsetWidth / (card.offsetWidth + gap));
  const scrollAmount = (card.offsetWidth + gap) * cardsPorPagina;

  let position = 0;

  btnDir.addEventListener('click', () => {
    position -= scrollAmount;
    const maxScroll = -(track.scrollWidth - viewport.offsetWidth);
    if (position < maxScroll) position = maxScroll;
    track.style.transform = `translateX(${position}px)`;
  });

  btnEsq.addEventListener('click', () => {
    position += scrollAmount;
    if (position > 0) position = 0;
    track.style.transform = `translateX(${position}px)`;
  });

  window.addEventListener('resize', () => {
    const newCardsPorPagina = Math.floor(viewport.offsetWidth / (card.offsetWidth + gap));
    const newScrollAmount = (card.offsetWidth + gap) * newCardsPorPagina;
    const maxScroll = -(track.scrollWidth - viewport.offsetWidth);
    if (position < maxScroll) position = maxScroll;
    track.style.transform = `translateX(${position}px)`;
  });
});
