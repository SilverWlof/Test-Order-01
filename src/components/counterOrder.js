let countent = 0;

export default class Counter {
	constructor(selector){
		this._selector = document.querySelector(selector);
		this._btnPlus= document.querySelector('#counter__btn_plus');
		this._btnMinus= document.querySelector('#counter__btn_minus');
	}
	generate(){
		this._selector.textContent = countent;

		this._btnPlus.addEventListener('click',()=>{ 
			countent++;
			this._selector.textContent = countent;
			this._btnMinus.removeAttribute("disabled")
		})
		this._btnMinus.addEventListener('click',()=>{ 
			if(countent === 0 ){
				this._btnMinus.setAttribute("disabled", true)
			}else {
				countent--;
				this._selector.textContent = countent;
			}
		})
	}
};