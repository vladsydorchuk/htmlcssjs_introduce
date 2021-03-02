var items = document.querySelectorAll('.language__item');
items.forEach((item) => {
    item.addEventListener('click', function(e){
        let parent = e.target.closest('.language__item');
        window.open(parent.children[1].href, "_black");
    });
});