const form = document.querySelector('#searchForm');
const reset = document.querySelector('#reset');

form.addEventListener('submit' , async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImages(res.data);
    form.elements.query.value = '';
})

reset.addEventListener('click', function () {
    const imgs = document.querySelectorAll('img');
    for (let img of imgs) {
        img.remove();
    }
});

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img)        
        }
    }
}

