/**
 * Created by Sallar Kaboli <sallar.kaboli@gmail.com>
 * @sallar
 * 
 * Released under the MIT License.
 * http://sallar.mit-license.org/
 * 
 * This document demonstrates three things:
 * 
 * - Creating a simple parallax effect on the content
 * - Creating a Medium.com-style blur on scroll image
 * - Getting scroll position using requestAnimationFrame for better performance
 */


var dict = [
  "강민희",
  "구정모",
  "금동현",
  "김민규",
  "김요한",
  "김우석",
  "남도현",
  "손동표",
  "송유빈",
  "송형준",
  "이세진",
  "이은상",
  "이진혁",
  "이한결",
  "조승연",
  "차준호",
  "토니",
  "한승우",
  "함원진",
  "황윤성"
]

$( document ).ready(function() {

/**
 * Cache
 */
var $content = $('#intro img'),
    $blur    = $('#intro .overlay'),
    $next    = $('#rank'),
    wHeight  = $(window).height();

$(window).on('resize', function(){
  wHeight = $(window).height();
});

/**
 * requestAnimationFrame Shim 
 */
window.requestAnimFrame = (function()
{
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ) {
            window.setTimeout(callback, 1000 / 60);
          };
})();

/**
 * Scroller
 */
function Scroller()
{
  this.latestKnownScrollY = 0;
  this.ticking            = false;
}

Scroller.prototype = {
  /**
   * Initialize
   */
  init: function() {
    window.addEventListener('scroll', this.onScroll.bind(this), false);
  },

  /**
   * Capture Scroll
   */
  onScroll: function() {
    this.latestKnownScrollY = window.scrollY;
    this.requestTick();
  },

  /**
   * Request a Tick
   */
  requestTick: function() {
    if( !this.ticking ) {
      window.requestAnimFrame(this.update.bind(this));
    }
    this.ticking = true;
  },

  /**
   * Update.
   */
  update: function() {
    var currentScrollY = this.latestKnownScrollY;
    this.ticking       = false;
    
    /**
     * Do The Dirty Work Here
     */
    var slowScroll = currentScrollY
      , blurScroll = currentScrollY * 2;
    
    $content.css({
      'transform'         : 'translateY(-' + slowScroll + 'px)',
      '-moz-transform'    : 'translateY(-' + slowScroll + 'px)',
      '-webkit-transform' : 'translateY(-' + slowScroll + 'px)'
    });
    
    $blur.css({
      'opacity' : blurScroll / wHeight
    });

    $next.css({
      'opacity' : blurScroll / wHeight
    })
  }
};

/**
 * Attach!
 */
  var scroller = new Scroller();  
  scroller.init();
});
