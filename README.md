<!-- [![npm version](https://badge.fury.io/js/mn-radio.svg)](https://badge.fury.io/js/mn-radio)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-radio.svg)](https://gemnasium.com/github.com/minimalist-components/mn-radio)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) -->

# mn-option

Minimalist radio/checkbox component, agnostic to framworks.

See the [demo](https://minimalist-components.github.io/mn-radio/)

<a href="https://minimalist-components.github.io/mn-radio/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-radio/master/preview.gif">
</a>

### Install

```sh
npm install --save mn-radio
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-radio/tree/master/dist) with your preferred tool.

### Usage

Add to your html, the tag ```mn-radio``` e.g.

```html
<mn-radio placeholder="Female" name="gender"></mn-radio>
<mn-radio placeholder="Male" name="gender"></mn-radio>
```

Custom attributes

- placeholder - custom attribute, to define the text visible for radio

The following attributes from input type radio are supported in this component

- [autofocus](http://www.w3schools.com/tags/att_input_autofocus.asp)
- [checked](http://www.w3schools.com/tags/att_input_checked.asp)
- [disabled](http://www.w3schools.com/tags/att_input_disabled.asp)
- [name](http://www.w3schools.com/tags/att_input_name.asp)
- [required](http://www.w3schools.com/tags/att_input_required.asp)
- [value](http://www.w3schools.com/tags/att_input_value.asp)
- [id](https://www.w3schools.com/tags/att_global_id.asp)

Too works with a separted ```label``` with an attribute ```for```
- [label for](https://www.w3schools.com/tags/att_label_for.asp)
