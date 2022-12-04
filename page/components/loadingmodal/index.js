!function(s,i,c,t){"use strict";function e(c,t){var e=this;return this.element=c,this.animations={doubleBounce:{html:'<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>'},rotatingPlane:{html:'<div class="sk-rotating-plane"></div>',setBackground:function(i){e.animationBox.find("*").each(function(c,t){s(t).css("background-color")&&"rgba(0, 0, 0, 0)"!=s(t).css("background-color")&&s(t).css("background-color",i)})}},wave:{html:'<div class="sk-wave"> <div class="sk-rect sk-rect1"></div> <div class="sk-rect sk-rect2"></div> <div class="sk-rect sk-rect3"></div> <div class="sk-rect sk-rect4"></div> <div class="sk-rect sk-rect5"></div> </div>'},wanderingCubes:{html:'<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>'},spinner:{html:'<div class="sk-spinner sk-spinner-pulse"></div>'},chasingDots:{html:'<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>'},threeBounce:{html:'<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>'},circle:{html:'<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>',setBackground:function(c){e.animationBox.children().find("*").each(function(t,e){"rgba(0, 0, 0, 0)"!==i.getComputedStyle(e,":before").getPropertyValue("background-color")&&s("body").append(s("<style data-custom-style>."+s(e).attr("class").split(" ")[0]+":before {background-color: "+c+" !important;}</style>"))})}},cubeGrid:{html:'<div class="sk-cube-grid"> <div class="sk-cube sk-cube1"></div> <div class="sk-cube sk-cube2"></div> <div class="sk-cube sk-cube3"></div> <div class="sk-cube sk-cube4"></div> <div class="sk-cube sk-cube5"></div> <div class="sk-cube sk-cube6"></div> <div class="sk-cube sk-cube7"></div> <div class="sk-cube sk-cube8"></div> <div class="sk-cube sk-cube9"></div> </div>'},fadingCircle:{html:'<div class="sk-fading-circle"> <div class="sk-circle1 sk-circle"></div> <div class="sk-circle2 sk-circle"></div> <div class="sk-circle3 sk-circle"></div> <div class="sk-circle4 sk-circle"></div> <div class="sk-circle5 sk-circle"></div> <div class="sk-circle6 sk-circle"></div> <div class="sk-circle7 sk-circle"></div> <div class="sk-circle8 sk-circle"></div> <div class="sk-circle9 sk-circle"></div> <div class="sk-circle10 sk-circle"></div> <div class="sk-circle11 sk-circle"></div> <div class="sk-circle12 sk-circle"></div> </div>',setBackground:function(c){e.animationBox.children().find("*").each(function(t,e){"rgba(0, 0, 0, 0)"!==i.getComputedStyle(e,":before").getPropertyValue("background-color")&&s("body").append(s("<style data-custom-style>."+s(e).attr("class").split(" ")[0]+":before {background-color: "+c+" !important;}</style>"))})}},foldingCube:{html:'<div class="sk-folding-cube"> <div class="sk-cube1 sk-cube"></div> <div class="sk-cube2 sk-cube"></div> <div class="sk-cube4 sk-cube"></div> <div class="sk-cube3 sk-cube"></div> </div>',setBackground:function(c){e.animationBox.find("*").each(function(t,e){"rgba(0, 0, 0, 0)"!==i.getComputedStyle(e,":before").getPropertyValue("background-color")&&s("body").append(s("<style data-custom-style>."+s(e).attr("class").split(" ")[0]+":before {background-color: "+c+" !important;}</style>"))})}}},this.settings=s.extend({},l,t),this.modal=null,this.modalText=null,this.animationBox=null,this.modalBg=null,this.currenAnimation=null,this.init(),this}var d="loadingModal",l={position:"auto",text:"",color:"#fff",opacity:"0.7",backgroundColor:"rgb(0,0,0)",animation:"doubleBounce"};s.extend(e.prototype,{init:function(){var i=s('<div class="jquery-loading-modal jquery-loading-modal--visible"></div>'),c=s('<div class="jquery-loading-modal__bg"></div>').css({background: this.settings.backgroundColor}),t=s('<div class="jquery-loading-modal__animation"></div>'),e=s('<div class="jquery-loading-modal__info-box"></div>'),d=s('<div class="jquery-loading-modal__text"></div>');""!==this.settings.text?d.html(this.settings.text):d.hide(),this.currenAnimation=this.animations[this.settings.animation],t.append(this.currenAnimation.html),e.append(t).append(d),i.append(c),i.append(e),"auto"===this.settings.position&&"body"!==this.element.tagName.toLowerCase()?(i.css("position","absolute"),s(this.element).css("position","relative")):"auto"!==this.settings.position&&s(this.element).css("position",this.settings.position),s(this.element).append(i),this.modalBg=c,this.modal=i,this.modalText=d,this.animationBox=t,this.color(this.settings.color),this.backgroundColor(this.settings.backgroundColor),this.opacity(this.settings.opacity)},hide:function(){var s=this.modal;s.removeClass("jquery-loading-modal--visible").addClass("jquery-loading-modal--hidden"),s.css({'opacity':'0'})},backgroundColor:function(s){this.modalBg.css({"background-color":s})},color:function(c){s("[data-custom-style]").remove(),this.modalText.css("color",c),this.currenAnimation.setBackground?this.currenAnimation.setBackground(c):this.animationBox.children().find("*").each(function(t,e){s(e).css("background-color")&&"rgba(0, 0, 0, 0)"!=s(e).css("background-color")&&s(e).css("background-color",c),"rgba(0, 0, 0, 0)"!==i.getComputedStyle(e,":before").getPropertyValue("background-color")&&s("body").append(s("<style data-custom-style>."+s(e).attr("class").split(" ")[0]+":before {background-color: "+c+" !important;}</style>"))})},opacity:function(s){this.modalBg.css({opacity:s})},show:function(){this.modal.show().removeClass("jquery-loading-modal--hidden").addClass("jquery-loading-modal--visible").css({'opacity':this.settings.opacity})},animation:function(s){this.animationBox.html(""),this.currenAnimation=this.animations[s],this.animationBox.append(this.currenAnimation.html)},destroy:function(){s("[data-custom-style]").remove(),this.modal.remove()},text:function(s){this.modalText.html(s)}}),s.fn[d]=function(i){var c=arguments;if(i===t||"object"==typeof i)return this.each(function(){s.data(this,"plugin_"+d)||s.data(this,"plugin_"+d,new e(this,i))});if("string"==typeof i&&"_"!==i[0]&&"init"!==i){var l;return this.each(function(){var t=s.data(this,"plugin_"+d);t instanceof e&&"function"==typeof t[i]&&(l=t[i].apply(t,Array.prototype.slice.call(c,1))),"destroy"===i&&s.data(this,"plugin_"+d,null)}),l!==t?l:this}}}(jQuery,window,document);
