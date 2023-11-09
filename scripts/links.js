const baseURL = 'https://gonzo909.github.io/wdd230/';
const linksURL = 'https://gonzo909.github.io/wdd230/data/links.json';
const lessonList = document.querySelector('#lessons');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let listItem = document.createElement('li');

        week.links.forEach((link) => {
            let lessonItem = document.createElement('a');
            let separator = document.createElement('span');

            separator.textContent = ' | ';
            lessonItem.textContent = link.title;
            lessonItem.setAttribute('href', link.url);

            listItem.appendChild(lessonItem);

            if (week.links[week.links.length - 1] !== link)
                listItem.appendChild(separator);
        })

        lessonList.appendChild(listItem);
    })
}

getLinks();