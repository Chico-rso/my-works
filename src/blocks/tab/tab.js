o2.tab =
{
	init()
	{
	},
	open(e, i)
	{
		let wr = e.target.closest('._tabs-wr');
		let tabsBtns = wr.querySelector('.tabs').querySelectorAll('.tab-btn');
		let tabsContent = wr.querySelectorAll('.tab__content');

		tabsBtns.forEach( el => el.classList.remove('active') );
		tabsContent.forEach( el => el.classList.remove('tab__content-active') );

		wr.querySelector(`.tab__content[data-target="${i}"]`).classList.add('tab__content-active');
		e.target.closest('.tab-btn').classList.add('active');

		// const btn = document.querySelectorAll('.tab-btn').forEach(function(tabBtn)
		// {
		// 	const path = e.currentTarget.dataset.path;
		// 	document.querySelectorAll('.tab__content').forEach(function(tabContent)
		// 	{
		// 		tabContent.classList.remove('.tab__content-active');
		// 	});
		// 	document.querySelector(`[data-target='${path}']`).classList.add('tab__content-active');
		// });
	},

}