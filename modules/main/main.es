require('lib/zepto');

const WINDOW = $(window);

var renewStyle = function(){
	let [Height, background, wgtContainer] = [WINDOW.height(), $('#background'), $('#wgt-personal-desc .container')];
	let personalDescHeight = wgtContainer.height();

	background.css({
		height: Height
	})
	// 防止图片显示时，尺寸调整造成的抖动
	.addClass('show');

	wgtContainer.css({
		'margin-top': (Height - personalDescHeight) / 2
	});
};

var toggleDesc = function(domId){
	let wgtPersonalDesc = $('#wgt-personal-desc');

	$(domId).on('click', function(){
		wgtPersonalDesc.toggleClass('show');
		renewStyle();
	});
}

var eventHandler = function(){
	toggleDesc('#btn-menu');
	toggleDesc('#wgt-personal-desc');
}

$(function(){
	renewStyle();
	eventHandler();
});

WINDOW.on('resize', function(){
	renewStyle();
});