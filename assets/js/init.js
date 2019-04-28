!function(n) {
    "use strict";
    n(window).on("load", function() {
        n("#js-preloader").delay(0).fadeOut(), n("#js-preloader-overlay").delay(200).fadeOut("slow")
    }
    ),
    n.fn.exists=function() {
        return 0<this.length
    }
    ;
    var i=n(".main-nav"),
    e=n(".js-rooms--grid"),
    a=n(".js-main-slider"),
    s=n(".js-room-single-slick"),
    t=n(".js-rooms-related"),
    l=n("#instagram-feed"),
    r=n("#instagram-feed-tagged"),
    o=n(".mp_single-img"),
    m=n(".mp_gallery"),
    p=n(".mp_iframe"),
    y=n(".gm-map"),
    c=n(".js-testimonials-slick"),
    g= {
        initialize:function() {
            this.stickyHeader(),
            this.headerNav(),
            this.isotope(),
            this.slickSlider(),
            this.instagramFeed(),
            this.googleMap(),
            this.magnificPopupInit(),
            this.animateOnScroll(),
            this.miscScripts()
        }
        ,
        stickyHeader:function() {
            var e=n("#header").innerHeight();
            n(".page-heading").css("padding-top", e),
            n("#header").jPinning( {
                offset: 100
            }
            )
        }
        ,
        headerNav:function() {
            if(i.exists()) {
                var a=n(".site-wrapper"),
                e=n(".main-nav__list"),
                s=n(".main-nav__list > li"),
                t=n("#header-mobile__toggle");
                n(".nav-secondary__login").clone().appendTo(e),
                t.on("click", function() {
                    a.toggleClass("site-wrapper--has-overlay"), n(this).toggleClass("burger-menu-icon--active")
                }
                ),
                n(".site-overlay, .main-nav__back").on("click", function() {
                    a.toggleClass("site-wrapper--has-overlay")
                }
                ),
                n(".site-overlay").on("click", function(e) {
                    e.preventDefault(), a.removeClass("site-wrapper--has-overlay-pushy site-wrapper--has-overlay")
                }
                ),
                s.has(".main-nav__sub").addClass("has-children").prepend('<span class="main-nav__toggle"></span>'),
                s.has(".main-nav__megamenu").addClass("has-children").prepend('<span class="main-nav__toggle"></span>'),
                n(".main-nav__toggle").on("click", function() {
                    n(this).toggleClass("main-nav__toggle--rotate").parent().siblings().children().removeClass("main-nav__toggle--rotate"), n(".main-nav__sub, .main-nav__megamenu").not(n(this).siblings(".main-nav__sub, .main-nav__megamenu")).slideUp("normal"), n(this).siblings(".main-nav__sub").slideToggle("normal"), n(this).siblings(".main-nav__megamenu").slideToggle("normal")
                }
                ),
                n(".main-nav__list > li > ul > li").has(".main-nav__sub-2").addClass("has-children").prepend('<span class="main-nav__toggle-2"></span>'),
                n(".main-nav__list > li > ul > li > ul > li").has(".main-nav__sub-3").addClass("has-children").prepend('<span class="main-nav__toggle-2"></span>'),
                n(".main-nav__toggle-2").on("click", function() {
                    n(this).toggleClass("main-nav__toggle--rotate"), n(this).siblings(".main-nav__sub-2").slideToggle("normal"), n(this).siblings(".main-nav__sub-3").slideToggle("normal")
                }
                ),
                n(".js-search-form-control").on("click", function(e) {
                    n("html, body").addClass("search-active"), n(".input-search").focus(), e.preventDefault()
                }
                ),
                n(".js-search-form-close").on("click", function(e) {
                    n("html, body").removeClass("search-active"), e.preventDefault()
                }
                )
            }
        }
        ,
        isotope:function() {
            if(e.exists())var s=e.imagesLoaded(function() {
                var a=n(".js-filter");
                s.isotope( {
                    filter:"*", itemSelector:".room", layoutMode:"fitRows", masonry: {
                        columnWidth: ".room"
                    }
                }
                ), a.on("click", "button", function() {
                    var e=n(this).attr("data-filter");
                    a.find("button").removeClass("btn-primary").addClass("btn-outline-secondary"), n(this).removeClass("btn-outline-secondary").addClass("btn-primary"), s.isotope( {
                        filter: e
                    }
                    )
                }
                )
            }
            )
        }
        ,
        slickSlider:function() {
            a.exists()&&(a.on("init", function(e, a) {
                d(n(".main-slider__item:first-child").find("[data-animation]"))
            }
            ), a.on("beforeChange", function(e, a, s, t) {
                d(n('.main-slider__item[data-slick-index="'+t+'"]').find("[data-animation]"))
            }
            ), a.slick( {
                autoplay: !0, autoplaySpeed: 7e3, arrows: !1, dots: !0, infinite: !0, speed: 600, fade: !0, rows: 0, cssEase: "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
            }
            )),
            s.exists()&&s.slick( {
                autoplay: !0, autoplaySpeed: 7e3, arrows: !1, dots: !0, infinite: !0, speed: 600, fade: !0, rows: 0, cssEase: "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
            }
            ),
            t.exists()&&t.slick( {
                arrows:!0, dots:!1, infinite:!0, slidesToShow:3, slidesToScroll:1, rows:0, responsive:[ {
                    breakpoint:768, settings: {
                        slidesToShow: 2, arrows: !1
                    }
                }
                , {
                    breakpoint:480, settings: {
                        slidesToShow: 1, arrows: !1
                    }
                }
                ]
            }
            ),
            c.exists()&&c.slick( {
                autoplay:!0, autoplaySpeed:7e3, arrows:!0, dots:!1, infinite:!0, speed:600, cssEase:"cubic-bezier(0.455, 0.03, 0.515, 0.955)", slidesToShow:2, slidesToScroll:1, prevArrow:'<span class="slick-arrow-divider"></span><button type="button" class="slick-prev-arrow"><span></span></button>', nextArrow:'<button type="button" class="slick-next-arrow"><span></span></button>', rows:0, responsive:[ {
                    breakpoint:768, settings: {
                        slidesToShow: 1, arrows: !1
                    }
                }
                ]
            }
            )
        }
        ,
        instagramFeed:function() {
            l.exists()&&new Instafeed( {
                get:"user", target:"instagram-feed", userId:"12428272292", accessToken:"6679748018.1677ed0.59c6c4a6b3754eaba2c6585cf999a9fa", limit:6, template:'<li class="widget-instagram__item"><a href="{{link}}" id="{{id}}" class="widget-instagram__link-wrapper" target="_blank"><span class="widget-instagram__plus-sign"><img src="{{image}}" alt="" class="widget-instagram__img" /></span></a></li>'
            }
            ).run();
            r.exists()&&new Instafeed( {
                get:"user", target:"instagram-feed-tagged", userId:"12428272292", accessToken:"6679748018.1677ed0.59c6c4a6b3754eaba2c6585cf999a9fa", limit:8, template:'<li class="widget-instagram__item" data-aos="zoom-in" data-aos-duration="600"><a href="{{link}}" id="{{id}}" class="widget-instagram__link-wrapper" target="_blank"><span class="widget-instagram__plus-sign"><img src="{{image}}" alt="" class="widget-instagram__img" /><span class="widget-instagram__item-meta"><span class="widget-instagram__item-meta-likes"><i class="ion-heart"></i> {{likes}}</span><span class="widget-instagram__item-meta-comments"><i class="ion-chatbubble"></i> {{comments}}</span></span></span></a></li>', resolution: "low_resolution"
            }
            ).run()
        }
        ,
        googleMap:function() {
            y.exists()&&y.each(function() {
                var e=n(this), a=e.attr("data-map-address")?e.attr("data-map-address"): "New York, USA", s=e.attr("data-map-zoom")?e.attr("data-map-zoom"): "15", t=e.attr("data-map-icon")?e.attr("data-map-icon"): "", i=e.attr("data-map-style"), l="";
                l="default"===i?[ {
                    featureType:"administrative.country", elementType:"geometry", stylers:[ {
                        visibility: "simplified"
                    }
                    , {
                        hue: "#ff0000"
                    }
                    ]
                }
                ]:"light-dream"===i?[ {
                    featureType:"landscape", stylers:[ {
                        hue: "#FFBB00"
                    }
                    , {
                        saturation: 43.400000000000006
                    }
                    , {
                        lightness: 37.599999999999994
                    }
                    , {
                        gamma: 1
                    }
                    ]
                }
                , {
                    featureType:"road.highway", stylers:[ {
                        hue: "#FFC200"
                    }
                    , {
                        saturation: -61.8
                    }
                    , {
                        lightness: 45.599999999999994
                    }
                    , {
                        gamma: 1
                    }
                    ]
                }
                , {
                    featureType:"road.arterial", stylers:[ {
                        hue: "#FF0300"
                    }
                    , {
                        saturation: -100
                    }
                    , {
                        lightness: 51.19999999999999
                    }
                    , {
                        gamma: 1
                    }
                    ]
                }
                , {
                    featureType:"road.local", stylers:[ {
                        hue: "#FF0300"
                    }
                    , {
                        saturation: -100
                    }
                    , {
                        lightness: 52
                    }
                    , {
                        gamma: 1
                    }
                    ]
                }
                , {
                    featureType:"water", stylers:[ {
                        hue: "#0078FF"
                    }
                    , {
                        saturation: -13.200000000000003
                    }
                    , {
                        lightness: 2.4000000000000057
                    }
                    , {
                        gamma: 1
                    }
                    ]
                }
                , {
                    featureType:"poi", stylers:[ {
                        hue: "#00FF6A"
                    }
                    , {
                        saturation: -1.0989010989011234
                    }
                    , {
                        lightness: 11.200000000000017
                    }
                    , {
                        gamma: 1
                    }
                    ]
                }
                ]:"shades-of-grey"===i?[ {
                    featureType:"all", elementType:"labels.text.fill", stylers:[ {
                        saturation: 36
                    }
                    , {
                        color: "#000000"
                    }
                    , {
                        lightness: 40
                    }
                    ]
                }
                , {
                    featureType:"all", elementType:"labels.text.stroke", stylers:[ {
                        visibility: "on"
                    }
                    , {
                        color: "#000000"
                    }
                    , {
                        lightness: 16
                    }
                    ]
                }
                , {
                    featureType:"all", elementType:"labels.icon", stylers:[ {
                        visibility: "off"
                    }
                    ]
                }
                , {
                    featureType:"administrative", elementType:"geometry.fill", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 20
                    }
                    ]
                }
                , {
                    featureType:"administrative", elementType:"geometry.stroke", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 17
                    }
                    , {
                        weight: 1.2
                    }
                    ]
                }
                , {
                    featureType:"landscape", elementType:"geometry", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 20
                    }
                    ]
                }
                , {
                    featureType:"poi", elementType:"geometry", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 21
                    }
                    ]
                }
                , {
                    featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 17
                    }
                    ]
                }
                , {
                    featureType:"road.highway", elementType:"geometry.stroke", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 29
                    }
                    , {
                        weight: .2
                    }
                    ]
                }
                , {
                    featureType:"road.arterial", elementType:"geometry", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 18
                    }
                    ]
                }
                , {
                    featureType:"road.local", elementType:"geometry", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 16
                    }
                    ]
                }
                , {
                    featureType:"transit", elementType:"geometry", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 19
                    }
                    ]
                }
                , {
                    featureType:"water", elementType:"geometry", stylers:[ {
                        color: "#000000"
                    }
                    , {
                        lightness: 17
                    }
                    ]
                }
                ]:"blue-water"===i?[ {
                    featureType:"administrative", elementType:"labels.text.fill", stylers:[ {
                        color: "#444444"
                    }
                    ]
                }
                , {
                    featureType:"landscape", elementType:"all", stylers:[ {
                        color: "#f2f2f2"
                    }
                    ]
                }
                , {
                    featureType:"poi", elementType:"all", stylers:[ {
                        visibility: "off"
                    }
                    ]
                }
                , {
                    featureType:"road", elementType:"all", stylers:[ {
                        saturation: -100
                    }
                    , {
                        lightness: 45
                    }
                    ]
                }
                , {
                    featureType:"road.highway", elementType:"all", stylers:[ {
                        visibility: "simplified"
                    }
                    ]
                }
                , {
                    featureType:"road.arterial", elementType:"labels.icon", stylers:[ {
                        visibility: "off"
                    }
                    ]
                }
                , {
                    featureType:"transit", elementType:"all", stylers:[ {
                        visibility: "off"
                    }
                    ]
                }
                , {
                    featureType:"water", elementType:"all", stylers:[ {
                        color: "#46bcec"
                    }
                    , {
                        visibility: "on"
                    }
                    ]
                }
                ]:[ {
                    featureType:"water", elementType:"geometry", stylers:[ {
                        color: "#e9e9e9"
                    }
                    , {
                        lightness: 17
                    }
                    ]
                }
                , {
                    featureType:"landscape", elementType:"geometry", stylers:[ {
                        color: "#f5f5f5"
                    }
                    , {
                        lightness: 20
                    }
                    ]
                }
                , {
                    featureType:"road.highway", elementType:"geometry.fill", stylers:[ {
                        color: "#ffffff"
                    }
                    , {
                        lightness: 17
                    }
                    ]
                }
                , {
                    featureType:"road.highway", elementType:"geometry.stroke", stylers:[ {
                        color: "#ffffff"
                    }
                    , {
                        lightness: 29
                    }
                    , {
                        weight: .2
                    }
                    ]
                }
                , {
                    featureType:"road.arterial", elementType:"geometry", stylers:[ {
                        color: "#ffffff"
                    }
                    , {
                        lightness: 18
                    }
                    ]
                }
                , {
                    featureType:"road.local", elementType:"geometry", stylers:[ {
                        color: "#ffffff"
                    }
                    , {
                        lightness: 16
                    }
                    ]
                }
                , {
                    featureType:"poi", elementType:"geometry", stylers:[ {
                        color: "#f5f5f5"
                    }
                    , {
                        lightness: 21
                    }
                    ]
                }
                , {
                    featureType:"poi.park", elementType:"geometry", stylers:[ {
                        color: "#dedede"
                    }
                    , {
                        lightness: 21
                    }
                    ]
                }
                , {
                    elementType:"labels.text.stroke", stylers:[ {
                        visibility: "on"
                    }
                    , {
                        color: "#ffffff"
                    }
                    , {
                        lightness: 16
                    }
                    ]
                }
                , {
                    elementType:"labels.text.fill", stylers:[ {
                        saturation: 36
                    }
                    , {
                        color: "#333333"
                    }
                    , {
                        lightness: 40
                    }
                    ]
                }
                , {
                    elementType:"labels.icon", stylers:[ {
                        visibility: "off"
                    }
                    ]
                }
                , {
                    featureType:"transit", elementType:"geometry", stylers:[ {
                        color: "#f2f2f2"
                    }
                    , {
                        lightness: 19
                    }
                    ]
                }
                , {
                    featureType:"administrative", elementType:"geometry.fill", stylers:[ {
                        color: "#fefefe"
                    }
                    , {
                        lightness: 20
                    }
                    ]
                }
                , {
                    featureType:"administrative", elementType:"geometry.stroke", stylers:[ {
                        color: "#fefefe"
                    }
                    , {
                        lightness: 17
                    }
                    , {
                        weight: 1.2
                    }
                    ]
                }
                ], e.gmap3( {
                    zoom: Number(s), mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: !1, address: a, styles: l
                }
                ).marker( {
                    address: a, icon: t
                }
                )
            }
            )
        }
        ,
        magnificPopupInit:function() {
            o.exists()&&n(".mp_single-img").magnificPopup( {
                type:"image", removalDelay:300, gallery: {
                    enabled: !1
                }
                , mainClass:"mfp-fade", autoFocusLast:!1
            }
            ),
            m.exists()&&n(".mp_gallery").magnificPopup( {
                type:"image", removalDelay:300, gallery: {
                    enabled: !0
                }
                , mainClass:"mfp-fade", autoFocusLast:!1
            }
            ),
            p.exists()&&n(".mp_iframe").magnificPopup( {
                type:"iframe", removalDelay:300, mainClass:"mfp-fade", autoFocusLast:!1, patterns: {
                    youtube: {
                        index: "youtube.com/", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"
                    }
                    , vimeo: {
                        index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"
                    }
                    , gmaps: {
                        index: "//maps.google.", src: "%id%&output=embed"
                    }
                }
                , srcAction:"iframe_src"
            }
            )
        }
        ,
        animateOnScroll:function() {
            AOS.init()
        }
        ,
        miscScripts:function() {}
    }
    ;
    function d(e) {
        e.each(function() {
            var e=n(this), a=e.data("delay"), s="animated "+e.data("animation");
            e.css( {
                "animation-delay": a, "-webkit-animation-delay": a
            }
            ), e.addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                e.removeClass(s)
            }
            )
        }
        )
    }
    n(document).on("ready", function() {
        g.initialize()
    }
    )
}

(jQuery);