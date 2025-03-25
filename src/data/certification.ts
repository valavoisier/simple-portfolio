interface Certification {
    title: string;
    startDate: string;
    endDate?: string;
    description: string;
    descriptiontwo: string;
    descriptionthree: string;
    descriptionfour: string;
    descriptionfive: string;
    descriptionsix: string;
    descriptionseven: string;
    currentUni: boolean;
}

const  certification: Certification[] = [
    {
        title: "UDEMY",
        startDate: "2024-09-01",
        endDate: "", 
        description: "Learn Symfony 7 by Creating an E-commerce Website.",
        descriptiontwo: "Symfony 7 & PHP MVC (Multiple Projects): Ultimate Guide!.",
        descriptionthree: "Digital Marketing and Social Media: The Guide to Success.",
        descriptionfour: "TailwindCSS 2 in Practice - 2021.",
        descriptionfive: "",
        descriptionsix: "",
        descriptionseven: "",
        currentUni: true,
    },
    {
        title: "OPENCLASSROOMS",
        startDate: "2018-01-01",
        endDate: "",
        description: "Learn to Create Your Website with HTML5 and CSS3.",
        descriptiontwo:"Discover CMS Solutions",
        descriptionthree:"Build Modern and Beautiful Websites with WordPress",
        descriptionfour:"Learn to Code with JavaScript",
        descriptionfive:"Introduction to jQuery.",
        descriptionsix:"Improve the Impact of Your Presentations.",
        descriptionseven:"Understand the Web",
        currentUni: true,
    },
    
];

export default certification;