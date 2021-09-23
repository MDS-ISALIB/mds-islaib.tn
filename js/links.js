const linksArea = document.querySelector('#main-links')

const links = [
    {'title': 'fb'},
    {'title': 'drive'},
    {'title': 'sitemap'},
]

const createLink= t => {
    return `
    <ul>
        <li><a href="https://mds-islaib.tn/${t.title}" target="_blank">${t.title}/</a></li>
    </ul>
       `
}

links.forEach(t=>{
    linksArea.innerHTML += createLink(t)
})