const btnBuyTickets = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')


  function showBuyTickets(){
    modal.classList.add('open');
  }

  function hideBuyTickets() {
    modal.classList.remove('open')
  }

  for(const btnBuyTicket of btnBuyTickets) {
    btnBuyTicket.addEventListener('click', showBuyTickets)
  }

  modal.addEventListener('click', hideBuyTickets)
