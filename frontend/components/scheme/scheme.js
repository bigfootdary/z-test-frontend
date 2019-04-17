console.log('scheme');

$('.rect-group').each((i, group) => {
    let btn = $(group).find('.rect-btn');
    let line = $(group).find('.sub-rect');

    btn.mouseenter(function(){
        line.hide();
        $(group).css({
            transform: 'scale(1.2)'
        })
    });
    btn.mouseleave(function(){
        line.show();
        $(group).css({
            transform: 'scale(1)'
        })
    });
});