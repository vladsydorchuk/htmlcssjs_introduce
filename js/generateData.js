init();

function init() {
    getDataFromJSON();
}

function getDataFromJSON() {
    fetch('https://raw.githubusercontent.com/vladsydorchuk/htmlcssjs_introduce/master/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Exception("HTTP error " + response.status);
            }

            return response.json();
        })
        .then(json => {
            json.data.forEach(item => createBlock(item));
        })
        .catch(err => {
            console.error(err);
        });

        return 'Complete';
}

let data = document.querySelector('.data');
function createBlock(block) {
    let section = document.createElement('section');
    section.classList.add('language');

    let sectionTitle = document.createElement('h3');
    sectionTitle.classList.add('language__title');
    sectionTitle.innerText = block.title;

    let grid = document.createElement('div');
    grid.classList.add('language__grid');

    block.items.forEach(item => {
        let itemInBlock = createItemInBlock(item);
        grid.appendChild(itemInBlock);
    });

    section.appendChild(sectionTitle);
    section.appendChild(grid);
    data.appendChild(section);
}

function createItemInBlock(data) {
    let item = document.createElement('div');
    item.classList.add('language__item');
    item.addEventListener('click', () => {
        window.open(data.button.link, "_black");
    });

    let wrapper = document.createElement('div');

    let img = document.createElement('img');
    img.src = data.image.link;
    img.alt = data.image.alt;
    img.classList.add('language__item-img');

    let itemInfo = document.createElement('div');
    itemInfo.classList.add('language__item-info');

    let title = document.createElement('h5');
    title.classList.add('language__item-title');
    title.innerText = data.title;

    let text = document.createElement('p');
    text.classList.add('language__item-text');
    text.innerText = data.text;

    let link = document.createElement('a');
    link.classList.add('language__item-link');
    link.href = data.button.link;
    link.innerText = data.button.caption;
    link.target = "_black";

    itemInfo.appendChild(title);
    itemInfo.appendChild(text);
    wrapper.appendChild(img);
    wrapper.appendChild(itemInfo);
    item.appendChild(wrapper);
    item.appendChild(link);

    return item;
}