$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 2000);
return false;
});
});

(function($) {
    var list_len = $('ul.slider li').length,
        cur = 0;


    for (var i = 0, ii = list_len; i < ii; i++) {
        $('#home .dots').append('<div class="dot" />');
    }
    $($('#home .dots .dot')[0]).addClass('current-dot');

    $('.arrow-right').click(function(e) {
        e.preventDefault();
        cur = cur < list_len - 1 ? ++cur : 0;
        change(cur);
    });

    $('.arrow-left').click(function(e) {
        e.preventDefault();
        cur = cur > 0 ? --cur : list_len - 1;
        change(cur);
    });

    function change(cur) {
        var cur_el = $($('ul.slider li')[cur]),
            old_el = $($('ul.slider li')[cur - 1]),
            new_bg = cur_el.data('url'),
            new_cont = cur_el.html(),
            changedEl = $('#home');

        $($('ul.slider li')).each(function() {
            $(this).removeClass('visible');
        });
        $($('#home .dots .dot')).each(function() {
            $(this).removeClass('current-dot');
        });
        cur_el.addClass('visible');
        $($('#home .dots .dot')[cur]).addClass('current-dot');
        changedEl.css({
            'background-image': 'url(' + new_bg + ')'
        });
    };
})(jQuery);