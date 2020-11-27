const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeIcon = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closeIcon.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
}

function closeModal(){
    closeIcon.style.display = 'none';
} 