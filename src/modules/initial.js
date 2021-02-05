const setup = (function () {
    const nav = document.createElement('nav')
    const container = document.querySelector('#content')
    const menu = [
        {
            id: "home",
            text: "Home"
        },
        {
            id: "menu",
            text: "Menu"
        },
        {
            id: "contact-us",
            text: "Contact Us"
        }]

    const addheader = () => {
        const header = document.createElement('header');
        const headerH1 = document.createElement('h1');
        headerH1.textContent = "Restaurant Page";
        header.appendChild(headerH1);
        container.appendChild(header);
    }

    const addMenuToNav = () => {
        nav.id = "nav-bar"
        for (let i = 0; i<menu.length; i++) {
            const tab = document.createElement('div');
            tab.id = menu[i].id;
            tab.textContent = menu[i].text;
            tab.class = "tab";
            nav.appendChild(tab)
        }
        container.appendChild(nav)
    }

    const addInfoDiv = () => {
        const infoDiv = document.createElement('div')
        infoDiv.textContent = "infodiv"
        container.appendChild(infoDiv)
    }

    const addFooter = () => {
        const footer = document.createElement('footer');
        const footerP = document.createElement('p');
        footerP.textContent = "Made by Viktor";
        footer.appendChild(footerP);
        container.appendChild(footer);
    }


    const initialize = () => {
        addheader()
        addMenuToNav()
        addInfoDiv()
        addFooter()
    }

    return {
        initialize
    }
})();

export default setup;