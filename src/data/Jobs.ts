/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
    title: string;
    startDate: string;
    endDate?: string;
    company: string;
    location: string;
    description: string;
    goals: string[];
    currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience:WorkExperience[] = [
    {
        title: "Digital Project Manager & Developer",
        startDate: "2017-01-01",
        company: "ValWebcreation",
        location: " Coulimer, France",
        description: "Multifaceted management of web projects, encompassing client relations, strategic planning, design, and development for showcase and e-commerce websites, along with SEO and social media integration.",
        goals: [
            "Listening and defining the project with the client: Analyzing needs, setting objectives, and providing personalized guidance.",
            "Competitor analysis and strategy: Studying the market to identify opportunities, threats, and establish a differentiating strategy.",
            "Creating a visual identity: Designing advertising materials such as logos, business cards, flyers, and roll-up banners, aligned with the brand's image.",
            "Website creation and design: Revamping or developing showcase and e-commerce websites tailored to the client's specific needs.",
            "Developing web applications with Symfony: Maintaining and improving functionalities to ensure an optimal user experience.",
            "Revamping WordPress websites: Updating and optimizing existing sites to enhance user experience and overall performance.",
            "Writing SEO-optimized content: Creating engaging texts to enhance online visibility.",
            "Social media management: Developing content strategies, scheduling, and optimizing posts to strengthen online presence.",
            "Continuous client relationship: Following up, gathering feedback, and making adjustments to ensure satisfaction and achieve set goals.",      
        ],  
        currentJob: true,
    },
    {
        title: "Manager of EARL Haras du Grand Hersée - Horse Breeding",
        startDate: "2007-10-01",
        endDate: "2025-05-15",
        company: "EARL Haras du Grand Hersée",
        location: "Coulimer, France",
        description: "Management of an equestrian business combining administrative oversight, website creation, and client-focused coaching in horse training and rehabilitation.",
        goals: [
            "Project Management and Administrative Expertise: Handled administrative tasks, including PAC declarations, maintaining health records, and overseeing breeding operations.",
            "Web Development and Digital Presence: Designed and managed the website www.frison-luxe.com, showcasing advanced technical skills and an eye for effective online communication.",
            "Data Management and Software Proficiency: Managed accounting and operations using ISTEA software, ensuring efficient organization and streamlined workflows.",
            "Client Relations and Strategy: Provided personalized coaching in ethological horse riding (behavior and rehabilitation), demonstrating excellent communication and client-focused solutions.",
            "Market Analysis and Branding: Built a distinctive brand identity to position the business successfully in a competitive market.",
        ],
        currentJob: false,
    },
    {
        title: "Banking Experience - Relationship Management and Financial Expertise",
        startDate: "1995-01-01",
        endDate: "2007-09-01",
        company: "LCL Sarcelles & CIM Reims",
        location: "France",
        description: "Developed and managed high-value client portfolios by providing personalized financial solutions, conducting strategic reviews, optimizing loan processes, and fostering long-term client loyalty through tailored advice and exceptional service.",
        goals: [
            "Built trusted relationships with high-value individual clients, delivering personalized financial advice and services.",
            "Specialized in portfolio development and retention for mid-to-high-end clients (segments 3-4).",
            "Conducted comprehensive financial reviews to propose tailored investment, loan, and insurance solutions.",
            "Managed loan application processes for consumer and real estate loans, ensuring efficient handling and client satisfaction.",
            "Demonstrated a strategic approach to building client loyalty and optimizing financial outcomes.",
        ],
        currentJob: false,
    },     
    {   title: "Administrative and Executive Support Experience",
        startDate: "1993-01-01",
        endDate: "1994-12-01",
        company: "DGGN & ANPE",
        location: "France",
        description: "Handled diverse administrative responsibilities, including statistical data preparation, international coordination with the British police, event organization to foster professional relationships, and adaptable support in temporary roles.",
        goals: [
            "Executive Secretary, Personnel Division – General Directorate of the National Gendarmerie (1993, Paris 16th)",
            "Managed administrative tasks for the personnel department, including preparing statistical data.",
            "Coordinated international relations with the British police, fostering communication and collaboration.",
            "Organized events, such as golf meetings, to strengthen relationships in a professional and friendly context.",
            "Temporary Administrative Officer, A.N.P.E. (National Employment Agency / 1994, Modane)",
            "Provided administrative support on a temporary basis, demonstrating adaptability and efficiency.",            
        ],
        currentJob: false,
    },
];
export default workExperience;