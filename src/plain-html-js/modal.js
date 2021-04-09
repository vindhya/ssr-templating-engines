const contactLink = document.getElementById('contact');
const modalDiv = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

contactLink.addEventListener('click', () => {
	modalDiv.classList.toggle('active');
});

closeModalButton.addEventListener('click', () => {
	modalDiv.classList.toggle('active');
})