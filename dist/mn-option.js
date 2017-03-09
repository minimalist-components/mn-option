"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}function parsed(value){try{var isVariable=!value.startsWith("[")&&!value.startsWith("{")&&!value.startsWith("'")&&!value.startsWith('"')&&!value.startsWith("`")&&"true"!==value&&"false"!==value&&isNaN(value);return isVariable?eval("'"+value+"'"):eval("("+value+")")}catch(e){return value}}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnOption=function(_HTMLElement){function MnOption(self){function setInputAttribute(attribute){var isDefaultAttribute=attribute.hasOwnProperty("default"),attributeValue=element.getAttribute(attribute.name);if(isDefaultAttribute){var isValidValue=attribute.hasOwnProperty("values")&&attribute.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attribute.default;input.setAttribute(attribute.name,value)}else attributeValue&&input.setAttribute(attribute.name,attributeValue)}var _this,_ret;_classCallCheck(this,MnOption),self=_this=_possibleConstructorReturn(this,(MnOption.__proto__||Object.getPrototypeOf(MnOption)).call(this,self));var element=_this;if(!_this.hasAttribute("value")){var name=_this.hasAttribute("name")?'[name="'+_this.getAttribute("name")+'"]':"";console.error("missing value in mn-option"+name)}var inputAttributes=[{name:"type",values:["radio","checkbox"],default:"checkbox"},{name:"name"},{name:"autofocus"},{name:"checked"},{name:"disabled"},{name:"value"},{name:"id"}],label=document.createElement("label"),input=document.createElement("input");inputAttributes.map(setInputAttribute),_this.removeAttribute("id"),label.appendChild(input),_this.addEventListener("mouseleave",function(){input.blur()});var type=_this.getAttribute("type"),isNatural=_this.classList.contains("natural");if(type&&!isNatural){var customInput=document.createElement("div");if(customInput.className="input",customInput.classList.add(type),label.appendChild(customInput),"checkbox"===type){var vector=document.createElementNS("http://www.w3.org/2000/svg","svg");vector.setAttribute("width","16px"),vector.setAttribute("height","16px"),vector.innerHTML='<g\n          stroke="none"\n          stroke-width="1"\n          fill="none"\n          fill-rule="evenodd"\n          stroke-linecap="round"\n          stroke-linejoin="round">\n            <g\n              transform="translate(2.000000, 3.000000)"\n              stroke-width="2"\n              stroke="#000000">\n                <polyline\n                  points="12.3825 0.581533333 3.653 10.3935333 0.273722222 6.7386"></polyline>\n            </g>\n        </g>',customInput.appendChild(vector)}}else{var background=document.createElement("div");background.classList.add("background"),label.appendChild(background)}var placeholderText=document.createElement("span");return placeholderText.classList.add("text"),placeholderText.textContent=_this.getAttribute("placeholder")||_this.getAttribute("value"),label.appendChild(placeholderText),input.checked&&_this.classList.add("checked"),input.addEventListener("change",function(){if("radio"===input.getAttribute("type")){var _name=input.getAttribute("name"),lastChecked=document.querySelector('mn-option.checked[name="'+_name+'"]');lastChecked&&lastChecked.classList.remove("checked")}input.checked?_this.classList.add("checked"):_this.classList.remove("checked")}),element.appendChild(label),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnOption,_HTMLElement),_createClass(MnOption,[{key:"value",get:function(){var form=this.closest("form"),name=this.getAttribute("name")?'[name="'+name+'"]':":not([name])",options=form.querySelectorAll("mn-option"+name),type=this.getAttribute("type"),value=Array.from(options).map(function(item){return item.querySelector("input")}).filter(function(item){return item.checked}).map(function(item){return parsed(item.value)});return"radio"===type||options.length<=1?value[0]:value},set:function(value){var form=this.closest("form"),name=this.getAttribute("name"),options=form.querySelectorAll('mn-option[name="'+name+'"]'),type=options[0].getAttribute("type"),values=Array.isArray(value)?value:[value];if(Array.from(options).forEach(function(option){option.checked=!1}),"radio"===type){var _value=values[0],option=form.querySelector('mn-option[name="'+name+'"][value="'+_value+'"]');option?option.checked=!0:console.error(_value+' is a invalid value to mn-option[name="'+name+'"]')}else values.forEach(function(value){var option=form.querySelector('mn-option[name="'+name+'"][value="'+value+'"]');option?option.checked=!0:console.error(value+' is a invalid value to mn-option[name="'+name+'"]')})}},{key:"checked",get:function(){return this.hasAttribute("checked")},set:function(checked){checked?(this.setAttribute("checked","true"),this.classList.add("checked")):(this.removeAttribute("checked"),this.classList.remove("checked")),this.querySelector("input").checked=checked}}]),MnOption}(HTMLElement);window.customElements.define("mn-option",MnOption),window.MnOption=MnOption;
//# sourceMappingURL=mn-option.js.map
