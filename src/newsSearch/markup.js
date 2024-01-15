function createMarkup({ 
    author, 
    title, 
    description, 
    url, 
    urlToImage 
}) {
    return  `
    <li class="js-item-search">
        <h2>${title}</h2>
        <h3>${author || "No author!😕"}</h3>
        <img src="${urlToImage || "https://ornament.name/pic/no_result.jpg"}" alt="${title}" width="550" />
        <p>${description}</p>
        <a class="btn-s" href="${url}" target="_blank" rel="noreferrer noopener">Read more...</a>
    </li>
`;
};

export { createMarkup };