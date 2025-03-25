interface Education {
    title: string;
    startDate: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "PHP Symfony Application Developer ",
        startDate: "2025-05-05",
        school: "OpenClassrooms",
        location: "France",
        description: "PHP Symfony application developer, backend development expert. Design, develop, and maintain robust web applications using the Symfony framework.",
        currentUni: true,
    },
    {
        title: "Junior Web Developer ",
        startDate: "2018-09-01",
        school: "OpenClassrooms",
        location: "France",
        description: "Projects 1 to 3 (HTML5/CSS3, WordPress, JavaScript/API)",
        currentUni: false,
    },
    {
        title: "Federal Certificate in Ethological Riding - Second Level. (Brevet Fédérale d’Equitation éthologique du second degré) ",
        startDate: "2011-04-01",
        school: "Haras de La Cense",
        location: "Rochefort-en-Yvelines",
        description: "Horse management and group management, teaching of ethological knowledge.",
        currentUni: false,
    },
    {
        title: "Certificate of Artificial Insemination Technician for Asinine and Equine Species.",
        startDate: "2009-09-01",       
        school: " Jumenterie du Haras du Pin ",
        location: "le-pin-aux-haras",
        description: "Semen collection, analysis, preparation for insemination, stallion management, mare management with detection of estrus and ovulation, insemination.",
        currentUni: false,
    },
    {
        title: "State Diploma of First-Level Sports Educator in Equestrian Activities (Brevet d’Etat d’Educateur Sportif du 1er degré Activités Equestres)",
        startDate: "2001-09-01",       
        school: " AED Handi Cheval ",
        location: "Goudelancourt-les Berrieux (02)",
        description: "Option Dressage et Handi-Cheval.",
        currentUni: false,
    },
    {
        title: "Undergraduate Degree in Foreign Languages and Cultures / American English (9 Units of Value) (DEUG Langues et Cultures Etrangères/ anglais-américain. 9 UV)",
        startDate: "1991-07-01",       
        school: " AMIENS University",
        location: "Amiens",
        description: "University Curriculum in English Language, History and Civilization.",
        currentUni: false,
    },
    {
        title: "DUT GEII",
        startDate: "1989",        
        school: "IUT du Littoral",
        location: "Calais",
        description: "Electrical Engineering and Industrial Computer Science – First Year.",
        currentUni: false,
    },
    {
        title: "Baccalaureate D: Mathematics and Natural Sciences",
        startDate: "1988-01-01",
        school: "Lycée Madeleine Michelis",
        location: "Amiens",
        description: "Baccalaureate D: Mathematics and Natural Sciences",
        currentUni: false,
    },
];

export default education;