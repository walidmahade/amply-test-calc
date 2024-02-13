## How to add to website

1. Add local script using a localhost link

```html
<script src="http://localhost:1234/dist/calculator-script.js"></script>
```

2. Add the following HTML to the page as backup when localhost is not available

```html
<script type="text/javascript">
    if (typeof parceled === 'undefined') {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://walidmahade.github.io/amply-test-calc/dist/calculator-script.js';
        document.body.appendChild(script);
    }
</script>
```