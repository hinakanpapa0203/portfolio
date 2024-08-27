$(function(){
    const pageTop = $(".top_btn");
    pageTop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
    $("body,html").animate(
        {
            scrollTop: 0,
        },
            500
    );
    return false;
    });
    // フッター手前でストップ
    $(".top_btn").hide();
    $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("#footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
        // ページトップボタンがフッター手前に来たら,
        //.btn.shop_btnのpositionをfixedからabsoluteに変更
        $(".btn, .shop_button").css({
            position: "absolute",
            bottom: footHeight,
        });
    } else {
        $(".btn, .shop_button").css({
            position: "fixed",
            bottom: "0",
        });
    }
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
});