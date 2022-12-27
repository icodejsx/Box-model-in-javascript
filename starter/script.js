'use strict';


const showModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');


const closeModelFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModelFunction = function () {
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}

for( let i = 0; i < showModel.length; i++){
showModel[i].addEventListener('click', showModelFunction)};


closeModal.addEventListener('click', closeModelFunction);
overlay.addEventListener('click', closeModelFunction)


document.addEventListener('keydown', function(e){

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModelFunction();
    }
})