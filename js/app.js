let first_article_image = document.querySelector(`#first_article img`);
first_article_image[`style`][`filter`] = `grayscale(0.9)`;
first_article_image[`style`][`borderRadius`] = "15px";

let posts = document.querySelectorAll(`.post`);
for(let i=0; i<posts.length; i++) {
    // posts[i][`innerHTML`] = `HACKED!`;
    posts[i][`style`][`borderRadius`] = `15px`;
    posts[i][`style`][`boxShadow`] = `3px 3px 6px gray`;
}

let p_tags = document.querySelectorAll(`p`);
for(let i=0; i<p_tags.length; i++) {
    if(p_tags[i][`innerHTML`].includes(`link`) === true) {
        p_tags[i].insertAdjacentHTML(`beforeend`, `<a href="https://google.com">A LINK!</a>`)
    }
}



function handle_image_click(details) {
    details[`target`].insertAdjacentHTML(`afterend`, `<p>I WAS CLICKED</p>`);
}

first_article_image.addEventListener(`click`, handle_image_click);