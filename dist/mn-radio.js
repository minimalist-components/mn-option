"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var MnOption=function(_HTMLElement){function MnOption(self){function setInputAttribute(attribute){var isDefaultAttribute=attribute.hasOwnProperty("default"),attributeValue=element.getAttribute(attribute.name);if(console.log(attribute.name,isDefaultAttribute),isDefaultAttribute){var isValidValue=attribute.hasOwnProperty("values")&&attribute.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attribute.default;console.log(value),input.setAttribute(attribute.name,value)}else attributeValue&&input.setAttribute(attribute.name,attributeValue)}var _this,_ret;_classCallCheck(this,MnOption),self=_this=_possibleConstructorReturn(this,(MnOption.__proto__||Object.getPrototypeOf(MnOption)).call(this,self));var element=_this,inputAttributes=[{name:"type",values:["radio","checkbox"],default:"checkbox"},{name:"name"},{name:"autofocus"},{name:"checked"},{name:"disabled"},{name:"value"},{name:"id"}],label=document.createElement("label"),input=document.createElement("input");inputAttributes.map(setInputAttribute),_this.removeAttribute("id"),label.appendChild(input),_this.addEventListener("mouseleave",function(){input.blur()});var type=_this.getAttribute("type");if(type){var customInput=document.createElement("div");customInput.className="input",customInput.classList.add(type),label.appendChild(customInput)}else{var background=document.createElement("div");background.classList.add("background"),background.textContent=_this.getAttribute("placeholder"),label.appendChild(background)}return element.appendChild(label),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnOption,_HTMLElement),MnOption}(HTMLElement);window.customElements.define("mn-option",MnOption),window.MnOption=MnOption;
//# sourceMappingURL=mn-radio.js.map
