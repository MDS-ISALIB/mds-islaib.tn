const linksArea = document.querySelector('#main-links')
const linksSiteMap = document.querySelector('#sitemap-links')


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
    if (linksArea) {
        linksArea.innerHTML += createLink(t)
    }
})

const sitemap = [
    {
        'title': 'bigdata',
        'ab': 'Big Data'
    },
    {
        'title': 'c',
        'ab': 'Complexité Algorithmique'
    },
    {
        'title': 'cpd',
        'ab': 'Calcul Parallèle et Distribué'
    },
    {
        'title': 'culture',
        'ab': 'Culture d\'Entreprises'
    },
    {
        'title': 'eng',
        'ab': 'Anglais'
    },
    {
        'title': 'fr',
        'ab': 'Français'
    },
    {
        'title': 'java',
        'ab': 'Java'
    },
    {
        'title': 'math',
        'ab': 'Fondements Mathématiques des Données Scientifique'
    },
    {
        'title': 'nosql',
        'ab': 'NoSQL'
    },
    {
        'title': 'plsql',
        'ab': 'PL_SQL'
    },
    {
        'title': 'r',
        'ab': 'R Programming'
    },
    {
        'title': 'sas',
        'ab': 'Traitement analytique des Bases de Données'
    }
]
const populateSiteMap = (t)=>{
    return `
        <ul>
            <li style="margin-top: 1rem;"><a href="https://mds-islaib.tn/c/${t.title}" target="_blank"><strong>${t.ab}</strong> ** mds-islaib.tn/c/${t.title}/</a></li>
        </ul>
    `
}

sitemap.forEach(l=>{
    linksSiteMap.innerHTML += populateSiteMap(l)
})