// 招聘信息
$('.siblings_page ul li.job').click(function() {
	let index = $(this).index() + 1;
	$('.siblings_page ul .job_txt').not($('.siblings_page ul li').eq(index)).slideUp(200)
	$('.siblings_page ul li').eq(index).slideToggle(1000)
})

$('.siblings_page ul li.job_txt').click(function() {
	$(this).slideUp(200)
})

// 地图
var map = new AMap.Map('container', {
	resizeEnable: true,
	zoom: 18,
	center: [116.501746, 39.780073]
});

marker = new AMap.Marker({
	position: [116.500807, 39.780276],
	map: map,

});

var info = ["车工科技（北京）股份有限公司"];
infoWindow = new AMap.InfoWindow({
	content: info.join("<br/>"), //使用默认信息窗体框样式，显示信息内容
	offset: new AMap.Pixel(0, 60)
});
infoWindow.open(map, [116.500807, 39.780276]);