function createMarkup(arr, list) {
    let markup;
    if(arr.length){
    markup = arr
    .map(
        ({ name, img, id }) => `
            <li data-id="${id}" class="item js-card">
                <img class="item__img" src="${img}" alt="${name}" width="250" />
                <h2 class="item__name">Намисто: ${name}</h2>
                <p>
                    <a class="js-info" href="#">More information</a>
                </p>
                <div>
                    <button class="btn js-favorite" type="button">Add to favorite</button>
                    <button class="btn js-basket" type="button">Add to basket</button>
                </div>
            </li>`).join('');
} else {
    markup = `
    <li>
        <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600" />
    </li>`
}
    list.innerHTML = markup
}

export { createMarkup };