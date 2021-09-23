const cardGrid = document.querySelector('#grid-main')

let coursesArray = [
    {
        'title': 'Java',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content?filter=4530031280445351',
        'linkDrive': 'https://drive.google.com/drive/folders/1cykxWRvIBolV-q12M_HQd1Aa1LaTn8J7?usp=sharing',
        'img': 'java'
    },
    {
        'title': 'R Programming',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=1023038085154527',
        'linkDrive': 'https://drive.google.com/drive/folders/14ll4iHa0NdvyaOLIsxS-9Xf-f8LrOvLp?usp=sharing',
        'img': 'r'
    },
    {
        'title': 'No SQL',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=1231438023985578',
        'linkDrive': 'https://drive.google.com/drive/folders/1TQmkKjKiZPFXQkhSIPjQZKhvYCqk3P8a?usp=sharing',
        'img': 'nosql'
    },
    {
        'title': 'PLSQL',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=221357746719727',
        'linkDrive': 'https://drive.google.com/drive/folders/1uayQ14oDqzlxJxJQ4CEiIo1zpSn73bp0?usp=sharing',
        'img': 'plsql'
    },
    {
        'title': 'Anglais',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=401435384864452',
        'linkDrive': 'https://drive.google.com/drive/folders/1KYkPDi3-I-smx9q7xsYo93eHvHFY5E5E?usp=sharing',
        'img': 'eng'
    },
    {
        'title': 'Français',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=415362949986758',
        'linkDrive': 'https://drive.google.com/drive/folders/1M3-Z3x9n4rWyMznt4L4N4D1CClIurvMp?usp=sharing',
        'img': 'fr'
    },
    {
        'title': 'Culture d\'Entreprises',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=376152030645412',
        'linkDrive': 'https://drive.google.com/drive/folders/1nkD-SsNPFdr9kmwdMAc2Roy61b8lzg3D?usp=sharing',
        'img': 'na'
    },
    {
        'title': 'SAS',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=562730878299460',
        'linkDrive': 'https://drive.google.com/drive/folders/1yc8jsJHjEsNG8JNsRWFQe8g76QyzM6Cr?usp=sharing',
        'img': 'na'
    },
    {
        'title': 'Big Data',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=3816428068458069',
        'linkDrive': 'https://drive.google.com/drive/folders/1HEkMkmj4BQMQxJtmlxkVy-ClR-KHvVmG?usp=sharing',
        'img': 'na'
    },
    {
        'title': 'Calcul Parallèle et Distribué',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=355920112896774',
        'linkDrive': 'https://drive.google.com/drive/folders/11HWER56sDtfu7mP4XiuO2ViGJRJFLBJO?usp=sharing',
        'img': 'na'
    },
    {
        'title': 'Complexité Algorithmique',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=365426135221511',
        'linkDrive': 'https://drive.google.com/drive/folders/1ALws3lH8XRzXBZLh7H-CcRapVgrOakEA?usp=sharing',
        'img': 'na'
    },
    {
        'title': 'Fondements Mathématiques des Données Scientifiques',
        'linkFacebbok': 'https://www.facebook.com/groups/549130559628570/learning_content/?filter=1942614492575098',
        'linkDrive': 'https://drive.google.com/drive/folders/1c1x_zUFUFErR-vEdmAJUlIUVkIiMHW8q?usp=sharing',
        'img': 'na'
    },
]

const createNewCard = (n, lfb, ld, img)=>{
    return `
        <div class="card">
            <img src="img/courses/${img}.png" alt="${img}-logo">
            <h3>${n}</h3>
            <div class="footer-flex">
                <a href="${lfb}" target="_blank">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="${ld}" target="_blank">
                    <i class="fab fa-google-drive"></i>
                </a>
            </div>
        </div>
    ` 
}

coursesArray.forEach(course=>{
    cardGrid.innerHTML += createNewCard(course.title, course.linkFacebbok, course.linkDrive, course.img)
})