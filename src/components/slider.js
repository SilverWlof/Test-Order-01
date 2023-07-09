export default class Slider{
	constructor(){
		this._slider = document.querySelector('.slider');
		this.slider__spayed = this._slider.querySelector("#slider__spayed")
	}
	generate(){
		this._slider.addEventListener('click',(evt)=>{
			if(evt.target.classList.contains("slider__mini")){
				const spayed = this.slider__spayed.src;
				this.slider__spayed.src = evt.target.src;
				evt.target.src = spayed;
			}
		}) 
	}
}



// избавится от пряммых значение типа классов и id