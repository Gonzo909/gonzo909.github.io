const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

button.addEventListener('click', function() {
    if (input.value !== '') {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(chaptersArray);

        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
        
    li.appendChild(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('faveBOMChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('faveBOMChapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    chapterArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
