;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon_rediandianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.8 622.08l-120.32-25.6 28.16 117.76 38.4-40.96 46.08 64 30.72-30.72-64-46.08z" fill="#51BFA4" ></path>' +
    '' +
    '<path d="M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 614.4c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8c-71.68 0-128-56.32-128-128s56.32-128 128-128 128 56.32 128 128c0 7.68-5.12 12.8-12.8 12.8s-12.8-5.12-12.8-12.8c0-56.32-46.08-102.4-102.4-102.4s-102.4 46.08-102.4 102.4 46.08 102.4 102.4 102.4z m248.32 107.52l-35.84 35.84c-10.24 10.24-25.6 7.68-33.28-2.56l-15.36-20.48 2.56-2.56h-5.12l-12.8-17.92-15.36 15.36h-5.12l2.56 2.56-15.36 15.36c-10.24 10.24-20.48 7.68-23.04-7.68l-33.28-151.04c-2.56-12.8 5.12-23.04 20.48-20.48l153.6 30.72c15.36 2.56 17.92 12.8 7.68 23.04l-15.36 15.36-2.56-2.56v5.12l-15.36 15.36 17.92 12.8v5.12l2.56-2.56 20.48 15.36c10.24 10.24 10.24 25.6 0 35.84z m-5.12-197.12c-7.68 0-12.8-5.12-12.8-12.8 0-128-102.4-230.4-230.4-230.4s-230.4 102.4-230.4 230.4 102.4 230.4 230.4 230.4c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8c-140.8 0-256-115.2-256-256s115.2-256 256-256 256 115.2 256 256c0 7.68-5.12 12.8-12.8 12.8z" fill="#51BFA4" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lishihuati" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M942.6688 1020.629333H81.3312c-43.477333 0-78.848-35.677867-78.848-79.5136V82.901333c0-43.8528 35.3792-79.530667 78.848-79.530666h522.845867v6.0416l4.164266-4.386134 411.281067 390.818134-4.155733 4.386133h6.050133v540.885333c0 43.844267-35.3792 79.5136-78.848 79.5136zM81.3312 15.4624c-36.804267 0-66.747733 30.250667-66.747733 67.438933v858.2144c0 37.1712 29.943467 67.413333 66.747733 67.413334h861.3376c36.804267 0 66.747733-30.242133 66.747733-67.413334V406.280533H716.885333c-65.476267 0-118.749867-53.725867-118.749866-119.773866V15.4624H81.3312z m528.904533 8.0384v263.005867c0 59.374933 47.837867 107.682133 106.6496 107.682133h283.4432L610.235733 23.5008z m201.514667 753.271467H216.098133V764.672h595.652267v12.100267z m0-206.3616H216.098133v-12.100267h595.652267v12.100267zM412.8512 361.728H216.8832v-12.091733h195.968v12.091733z" fill="#27B8CC" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 312.888889v611.555555h640V312.888889H128z m284.444444 469.333333V480.597333l218.538667 150.812445L412.444444 782.222222z" fill="#BAD4FF" ></path>' +
    '' +
    '<path d="M903.111111 284.444444H566.115556l169.671111-169.685333a21.333333 21.333333 0 1 0-30.165334-30.165333L520.504889 269.724444 317.624889 88.391111a21.333333 21.333333 0 0 0-28.430222 31.815111L472.945778 284.444444H106.666667A21.333333 21.333333 0 0 0 85.333333 305.777778v611.555555A21.333333 21.333333 0 0 0 106.666667 938.666667h796.444444a21.333333 21.333333 0 0 0 21.333333-21.333334v-611.555555a21.333333 21.333333 0 0 0-21.333333-21.333334zM881.777778 896H128V327.111111h753.777778v568.888889z" fill="#4E8CEE" ></path>' +
    '' +
    '<path d="M405.333333 803.555556A21.333333 21.333333 0 0 1 384 782.222222V480.597333a21.319111 21.319111 0 0 1 33.450667-17.550222l218.552889 150.812445a21.319111 21.319111 0 0 1 0 35.100444L417.450667 799.772444a21.333333 21.333333 0 0 1-12.117334 3.783112zM426.666667 521.244444v220.344889l159.644444-110.165333L426.666667 521.244444z" fill="#4E8CEE" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)