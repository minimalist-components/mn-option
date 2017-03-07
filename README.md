<!-- [![npm version](https://badge.fury.io/js/mn-option.svg)](https://badge.fury.io/js/mn-option)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-option.svg)](https://gemnasium.com/github.com/minimalist-components/mn-option)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) -->

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

Add to your html, the tag ```mn-option``` e.g.

```html
<mn-option placeholder="Female" name="gender"></mn-option>
<mn-option placeholder="Male" name="gender"></mn-option>
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
