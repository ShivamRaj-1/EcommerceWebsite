var bar = document.getElementById("Mnavbar")
var nav = document.getElementById("navbar")
var close = document.getElementById("close")

bar.addEventListener('click', function () {
	nav.style.right = "0px"
})

close.addEventListener("click", function(){
	nav.style.right = "-350px"
})


// --------product descriptoin page---------

var MainImg= document.getElementById('MainImg');
var SmallImg = document.getElementsByClassName('small-img')

SmallImg[0].onclick = function () {
	MainImg.src = SmallImg[0].src
}
SmallImg[1].onclick = function () {
	MainImg.src = SmallImg[1].src
}
SmallImg[2].onclick = function () {
	MainImg.src = SmallImg[2].src
}
SmallImg[3].onclick = function () {
	MainImg.src = SmallImg[3].src
}



