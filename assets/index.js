const btnBuyTickets = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')


  function showBuyTickets(){
    modal.classList.add('open');
  }
  for(const btnBuyTicket of btnBuyTickets) {
    btnBuyTicket.addEventListener('click', showBuyTickets)
  }

  function hideBuyTickets() {
    modal.classList.remove('open')
  }

  modalClose.addEventListener('click', hideBuyTickets)

  modal.addEventListener('click', hideBuyTickets)

  modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
  })


// <!-- ===== MENU BAR =====-->
var header = document.getElementById('header');
// var menuBar = document.getElementsByClassName('menu-bar');
var menuBar = document.getElementById('menuBar');
var headerHeight = header.clientHeight;

menuBar.onclick = function() {
  var isClosed = header.clientHeight === headerHeight;

  (isClosed) ? header.style.height = 'auto' : header.style.height = null;
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList('subnav');
    (isParentMenu) ? event.preventDefault() : header.style.height = null;
  }
}