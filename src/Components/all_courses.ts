// import Categories from "./Categories";


export type Course = {
    name: string;
    description: string;
    Price: number;
    period: number;
    image: string;
    category: string;
    like:boolean;
    cart:boolean;
}


 const all_courses:Course[]=[
    {
        name: "WebDevlopment",
        description:"The Complete Html Css Js Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"web",
        like:false,
        cart:false
    },
    {
        name: "AppDevelopment",
        description:"The Complete Java Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"app",
        like:false,
        cart:false
    },
    {
        name: "Web3 Development",
        description:"The Complete Solidity Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"web3",
        like:false,
        cart:false
    },
    {
        name: "DSA skillset",
        description:"The Complete DSA Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"dsa",
        like:false,
        cart:false
    },
    {
        name: "Python Programming",
        description:"The Complete Python Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"python",
        like:false,
        cart:false
    },
    {
        name: "C and C++ Programming",
        description:"The Complete C and C++ Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"cpp",
        like:false,
        cart:false
    },
    {
        name: "SEO",
        description:"The Complete SEO Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"seo",
        like:false,
        cart:false
    },
    {
        name: "Cyber Security",
        description:"The Complete Cyber Security Course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"cyber",
        like:false,
        cart:false
    },
    {
        name: "AI/ML",
        description:"The Complete AI/ML course",
        Price: 1000,
        period:1,
        image:"assets/images/Group.webp",
        category:"AI/ML",
        like:false,
        cart:false
    },
]

export default all_courses;