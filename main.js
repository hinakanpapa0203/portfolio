$(function(){
    //ウィンドウ高さ700pxから処理開始
    // 変数にクラスを入れる
    var btn = $('.top_btn');
    //スクロールしてページトップから700pxに達したらボタンを表示
    $(window).on('load scroll', function(){
        if($(this).scrollTop() > 700) {
            btn.addClass('jump');
        }else{
            btn.removeClass('jump');
        }
    });
    //スクロールしてトップへ戻る
    btn.on('click',function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });
    
    //nav画面表示
    $('.hamburger').click(function () {
        $('.hamburger, .nav_menu').
        toggleClass('active');
    });

    //ハンバーガーメニュー内,リンクへ移動
    //リンク先をクリックでハンバーガーメニューを閉じ、リンク先へスクロール
    $('#nav a').on('click', function() {
        $('.hamburger, .nav_menu').removeClass('active');
    });
    $('a[href^="#"]').click(function(){
        var speed = 500;
        //var speed = 500;でスクロールの速さ調整
        var href= $(this).attr("href");
        //var href= $(this).attr(“href”); でリンク先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        //空白or#のみだったらリンク先を「html」に設定
        var position = target.offset().top;
        //リンク先の座標を取得する
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;//スムーズスクロールを実行
    });

    // ウインドウをスクロールしたら、skills画面ふわっと表示。
	$(window).scroll(function (){
        // .js_fadeのクラスを持つ要素（それぞれに対して）
		$('.js_fade').each(function(){
            // この要素のスクロール位置（上から）
			var pos = $(this).offset().top;
            // ウインドウのスクロール量（上から）
			var scroll = $(window).scrollTop();
            // ウインドウの縦幅
			var windowHeight = $(window).height();
            // ウインドウのスクロール量（上から）が
            // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
			if (scroll > pos - windowHeight + 100){
                // .scrollというクラス.js_fadeに付与する
				$(this).addClass('scroll');
			}
		});
	});
    
});
