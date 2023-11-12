const directoryURL = 'https://gonzo909.github.io/wdd230/chamber/data/members.json';
const directoryList = document.querySelector('.directory');

async function getDirectory() {
    const response = await fetch(directoryURL);
    const data = await response.json();

    console.log(data);
    displayDirectory(data);
}

const displayDirectory = (directory) => {
    directory.forEach((business) => {
        let directoryItem = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        let membership = document.createElement('p');
        

        name.textContent = business.name;
        address.textContent = business.address;
        phone.textContent = business.phone;
        website.textContent = business.website;
        image.setAttribute('src', business.img);
        image.setAttribute('alt', business.name);
        image.setAttribute('loading', 'lazy');
        membership.textContent = business.membership;
        

        directoryItem.appendChild(name);
        directoryItem.appendChild(address);
        directoryItem.appendChild(phone);
        directoryItem.appendChild(website);
        directoryItem.appendChild(image);
        directoryItem.appendChild(membership);

        directoryList.appendChild(directoryItem);
    });
}

getDirectory();