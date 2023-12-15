function init(){
	let btnMinus = document.getElementsByClassName("btnMinus");
	let btnPlus = document.getElementsByClassName("btnPlus");

	for(let i=0; i<btnMinus.length; i++){
		//減
		btnMinus[i].onclick = function(e) {
			let qtyObj = e.target.nextElementSibling;
			let qty = parseInt(qtyObj.value);
			if(qty>0) {
				qtyObj.value = qty - 1;
			}
		}

		//加
		btnPlus[i].onclick = function(e) {
			let qtyObj = e.target.previousElementSibling;
			let qty = parseInt(qtyObj.value);
			qtyObj.value = qty + 1;
		}
	}
}	
window.addEventListener("load", init, false);	