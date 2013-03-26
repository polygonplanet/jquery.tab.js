jquery.tab.js
==============

* A tiny jQuery tab plugin.


Installation
--------------

```html
<script src="jquery.js"></script>
<script src="jquery.tab.js"></script>
```


Example
--------------

**HTML:**

```html
<div id="tab">
    <div>
        <div id="button1">tab1</div>
        <div id="button2">tab2</div>
        <div id="button3">tab3</div>
    </div>
    <div>
        <div id="content1">content1</div>
        <div id="content2">content2</div>
        <div id="content3">content3</div>
    </div>
</div>
```

**JavaScript:**

```javascript
$('#tab').tab({
  triggers: ['#button1', '#button2', '#button3'],
  contents: ['#content1', '#content2', '#content3'],
  defaultIndex: 0,
  activeClass: 'tab-active',
  keyName: 'tab'
});
```

Demo
--------------

See Demo http://jsfiddle.net/polygonplanet/jZsmX/

