$(document).ready(function() {
    var weapons = [
        {   "name": "44_pistol",
            "damage": 48,
            "fire_rate":6,
            "range": 119,
            "accuracy":66,
            "weight": 4.2,
            "value": 99,
            "img": "guns/44.png"
        },
        {   "name": "10mm_pistol",
            "damage": 18,
            "fire_rate":46,
            "range": 119,
            "accuracy":61,
            "weight": 4.2,
            "value": 53,
            "img": "guns/10mm.png"
        },
        {   "name": "assaunt_rifle",
            "damage": 30,
            "fire_rate": 40,
            "range": 119,
            "accuracy": 72, 
            "weight": 13.1,
            "value": 144,
            "img": "guns/assault.png"
        }  
    ]

    var specials = [
        {   "name": "strength",
            "img": "specials/strength.gif",
            "description": "Strength is a measure of your raw physical power. It affects how much you can carry, and determines the effectiveness of all melee attacks."
        },

        {   "name": "perception",
            "img": "specials/perception.gif",
            "description": "Perception is your environmental awareness and \"sixth sense,\" and affects weapon accuracy in V.A.T.S."
        },

        {   "name": "endurance",
            "img": "specials/endurance.gif",
            "description": "Endurance is the measure of overall physical fitness. It affects your total health and the action point drain from sprinting."
        },
        {   "name": "charisma",
            "img": "specials/charisma.gif",
            "description": "Charisma is your ability to charm and convince others. It affects your success to persuade others in dialogue and prices when you barter."
        },
        {   "name": "intelligence",
            "img": "specials/intelligence.gif",
            "description": "Intelligence is the measure of your overall mental acuity, and affects the number of experience points earned."
        },
        {   "name": "agility",
            "img": "specials/agility.gif",
            "description": "Agility is a measure of your overall finesse and reflexes. It affects the number of Action Points in V.A.T.S. and your ability to sneak."
        },
        {   "name": "luck",
            "img": "specials/luck.gif",
            "description": "Luck is a measure of your general good fortune, and affects the recharge rates of critical hits."
        }  
    ]

    var perks = [
        {   "name": "mister_sandman",
            "img": "perks/mister_sandman.png",
            "description": "As an agent of death, you can instantly kill a sleeping person. Your silenced weapons do an additional 15% sneak attack damage."
        },

        {   "name": "aquaboy",
            "img": "perks/aquaboy.png",
            "description": "Water is your ally. You no longer take radiation damage from swimming, and can breathe underwater."
        },

        {   "name": "hacker",
            "img": "perks/hacker.png",
            "description": "Knowledge of cutting-edge computer encryption allows you to hack Advanced terminals."
        }

    ]

    var junks = [
        {   "name": "asbestos",
            "value": 6,
            "weight": 0.1
        },

        {   "name": "bone",
            "value": 1,
            "weight": 1
        }
    ]

    var ammos = [
        {   "name": "10mm",
            "value": 2,
            "weight": 0.025
        },

        {   "name": "44mm",
            "value": 3,
            "weight": 0.056
        }
    ]


    $('.item-list a').on('click', function(e) {
        $('.item-list a').removeClass('active_gun');
        // $('.item-list a').removeClass('click');
        $(e.currentTarget).addClass('active_gun')
        // $(e.currentTarget).addClass('click')
    })

    $('.item-list a').on('mouseenter', function(e) {
        if ($(e.currentTarget).hasClass("active_gun")) {
            var current_item = $(e.currentTarget).removeClass('active_gun').attr('class');
            $(e.currentTarget).addClass('active_gun')
        } else {
            var current_item = $(e.currentTarget).attr('class');
        }

        console.log(current_item)

        for (item in weapons) {
            if (weapons[item].name == current_item) {

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.range').html(weapons[item].range);
                container.find('.weight').html(weapons[item].weight);
                container.find('.weapons-img').attr("src",weapons[item].img);
            }
        }
    })

    $('.item-list a').on('mouseleave', function(e) {
        var current_item = $(document.getElementsByClassName('active_gun')[0]).removeClass("active_gun").attr('class')
        console.log(current_item)

        for (item in weapons) {
            if (weapons[item].name == current_item) {

                var container = $('.item-stats');
                container.find('.damage').html(weapons[item].damage);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.range').html(weapons[item].range);
                container.find('.weight').html(weapons[item].weight);
                container.find('.weapons-img').attr("src",weapons[item].img);
            }
        }
        $(document.getElementsByClassName(current_item)[0]).addClass('active_gun');
    })



    $('.special-list a').on('mouseenter', function(e) {
        if ($(e.currentTarget).hasClass("active")) {
            var current_special = $(e.currentTarget).removeClass('active').attr('class');
            $(e.currentTarget).addClass('active')
        } else {
            var current_special = $(e.currentTarget).attr('class');
        }
        console.log(current_special)

        for (special in specials) {
            if (specials[special].name == current_special) {
                console.log(specials[special])

                var container = $('.special-stats');
                container.find('.special-desc').html(specials[special].description);
                container.find('.special-img').attr("src",specials[special].img);
            }
        }
    })


    $('.perk-list a').on('mouseenter', function(e) {
        if ($(e.currentTarget).hasClass("active")) {
            var current_perk = $(e.currentTarget).removeClass('active').attr('class');
            $(e.currentTarget).addClass('active')
        } else {
            var current_perk = $(e.currentTarget).attr('class');
        }
        console.log(current_perk)

        for (perk in perks) {
            if (perks[perk].name == current_perk) {
                console.log(specials[perk])

                var container = $('.perk-stats');
                container.find('.perk-desc').html(perks[perk].description);
                container.find('.perk-img').attr("src",perks[perk].img);
            }
        }
    })

    $('.junk-list a').on('mouseenter', function(e) {
        if ($(e.currentTarget).hasClass("active")) {
            var current_item = $(e.currentTarget).removeClass('active').attr('class');
            $(e.currentTarget).addClass('active')
        } else {
            var current_item = $(e.currentTarget).attr('class');
        }

        for (item in junks) {
            if (junks[item].name == current_item) {
                console.log(junks[item])

                var container = $('.junk-stats');
                container.find('.value').html(junks[item].value);
                container.find('.weight').html(junks[item].weight);
            }
        }
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

    $('#playBtn').on('click', function (e) {
       
        if ($(e.currentTarget).hasClass('active')) {
            $('audio')[0].pause();
            $(e.currentTarget).removeClass('active');

        } else {
            $('audio')[0].play();
            $(e.currentTarget).addClass('active');

        }
        
      });
      $('#stopBtn').on('click', function () {
        $('audio')[0].pause();
      });
      $('#repBtn').on('click', function () {
        $('audio')[0].currentTime = 0;
        $('audio')[0].play();
      });

})