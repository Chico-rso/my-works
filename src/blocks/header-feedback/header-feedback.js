o2.feedback =
{
	open()
	{
		const openBtn = document.querySelector('.header__bottom-btn');
		const feedback = document.querySelector('.header-feedback');
		feedback.style = 'display: block';
	},
	close()
	{
		const closeBtn = document.querySelector('.header-feedback__close');
		const feedback = document.querySelector('.header-feedback');
		const sendClose = document.querySelector('.send-message__close');
		const sendMessage = document.querySelector('.send-message');
		feedback.style = 'display: none';
		sendMessage.style = 'visibility: hidden';
	},
	send()
	{
		const sendMessage = document.querySelector('.send-message');
		const feedback = document.querySelector('.header-feedback');
		const send = document.querySelector('.send');
		sendMessage.style = 'visibility: visible';
		feedback.style = 'display: none';
	}

}