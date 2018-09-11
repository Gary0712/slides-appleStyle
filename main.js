let $button = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

$slides.css({transform:'translateX(-920px)'})

$('#buttonWrapper').on('click','button',function(e){
    let $button = $(e.crrentTarget)
    let index = $button.index()
    console.log(index)
})

function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}
var index = 0
$slides.css({transform:`translateX(${- (index+1) * 920}px)`})