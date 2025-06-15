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
    skills:string[];
    syllabus: { title: string; description: string }[];
    instructors:[{ name: string; bio: string; }, { name: string; bio: string; }];
}


 const all_courses:Course[]=[
    {
        name: "Full Stack Devlopment",
        description:"The Complete Full Stack Course with React",
        Price: 1000,
        period:1,
        image:"https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
        category:"web",
        overview:"This comprehensive course is designed to teach you how to build powerful and visually appealing websites from scratch. Starting with the basics of HTML, CSS, and JavaScript, you'll gradually advance to modern frameworks like React, Angular, and Next.js. The course also covers backend development with Node.js, Express, and database management using MongoDB or SQL.",
        like:false,
        cart:false,
        skills: [
            "Responsive Web Design",
            "Frontend Development",
            "Backend Development",
            "API integration",
            "Server Managment"
        ],
        syllabus: [
            { title: "HTML5, CSS3, and JavaScript fundamentals, description",description: "Introduction to key concepts and tools." },
            { title: "Frontend framework (React)", description: "Learn how to clean and prepare data for analysis." },
            { title: "Backend development with Node.js and Express", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Database management using MongoDB ", description: "Create compelling visualizations with Tableau and R." },
            { title: "Web hosting, deployment, and version control (Git/GitHub)", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "App Development",
        description:"The Complete App Development Course With Kotlin",
        Price: 1000,
        period:1,
        image:"https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
        category:"app",
        overview:"This course covers the complete app development process, from UI design to deployment. You'll learn to create engaging mobile applications using Flutter, React Native, and Kotlin for Android and iOS platforms.",
        like:false,
        cart:false,
        skills: [
            "Kotlin",
            "Firebase",
            "JetPack Compose",
            "XMl",
            "API integration",
        ],
        syllabus: [
            { title: "Introduction To Kotlin", description: "Introduction to key concepts and tools." },
            { title: "Native development with Kotlin", description: "Learn how to clean and prepare data for analysis." },
            { title: "Database integration with Firebase", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data Visualization", description: "Create compelling visualizations with Tableau and R." },
            { title: "App testing, debugging, and deployment", description: "Apply all skills in a final real-world project." }
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
        image:"/assets/images/Web3.jpg",
        category:"web3",
        overview:"Step into the future of the internet with our Web3 course. Learn the fundamentals of blockchain technology, decentralized applications (dApps), and smart contracts using Ethereum and Solidity.",
        like:false,
        cart:false,
        skills: [
            "Block Chain",
            "Solidity",
            "Deploy smart contracts",
            "Cryptocurrency Basics",
        ],
        syllabus: [
            { title: "Introduction to blockchain and decentralized systems", description: "Introduction to key concepts and tools." },
            { title: "Smart contract development with Solidity", description: "Learn how to clean and prepare data for analysis." },
            { title: "dApp creation using frameworks like Truffle ", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Cryptocurrency wallets and transactions", description: "Create compelling visualizations with Tableau and R." },
            { title: "Security practices for blockchain applications", description: "Apply all skills in a final real-world project." }
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
        image:"/assets/images/Dsa.jpg",
        category:"dsa",
        like:false,
        overview:"This course is tailored to improve your coding logic and problem-solving skills. Master the core concepts of data structures and algorithms, essential for acing technical interviews and coding competitions.",
        cart:false,
        skills: [
            "Problem-solving skills",
            " Coding speed ",
            "Accuracy",
            "Understanding of algorithm optimization",
        ],
        syllabus: [
            { title: "Arrays, linked lists, stacks, and queues", description: "Introduction to key concepts and tools." },
            { title: "Trees, graphs, and hashmaps", description: "Learn how to clean and prepare data for analysis." },
            { title: "Searching, sorting, and recursion techniques", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Dynamic programming and greedy algorithms", description: "Create compelling visualizations with Tableau and R." },
            { title: "Competitive programming tips and practice problems", description: "Apply all skills in a final real-world project." }
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
        image:"/assets/images/python.jpg",
        category:"python",
        like:false,
        overview:"This versatile course covers Python from beginner to advanced levels. Learn to build web applications, automate tasks, perform data analysis, and develop machine learning models using Python’s powerful libraries.",
        cart:false,
        skills: [
            "programming skills",
            "System programming",
            "Problem-solving",
            
        ],
        syllabus: [
            { title: "Introduction To Python ", description: "Introduction to key concepts and tools." },
            { title: "Python Baiscs", description: "Create compelling visualizations with Tableau and R." },
            { title: "Python Control structures", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Object-oriented programming (OOP) concepts", description: "Learn how to clean and prepare data for analysis." },
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
        image:"/assets/images/candc++.jpg",
        category:"cpp",
        like:false,
        overview:"This foundational course offers a deep dive into C and C++, essential for mastering programming concepts and developing efficient software. Learn about data structures, memory management, and object-oriented principles.",
        cart:false,
        skills: [
            "Programming concepts",
            "System programming",
            "Problem-solving ",
        ],
        syllabus: [
            { title: "C/C++ syntax and control structures", description: "Introduction to key concepts and tools." },
            { title: "Pointers, memory allocation, and file handling", description: "Learn how to clean and prepare data for analysis." },
            { title: "Object-oriented programming with C++", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data structures like stacks, queues, and trees", description: "Create compelling visualizations with Tableau and R." },
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
        image:"/assets/images/seo.jpg",
        category:"seo",
        like:false,
        overview:"Master SEO strategies to improve website visibility and rank higher in search engines. This course covers both on-page and off-page optimization techniques along with advanced SEO tools.",
        cart:false,
        skills: [
            "SEO strategies",
            "Ability to improve website ranking and traffic",
            "SEO tools ",
            
        ],
        syllabus: [
            { title: "Keyword research and SEO strategy planning", description: "Introduction to key concepts and tools." },
            { title: "On-page SEO techniques like meta tags and content optimization", description: "Learn how to clean and prepare data for analysis." },
            { title: "Off-page SEO strategies such as backlinks", description: "Use SQL to analyze and extract insights from databases." },
            { title: "SEO analytics tools like Google Analytics and Search Console", description: "Create compelling visualizations with Tableau and R." },
            { title: "Local SEO and voice search optimization", description: "Apply all skills in a final real-world project." }
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
        image:"https://static.vecteezy.com/system/resources/previews/007/448/042/non_2x/concept-of-cybersecurity-information-security-and-encryption-photo.jpg",
        category:"cyber",
        like:false,
        overview:"This course equips you with the knowledge to safeguard systems from cyber threats. Learn about encryption, ethical hacking, and penetration testing to strengthen digital ",
        cart:false,
        skills: [
            "Data Cleaning",
            "Data Visualization",
            "SQL",
            "Spreadsheet Analysis",
            "R Programming"
        ],
        syllabus: [
            { title: "Fundamentals of cybersecurity and cryptography", description: "Introduction to key concepts and tools." },
            { title: "Network security protocols and firewalls", description: "Learn how to clean and prepare data for analysis." },
            { title: "Ethical hacking techniques and penetration testing", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Data protection strategies and secure coding practices", description: "Create compelling visualizations with Tableau and R." },
            { title: "Real-world security threat analysis", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
    {
        name: "AIML",
        description:"The Complete AIML Course",
        Price: 1000,
        period:1,
        image:"https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
        category:"AIML",
        like:false,
        overview:"This course introduces you to the exciting world of AI and ML. You'll explore data science concepts, machine learning models, and neural networks. Learn to build smart applications using popular frameworks like TensorFlow, PyTorch, and Scikit-learn.",
        cart:false,
        skills: [
            "Data Science",
            "training and evaluating ML models",
            "Integrating AIML with Projects",
        ],
        syllabus: [
            { title: "Fundamentals of AI and ML", description: "Introduction to key concepts and tools." },
            { title: "Data preprocessing, cleaning, and visualization", description: "Learn how to clean and prepare data for analysis." },
            { title: "Supervised, unsupervised, and reinforcement learning", description: "Use SQL to analyze and extract insights from databases." },
            { title: "Deep learning with neural networks", description: "Create compelling visualizations with Tableau and R." },
            { title: "Model evaluation, tuning, and deployment", description: "Apply all skills in a final real-world project." }
        ],
        instructors: [
            { name: "Dr. John Doe", bio: "Data Scientist with 10+ years of industry experience." },
            { name: "Jane Smith", bio: "Analytics Consultant specializing in business intelligence." }
        ]
    },
]

export default all_courses;