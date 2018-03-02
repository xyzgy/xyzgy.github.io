$('.hyzx').click(function() {
	$('.page_show .siblings_page').hide();
	$('.gsdt_page').hide();
	$('.hyzx_page').show();

})

$('.gsdt').click(function() {
	let index = $(this).index();
	console.log(index)
	$('.page_show .siblings_page').hide();
	$('.hyzx_page').hide()
	$('.gsdt_page').eq(index).show()
})

$('.page_ul li').click(function() {
	$('.hyzx_page').hide();
	$('.gsdt_page').hide();
})