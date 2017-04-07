[![Build Status](https://travis-ci.org/minimalist-components/mn-option.svg)](https://travis-ci.org/minimalist-components/mn-option) 
[![npm version](https://badge.fury.io/js/mn-option.svg)](https://badge.fury.io/js/mn-option)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-option.svg)](https://gemnasium.com/github.com/minimalist-components/mn-option)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-option

Minimalist radio/checkbox component, agnostic to framworks.

See the [demo](https://minimalist-components.github.io/mn-option/)

<a href="https://minimalist-components.github.io/mn-option/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-option/master/preview.gif">
</a>

### Install

```sh
npm install --save mn-option
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-option/tree/master/dist) with your preferred tool.

### Usage

Add to your html, the tag ```mn-option``` with respective type, default is checkbox, e.g.

```html
<!-- checkbox -->
<mn-option placeholder="Stark" name="gender"></mn-option>
<mn-option placeholder="Lannister" name="gender"></mn-option>
<mn-option placeholder="Targaryen" name="gender"></mn-option>
```


To define as radio, use the attribute `type`

```html
<!-- radio -->
<mn-option placeholder="Female" name="gender" type="radio"></mn-option>
<mn-option placeholder="Male" name="gender" type="radio"></mn-option>
```

#### Custom attributes

- placeholder - custom attribute, to define the text visible
- type (only checkbox and radio)

#### Natural checkbox or radio

Is just a css class, to define a minimal design. Useful in some cases. E.g.

```html
<!-- checkboxes, but if you want radio, just implement the type attribute with radio value -->
<mn-option class="natural" placeholder="Stark" name="gender"></mn-option>
<mn-option class="natural" placeholder="Lannister" name="gender"></mn-option>
<mn-option class="natural" placeholder="Targaryen" name="gender"></mn-option>
```


The following attributes from inputs are supported in this component

- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [checked](http://www.w3schools.com/tags/att_input_checked.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [readonly](http://www.w3schools.com/tags/att_input_readonly.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [id](https://www.w3schools.com/tags/att_global_id.asp)

Too works with a separted ```label``` with an attribute ```for```
- [label for](https://www.w3schools.com/tags/att_label_for.asp)
