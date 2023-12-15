// function $(id){
//     let obj = document.getElementById(id);

//     obj.text = function (text){
//         obj.innerText = text;
//         return obj;
//     }

//     obj.html = function (html){
//         obj.innerHTML = html;
//         return obj;
//     }

//     obj.css = function(css, value){
//         obj.style[css] = value; 
//         return obj;
//     }

//     return obj;
// }

// //商品數量
// function initcount(){
// 	//減
// 	$("btnMinus0").onclick = function(e) {
// 		let qtyObj = e.target.nextElementSibling;
// 		let qty = parseInt(qtyObj.value);
// 		if(qty>0) {
// 			qtyObj.value = qty - 1;
// 		}
// 	}

// 	//加
// 	$("btnPlus0").onclick = function(e) {
// 		let qtyObj = e.target.previousElementSibling;
// 		let qty = parseInt(qtyObj.value);
// 		qtyObj.value = qty + 1;
// 	}
// }
// window.addEventListener("load", initcount, false);	



function initcount(){
	let btnMinus0 = document.getElementsByClassName("btnMinus0");
	let btnPlus0 = document.getElementsByClassName("btnPlus0");

	for(let i=0; i<btnMinus0.length; i++){
		//減
		btnMinus0[i].onclick = function(e) {
			let qtyObj = e.target.nextElementSibling;
			let qty = parseInt(qtyObj.value);
			if(qty>0) {
				qtyObj.value = qty - 1;
			}
		}

		//加
		btnPlus0[i].onclick = function(e) {
			let qtyObj = e.target.previousElementSibling;
			let qty = parseInt(qtyObj.value);
			qtyObj.value = qty + 1;
		}
	}
}	
window.addEventListener("load", initcount, false);	

//點小圖秀大圖
function showLarge(e){
	let small = e.target;
	document.getElementById("large").src=small.src;
}

function init(){
	let smalls=document.getElementsByClassName("small");

	for(let i=0;i<smalls.length; i++){
		smalls[i].onclick=showLarge;
	}
}
window.addEventListener("load", init, false);	

