function tabOneClickHandler(e) {
    Enabler.counter('Click on Tab 1');
}
document.getElementById('tab-one').addEventListener('click',
tabOneClickHandler, false);