o2.modal =
{
	open()
	{
		const basketButton = document.querySelector('.header__button-basket'),
		      modal = document.querySelector('.modal');
		console.log(basketButton);
		basketButton.addEventListener('click', function (event)
		{
			modal.classList.add('modal__active');
		});
			this.close()
	},
	close()
	{
		const closeButton = document.querySelector('.modal__dialog-close-button');
			  modalActive = document.querySelector('.modal');
		closeButton.addEventListener('click', function(event)
		{
			modalActive.classList.remove('modal__active');
		});
	}
}