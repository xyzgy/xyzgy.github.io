var total_html = '';
var imgLen = 14;
for (let i = 1; i < imgLen; i++) {
	let html = "<div class='box'><img src='../image/know_cg/cgry/" + i + ".jpg' ></div>";
	total_html += html;
}
$('.cgry').append(total_html);


$('.zgfc>ul').click(function() {
	$('.page_show .siblings_page').hide();
	$('.zgfc_page').show()
})

$('.page_ul li').click(function() {
	$('.zgfc_page').hide()
})

$('.cgry_li').click(function() {
	var $container = $('#masonry');
	$container.imagesLoaded(function() {
		$container.masonry({
			itemSelector: '.box',
			gutter: 20,
			isAnimated: true,
		});
	});
})