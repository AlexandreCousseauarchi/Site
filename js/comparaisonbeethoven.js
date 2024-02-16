class imageReveal
  constructor: (@el) ->
    @overSlide = @el.find '.js-over-slide'
    @overImage = @el.find '.js-over-image'
    @divider = @el.find '.js-divider'

    # bind those thangs
    console.log @el
    @_bindEvents()
    @resetReveal()

    
  _bindEvents: =>
    @el.on 'mouseenter', @startReveal
    @el.on 'mouseleave', @resetReveal

    
  startReveal: =>
    console.log 'start reveal'
    @el.on 'mousemove', @calculateSplit
    
    
    
  resetReveal: =>
    console.log 'reset'
    @el.off 'mousemove', @calculateSplit
    elMiddle = @el.width() / 2
    @moveSplit(elMiddle)
    
    
  calculateSplit: (e) =>
    elOffset = @el.offset().left
    #console.log elOffset
    #console.log e
    @moveSplit( e.pageX - elOffset )
    
    
  moveSplit: (offset) =>
    if offset < 0 then offset = 0
    
    console.log offset
    @overSlide.css 'transform', 'translateX(' + offset + 'px)'
    @overImage.css 'transform', 'translateX(-' + offset + 'px)'
    @divider.css 'transform', 'translateX(' + offset + 'px)'


#export the goods
window.imageReveal = imageReveal


$ ->
  new imageReveal($('.js-image-reveal'))
