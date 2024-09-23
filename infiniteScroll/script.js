let currentPage = 1;
const contentDiv = document.getElementById('content');
const loadingDiv = document.getElementById('loading');


function fetchData(page) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const items = [];
            for (let i = 1; i <= 15; i++) {
                items.push(`Item ${(page - 1) * 15 + i}`);
            }
            resolve(items);
        }, 1000);
    });
}


function appendItems(items) {
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.textContent = item;
        contentDiv.appendChild(div);
    });
}

async function loadContent(page) {
    loadingDiv.style.display = 'block';
    const items = await fetchData(page);
    appendItems(items);
    loadingDiv.style.display = 'none';
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {

        currentPage++;
        loadContent(currentPage);
    }
});

loadContent(currentPage);
