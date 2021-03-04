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
            generateHtmlBlocks(json.data);
            addClickHandlers();
        })
        .catch(err => {
            console.error(err);
        });

        return 'Complete';
}

function generateHtmlBlocks(data) {
    let container = document.querySelector('.data');
    container.innerHTML = data.map(block => (
        `<section class="language">
            <h3 class="language__title">${block.title}</h3>
            <div class="language__grid">
                ${block.items.map(item => (
                    `<div class="language__item">
                        <div>
                            <img class="language__item-img" src=${item.image.link} alt=${item.image.alt}/>
                            <div class="language__item-info">
                                <h5 class="language__item-title">${item.title}</h5>
                                <p class="language__item-text">${item.text}</p>
                            </div>
                        </div>
                        <a class="language__item-link" href="${item.button.link}" target="_blank">${item.button.caption}</a>
                    </div>`
                )).join('')}
            </div>
        </section>`
    )).join('');
}

function addClickHandlers() {
    var items = document.querySelectorAll('.language__item');
    items.forEach((item) => {
        item.addEventListener('click', function(e){
            let parent = e.target.closest('.language__item');
            window.open(parent.children[1].href, "_black");
        });
    }); 
}
