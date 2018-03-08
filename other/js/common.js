// 隐藏样式
$('.header_ul .page_li').eq(2).find('.header_li_ul li').eq(2).addClass('none');
$('.header_ul .page_li').eq(5).find('.header_li_ul li').eq(2).addClass('none');

var main_top_height;
var index_url = window.location.href.split('/').pop().split('.')[0]; //判断是否是首页
var get_url = window.location.href.split('?')[1]; //判断是否跳转的是子页面
var urlArr = [];
if (index_url == 'index') {
	urlArr = ['', 'index.html', 'html/know_cg.html', 'html/news.html', 'html/service.html', 'html/nvestor.html', 'html/add_cg.html'];
	main_top_height = $('.banner li').height();

	$('.main_context').append('<button class="gotop"><img src="image/gotop.png" alt=""></button>')

} else {
	urlArr = ['', '../index.html', '../html/know_cg.html', '../html/news.html', '../html/service.html', '../html/nvestor.html', '../html/add_cg.html'];
	main_top_height = $('.other_bg').height();

	$('.main_context').append('<button class="gotop"><img src="../image/gotop.png" alt=""></button>')


}
// 初始化banner图高度
// $('.main_top').height(main_top_height - 4);

if (get_url == undefined) {
	// 头部跳转 默认首位
} else {
	// 其它页面跳转至指定页面
	let getIndex = Number(get_url);
	let text = $('.page_ul li').eq(getIndex).text();

	let _this = $('.page_ul li').eq(getIndex);

	listPage(_this, getIndex, text)
}
// 页面大小改变时更改banner图高度
// $(window).resize(function() {
// 	if (index_url == 'index') {
// 		main_top_height = $('.banner li').height();
// 	} else {

// 		main_top_height = $('.other_bg').height();
// 	}
// 	$('.main_top').height(main_top_height - 4);

// });
$(function() {
	$(window).scroll(function() {
		// console.log($(window).scrollTop())
		if ($(window).scrollTop() > 500) {
			$(".gotop").fadeIn(300);
		} else {
			$(".gotop").fadeOut(300);
		}

	});
	$(".gotop").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});
// 头部点击事件
$('.header_ul>li p').click(function() {
	let index = $(this).parent().index()
	console.log(index)
	window.location.href = urlArr[index];
})
// 头部鼠标经过事件
$('.header_ul>li').hover(function() {
	$('.header_li_ul').stop().slideUp(500);
	$(this).find('.header_li_ul').stop().slideDown(500);
}, function() {
	$('.header_li_ul').stop().slideUp(500);
})


// 头部下拉列表点击事件
$('.header_ul>li ul.header_li_ul li').click(function() {
	let parentIndex = $(this).parent().parent().index();
	let listIndex = $(this).index();

	window.location.href = urlArr[parentIndex] + '?' + listIndex;
	console.log(parentIndex)
})

// 左侧列表事件
$('.page_ul li').click(function() {
	let index = $(this).index();
	let text = $(this).text();
	listPage(this, index, text)
})

$('.page_li').click(function() {
	let index = $(this).index() - 1;
	if (index == 0) {
		$('.other_bg').hide();
		$('.banner').show();
	} else {
		$('.other_bg').show();
		$('.banner').hide();
	}


	$('.main_context').hide();
	$('.main_context').eq(index).show();
})

function listPage(_this, index, text) {
	console.log(index)

	if ($('.other_bg')) {
		console.log($('.other_bg img').length)
		if ($('.other_bg img').length < 2) {
			$('.other_bg img').eq(0).show();
		} else {
			$('.other_bg img').hide();

			$('.other_bg img').eq(index + 1).show();
		}

	}
	$('.page_index').hide()
	$(_this).siblings().removeClass('page_li_active');
	$(_this).addClass('page_li_active');

	$(_this).parent().siblings().find('.siblings_page').hide();
	$(_this).parent().siblings().find('.siblings_page').eq(index).show();

	$(_this).parent().parent().parent().siblings().find('.dt_span').text(' > ' + text)
}

// 插入的代码中间标签不需要结束标签 暂未知原因
// $('.footer').html("<div class='clear_fl'> <ul class = 'left' ><p><a href='know_cg.html'><span>了解车工</span></a></p> <li > <a href='know_cg.html?0'><span>董事长致辞</span></a>  <li > <a href='know_cg.html?1'><span>企业介绍</span></a>  <li > <a href='know_cg.html?2'><span>企业文化</span></a>  <li > <a href='know_cg.html?3'><span>职工风采</span></a>  <li > <a href='know_cg.html?4'><span>车工荣誉</span></a>  </ul> <ul class = 'left' ><p><a href='news.html'><span>新闻资讯</span></a></p> <li > <a href='news.html?0'><span>行业资讯</span></a>  <li > <a href='news.html?1'><span>公司动态</span></a>  <li > <a href='news.html?2'><span>媒体报道</span></a>  </ul> <ul class = 'left' ><p><a href='service.html'><span>业务领域</span></a></p> <li > <a href='service.html?0'><span>车工汽配</span></a>  <li > <a href='service.html?1'><span>车工快修</span></a>  <li > <a href='service.html?2'><span>车工车府令</span></a>  <li > <a href='service.html?3'><span>车工新能源</span></a>  </ul> <ul class = 'left' ><p><a href='nvestor.html'><span>投资者关系</span></a></p> <li > <a href='nvestor.html?0'><span>定期报告</span></a>  </ul> <ul class = 'left' ><p><a href='add_cg.html'><span>加入车工</span></a></p> <li > <a href='add_cg.html?0'><span>招聘信息</span></a>  <li > <a href='add_cg.html?1'><span>联系我们</span></a>  <li > <a href='add_cg.html?2'><span>在线联系</span></a>  </ul> <ul class = 'left' ><div></div> <p > 服务热线： 4009905840</ul> </div>")
$('.footer').html("<div class='clear_fl'> <ul class = 'left' ><p><a href='know_cg.html'><span>了解车工</span></a></p> <li > <a href='know_cg.html?0'><span>董事长致辞</span></a>  <li > <a href='know_cg.html?1'><span>企业介绍</span></a>  <li > <a href='know_cg.html?2'><span>企业文化</span></a>  <li > <a href='know_cg.html?3'><span>职工风采</span></a>  <li > <a href='know_cg.html?4'><span>车工荣誉</span></a>  </ul> <ul class = 'left' ><p><a href='news.html'><span>新闻资讯</span></a></p> <li > <a href='news.html?0'><span>行业资讯</span></a>  <li > <a href='news.html?1'><span>公司动态</span></a>  <li class='none'> <a href='news.html?2'><span>媒体报道</span></a>  </ul> <ul class = 'left' ><p><a href='service.html'><span>业务领域</span></a></p> <li > <a href='service.html?0'><span>车工汽配</span></a>  <li > <a href='service.html?1'><span>车工快修</span></a>  <li > <a href='service.html?2'><span>车工车府令</span></a>  <li > <a href='service.html?3'><span>车工新能源</span></a>  </ul> <ul class = 'left' ><p><a href='nvestor.html'><span>投资者关系</span></a></p> <li > <a href='nvestor.html?0'><span>定期报告</span></a>  </ul> <ul class = 'left' ><p><a href='add_cg.html'><span>加入车工</span></a></p> <li > <a href='add_cg.html?0'><span>招聘信息</span></a>  <li > <a href='add_cg.html?1'><span>联系我们</span></a>    </ul> <ul class = 'left' ><div></div> <p > 服务热线： 4009905840</ul> </div>")