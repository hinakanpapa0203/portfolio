// productsスクロール処理
$(function() {
    $('.item_slider').each(function(i){
		$(this).addClass('data-id' + i);
		$(this).find('.main_slider').slick({
			accessibility: true,                    //（タブまたは矢印でスライド切り替えができる)
            swipe: true,                            //（スワイプできる）
            arrows: true,                           //（矢印表示）
            dots: true,                             //（dot表示）
			asNavFor: '.data-id'+i+' .text_slider', //（テキストスライダーを追従させる)
		});
		$(this).find('.text_slider').slick({
			draggable:false,         //追加（ドラッグでのスライド禁止）
            arrows:false,            //追加（矢印非表示）
		});
	});
});