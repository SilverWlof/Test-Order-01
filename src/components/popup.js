export default class Popup{
	
	constructor(selector){
		this._selector = selector;
	}
	_getElement() {
		this._element = document.querySelector(this._selector);
		return this._element;
  }

	open() {				
	 	this._getElement().classList.add('popup_open');
	 	document.addEventListener('keydown', this._handleEscClose);
  }

  close() {		
	 	this._getElement().classList.remove('popup_open');
	 	document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(event){
 		if (event.key === 'Escape'){
			this.close();
 		}
	}

	setEventListeners(){
		this._getElement();
		this._element.addEventListener('mousedown', (evt) => {
			if (evt.target.classList.contains('popup_open')) {
				this.close();
			}
			if (evt.target.classList.contains('popup__button-close')) {
				this.close();
			}
		})
	}
}