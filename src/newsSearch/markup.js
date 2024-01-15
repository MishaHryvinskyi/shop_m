function createMarkup(arr) {
    return arr.map(({ author, title, description, url, urlToImage }) => `
    <li class="js-item-search">
        <img src="${urlToImage}" alt="${title}" width="550" />
        <h2>${title}</h2>
        <h3>${author}</h3>
        <p>${description}</p>
        <a class="btn-s" href="${url}" target="_blank" rel="noreferrer noopener">Read more...</a>
    </li>
`).join('');
};

export { createMarkup };