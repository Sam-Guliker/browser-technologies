# Browser Technologies
Components for this assessment
* Carrousel
* Tabbladen

## Feature dectection
> Feature dectection involves working out whether a supports a certain block of code, and running a different code dependent on whether it does (or doesn't), so that the browser can always provide a working experience.

## How about preventing??
Ofc we can use Feature dectection but why not combined with preventing issues. For example the UL and LI components in HTML. They are strongly supported for every browser.

## Support
Not every HTML5 element is supported in the browsers.
### ul & li
`ul` & `li` are html 4 elements that are fully supported on browsers

![ul](images/ul.png)

`section` is an element that is not fully supported in every     browser such as IE other browsers do have a good support  on this element. section it still is 'cssable'(you can still  style the element.)

![section](images/section.png)

`figcaption` has the same issue as the `section`

![figcaption](images/figcaption.png)

`addEventListener` Is strongly supported in browsers, yet IE does it again.

![addEventListener](images/addevent.png)

## CSS propperies

``` css
@supports(scroll-behavior: smooth){
  html{
    scroll-behavior: smooth;
  }
}
@supports(box-shadow: 2px 2px 3px 3px #2e2e2e;){
  section{
    box-shadow: 2px 2px 3px 3px #2e2e2e;
  }
}
@supports(transition: opacity 1s;){
  .slide{
    transition: opacity 1s;
  }
  #slides li.carrousel-slide{
    transition: opacity 1s;
  }
}

```

## Fallback
### Javascript
With javascript I'm using the `addEventListener`, which is strongly supported but not for IE. This is why I got a fallback for it.

```javascript
for (i = 0; i < navtabs.length; i++) {
  if(window.addEventListener) {
    navtabs[i].addEventListener('click', function(event) {
      href = this.getAttribute('href')
      var cleanHref = href.replace('#', '')
      selectSection(cleanHref)
      event.preventDefault()
    })
  } else {
    navtabs[i].attachEvent('onclick', function(event) {
      href = this.getAttribute('href')
      var cleanHref = href.replace('#', '')
      selectSection(cleanHref)
      event.preventDefault()
    })
  }
}

```
### support
`@support` is a feature query. Feature query will check on the browser  support if you can use a css propperty.

#### Example
```css
@supports(scroll-behavior: smooth){
  html{
    scroll-behavior: smooth;
  }
}
```
## Testing



## Resources
* [diveintohtml5](http://diveintohtml5.info/detect.html)
* [quirksmode.org](https://www.quirksmode.org/js/support.html)
* [canIuse](https://caniuse.com/)
* [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)