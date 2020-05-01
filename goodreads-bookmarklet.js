javascript: var asin_elements, asin;
asin_elements = document.getElementsByName('ASIN');
if (asin_elements.length == 0) {
    asin_elements = document.getElementsByName('ASIN.0');
};
if (asin_elements.length == 0) {
    alert('Sorry, this doesn\'t appear to be an Amazon book page.');
} else {
    asin = asin_elements[0].value;
    if (asin.match(/\D/) === null) {
        var x = window.open('http://www.goodreads.com/review/isbn/' + asin, 'add_review');
    } else {
        var x = window.open('https://www.goodreads.com/search?q=' + asin);
    }
    x.focus();
}
