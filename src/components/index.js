import "../pages/index.css";
import Counter from "./counterOrder.js";
import Slider from "./slider.js";
import Popup from "./popup.js";



const popup = new Popup("#popup-buy-one-click");

const oneClick = new Popup("#buy-one-click")._getElement()
.addEventListener('click', ()=>{
		popup.open();
})

const close = new Popup('.popup__button-close')._getElement().addEventListener('click',()=>	popup.close())
popup._getElement().addEventListener('submit',(event)=>{
	event.preventDefault();
	popup.close()
	event.target.reset();	
})

const slider = new Slider().generate();

const count = new Counter('.counter__item').generate();



const menu = new Popup("#popup-menu");

const menuBtn = new Popup("#menu")
	._getElement().addEventListener('click', ()=>{
		menu.open();
});
	
const closeMenu = new Popup('.popup__button-close-menu')._getElement().addEventListener('click',()=>	menu.close());


