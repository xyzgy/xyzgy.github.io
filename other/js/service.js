$('.page_index>div').click(function() {
	let index = $(this).index();
	let text = $('.page_ul li').eq(index).text();
	listPage($('.page_ul li').eq(index), index, text);
})