// function init(){
// 	let btnMinus = document.getElementsByClassName("btnMinus");
// 	let btnPlus = document.getElementsByClassName("btnPlus");

// 	for(let i=0; i<btnMinus.length; i++){
// 		//減
// 		btnMinus[i].onclick = function(e) {
// 			let qtyObj = e.target.nextElementSibling;
// 			let qty = parseInt(qtyObj.value);
// 			if(qty>0) {
// 				qtyObj.value = qty - 1;
// 			}
// 		}

// 		//加
// 		btnPlus[i].onclick = function(e) {
// 			let qtyObj = e.target.previousElementSibling;
// 			let qty = parseInt(qtyObj.value);
// 			qtyObj.value = qty + 1;
// 		}
// 	}
// }	
// window.addEventListener("load", init, false);	

//add
var adds = document.getElementsByClassName("add");
//循環
for (var i = 0; i < adds.length; i++) {
	//單擊事件
	adds[i].onclick = function () {
		//1.獲取輸入框對象
		var inputEle = this.previousElementSibling;
		//2.獲取原來的值
		var inputValue = inputEle.value;
		//3.重新複製
		inputEle.value = parseInt(inputValue) + 1;

		//計算金額
		//1.數量
		var number = parseInt(inputEle.value);
		//2.單價
		var commElement = this.closest('.item').querySelector(".comm");
		if (commElement !== null) {
			var price = parseFloat(commElement.textContent);

			//3.金額
			var sum = number * price;

			//4.賦值 保留2位小數點->toFixed(2)
			this.closest('.item').querySelector(".total").textContent = sum;

			//調用方法
			getAmount();
		} else {
			console.error(".comm element not found!");
		}
	}
}

//minus
var minus = document.getElementsByClassName("minus");
//循環
for (var i = 0; i < minus.length; i++) {
	//單擊事件
	minus[i].onclick = function () {
		//1.獲取輸入框對象
		var inputEle = this.nextElementSibling;
		//2.獲取原來的值
		var inputValue = inputEle.value;
		//判斷
		if (parseInt(inputValue) > 1) {
			//3.重新複製
			inputEle.value = parseInt(inputValue) - 1;

			//計算金額
			//1.數量
			var number = parseInt(inputEle.value);
			//2.單價
			var commElement = this.closest('.item').querySelector(".comm");
			if (commElement !== null) {
				var price = parseFloat(commElement.textContent);

				//3.金額
				var sum = number * price;

				//4.賦值 保留2位小數點->toFixed(2)
				this.closest('.item').querySelector(".total").textContent = sum;

				//調用方法
				getAmount();
			} else {
				console.error(".comm element not found!");
			}
		}
	}
}

//刪除品項
var removeItems = document.getElementsByClassName("remove");
//循環
for (var i = 0; i < removeItems.length; i++) {
	//點擊事件
	removeItems[i].onclick = function () {
		var itemToRemove = this.closest('.item');
		if (itemToRemove !== null) {
			itemToRemove.remove();
			// 調用方法重新計算金額
			getAmount();
		} else {
			// console.error("Item to remove not found!");
		}
	}
}




//計算金額
function getAmount() {
	//0.累計和
	var sum = 0;
	//1.total
	var totals = document.getElementsByClassName("total");
	//2.循環
	for (var i = 0; i < totals.length; i++) {
		sum += parseFloat(totals[i].textContent);
	}

	//3.賦值
	document.getElementById("sum2").textContent = sum;
	// document.getElementById("sum3").textContent = sum - discount.textContent + shipping.textContent;


	// 設定折扣和運費
	var discount = document.getElementById("discount");
	var shipping = document.getElementById("shipping");

	var itemCount = document.querySelectorAll('.count input[type="text"]');
	var totalItems = 0;

	for (var j = 0; j < itemCount.length; j++) {
		totalItems += parseInt(itemCount[j].value);
	}

	var discountValue = 50; // 折扣金額
	var shippingCost = 60; // 運費金額
	var orderTotal = document.getElementById("sum3");

	if (totalItems === 0) {
		discount.innerHTML = 0;
		shipping.innerHTML = 0;
		orderTotal.innerHTML = 0; // 將總金額設為零
	} else {
		discount.innerHTML = discountValue;
		shipping.innerHTML = shippingCost;
		orderTotal.innerHTML = sum - discountValue + shippingCost;
	}
}