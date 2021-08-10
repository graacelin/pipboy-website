$('.ammo-list a').on('click', function(e) {
    $('.ammo-list a').removeClass('active');
    $(e.currentTarget).addClass('active')
})

$('.ammo-list a').on('mouseenter', function(e) {
    if ($(e.currentTarget).hasClass("active")) {
        var current_item = $(e.currentTarget).removeClass('active').attr('class');
        $(e.currentTarget).addClass('active')
    } else {
        var current_item = $(e.currentTarget).attr('class');
    }

    for (item in ammos) {
        if (ammos[item].name == current_item) {
            console.log(ammos[item])

            var container = $('.ammo-stats');
            container.find('.value').html(ammos[item].value);
            container.find('.weight').html(ammos[item].weight);
        }
    }
})