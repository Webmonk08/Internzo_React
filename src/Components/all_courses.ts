export type Course = {
    name: string;
    description: string;
    Price: number;
    period: number;
    image: string;
    category: string;
    overview:String;
    like:boolean;
    cart:boolean;
    skills:[string, string, string, string, string];
    syllabus:[{ title: string; description: string; }, { title: string; description: string; }, { title: string; description: string; }, { title: string; description: string; }, { title: string; description: string; }];
    instructors:[{ name: string; bio: string; }, { name: string; bio: string; }];
}


 const all_courses:Course[]=[
    {
        name: "Full Stack Devlopment",
        description:"The Complete Html Css Js Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"web",
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        like:false,
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "App Development",
        description:"The Complete Java Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"app",
        overview:"This comprehensive course is designed to equip you with the foundational and advanced concepts of Artificial Intelligence (AI) and Machine Learning (ML). You will learn how to build intelligent systems, develop predictive models, and apply AI/ML techniques to solve real-world problems. The course covers a wide range of topics, including supervised and unsupervised learning, neural networks, deep learning, natural language processing (NLP), and computer vision.",
        like:false,
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "Web3 Development",
        description:"The Complete Solidity Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"web3",
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        like:false,
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "DSA SKILLSET",
        description:"The Complete DSA Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"dsa",
        like:false,
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "Python Programming",
        description:"The Complete Python Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"python",
        like:false,
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]

    },
    {
        name: "C and C++ Programming",
        description:"The Complete C and C++ Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"cpp",
        like:false,
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]

    },
    {
        name: "SEO",
        description:"The Complete SEO Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"seo",
        like:false,
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "Cyber Security",
        description:"The Complete Cyber Security Course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"cyber",
        like:false,
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "AIML",
        description:"The Complete AI/ML course",
        Price: 1000,
        period:1,
        image:"/assets/images/Group.webp",
        category:"AIML",
        like:false,
        overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ad repellendus natus consequuntur in ratione eveniet labore maiores mollitia ab tempora possimus, fuga cum fugiat inventore eius quibusdam! Modi, quis!  ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Foundations of Data Analytics", description: "Introduction to key concepts and tools." },
            { title: "Data Cleaning and Transformation", description: "Learn how to clean and prepare data for analysis." },
            { title: "Data Analysis with SQL", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "Capstone Project", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
]

export default all_courses;