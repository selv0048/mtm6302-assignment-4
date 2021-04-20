const $menu = document.getElementById('menu')
const $navigation = document.getElementById('navigation')
const $boxfour = document.querySelectorAll('.boxfour')
const $infoBox = document.querySelectorAll('.box')
const $box4hyperlink = document.getElementById('box4hyperlink')

$box4hyperlink.addEventListener('click', function(){
	$boxfour.forEach(function(box){box.classList.remove('active')})
})
$menu.addEventListener('click', burgerMenu)

function burgerMenu() {
	$navigation.classList.toggle('active')
}


let observer = new IntersectionObserver(function(entries){
	entries.forEach(function(entry){
		if(entry.intersectionRatio > 0){
			if(entry.target.classList.contains('title')){
				if(entry.target.classList.contains('boxfour')){}
			}
		} else if(entry.target.classList.contains('title')){
			if(entry.target.classList.contains('boxfour')){
				$boxfour.forEach(function(box) {box.classList.remove('active')})
			}
		}
	})
})

$infoBox.forEach( function(box){
	observer.observe(box)
})

/*
https://css-tricks.com/almanac/properties/a/animation/
https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section2
https://usefulangle.com/post/118/javascript-intersection-observer
https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation5
https://alligator.io/js/intersection-observer/
https://css-tricks.com/three-line-menu-navicon/
https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
https://engineering.videoblocks.com/using-intersection-observer-api-to-help-measure-search-success-3f999d7c26d5
*/


