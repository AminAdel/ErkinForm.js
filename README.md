# ErkinForm.js
a simple javascript plugin to create robot-protected forms

## Getting Started :
this script needs jquery, so insert it into your html document :
```html
<script type="text/javascript" src="path-to-folder/jquery-3.2.1.min.js"></script>
```
then insert "ErkinForm.js" into your html document :
```html
<script type="text/javascript" src="path-to-folder/ErkinForm.js"></script>
```

#### create your form normally
```html
<form method="post" action="somewhere">
  ...
  <input type="submit" value="submit">
</form>
```

#### then simply change your form like this :
```html
<div class="ErkinForm" data-method="post" data-action="somewhere">
  ...
  <div class="submit">Submit</div>
</div>
```
pay attention to the submit button, it has changed to a div tag with "submit" class.

#### _that's it! ... ErkinForm will do the rest for you!_

## Some Points 
- this plugin doesn't send unchecked radio inputs, only checked radio inputs will be sent.
