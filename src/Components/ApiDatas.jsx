import {GitHub, Link} from '@mui/icons-material/';

const ServiceDatas = [
    {
        id: 1,
        title: "Website Design",
        description: "I create custom any type of websites like Blog website, E-commerce Website, News Portal Website, Business Website, Agency Website, My code will be pixel perfect and fully mobile and SEO Friendly, and also it will be accordion to your recommendation.",
    },
    {
        id: 2,
        title: "Setup WordPress Website",
        description: "If you want to create a WordPress (CMS) website, I am here to help you choose and create the best WordPress website with low cost. I create website with free theme and premium theme, that will be accordion to client's recommendation.",
    },
    {
        id: 3,
        title: "Search Engine Optimization (SEO)",
        description: "Do you want to grow your online business and increase customers, sales, and brand awareness by search engines, you need to optimize your website for search engines by on-page optimization, off-page optimization and technical optimization, I will help you rank your website at the top of any search engines like Google, Bing, Yahoo etc.",
    },
    {
        id: 4,
        title: "Local SEO",
        description: "Do you have local business? you need to add your business to google my business profile (GMB) Local SEO helps you get local customers from your specific city of a location and its online presence to improve visibility and attract more targeted traffic from local search queries."
    },
    {
        id: 5,
        title: "On-page SEO",
        description: "On-page SEO involves implementing optimization techniques directly on the individual web pages and posts of a website. On-page SEO helps search engine understand better about a website. It is massive factors to increase search engine rankings and attract organic traffic to a website."
    },
    {
        id: 6,
        title: "Off-Page SEO",
        description: "Off-page SEO is optimizing activities that take place outside of the website itself. The primary goal is to enhance search engine rankings through building backlinks from other websites such as guest posting, profile backlink and engaging on social media platforms and to boost the website's authority and credibility in the eyes of search engines, by its website gets more traffic and search engine rankings."
    },
    {
        id: 7,
        title: "Technical SEO",
        description: "Technical SEO helps search engine-bot crawl, index, and understand the content of a website more effectively by optimizing Website Crawlability & Indexation, Website Speed and Performance Optimization, Mobile-Friendly Optimization, URL Structure, Schema Markup, Site Architecture & Internal Linking, HTTPS & Website Security, Structured Data & Search Console, Technical Auditing and Monitoring."
    },
]

//Testimonials Area
const TestimonialsDatas = [
    {
        id: 1,
        title: "Rasim",
        imgSrc: './images/testimonials/rasim.jpg',
        description: "The SEO service I received was exceptional. He implemented effective strategies that boosted my website's visibility and organic traffic significantly. I highly recommend this SEO service for anyone.",
        
    },
    {
        id: 2,
        title: "Alive",
        imgSrc: './images/testimonials/alive.jpg',
        description: "I had an outstanding experience with the SEO service provided. Their implementation of effective strategies greatly enhanced my website's visibility and organic traffic. I wholeheartedly recommend this SEO service to anyone in need.",
    },
    {
        id: 3,
        title: "Aspac",
        imgSrc: './images/testimonials/aspac.jpg',
        description: "First of all, I inform them so many thanks! for providing me good SEO services. Those who are seeking the best digital marketing service provider it could be best for them.",
    },
    {
        id: 4,
        title: "Jhangan",
        imgSrc: './images/testimonials/jhangan.jpg',
        description: "I am a blogger I made them create a WordPress based website for my blogging website. They are fully talented on WordPress (CMS). Thanks, the team members and also I am getting 24/7 support from them.",
    },
    {
        id: 5,
        title: "Sulyman",
        imgSrc: './images/testimonials/sulyman.jpg',
        description: "I highly recommend that website designing service provider is the best in online. I created with him a news portal website for my business. Thank you so much their him. They worked accordion to my recommendation.",
    },
    {
        id: 6,
        title: "Tharger",
        imgSrc: './images/testimonials/tharger.jpg',
        description: "Hi, I am a youtuber and entrepreneur sometimes I need graphic designer to create thumbnails, banner and infographic for my business, etc. They are giving best quality full services. Thanks (Sahil).",
    },
];

const ProjectsApi = [
    {
        id: 1,
        title: "Car Rent Platform",
        imgSrc: "./images/projects/carrent.png",
        description: "This platform is a web-based service enabling users to effortlessly search, book, and manage car rentals from multiple providers. It offers a convenient and efficient solution for all transportation needs.",
        altTag: 'Sahil Web Developer Project',
        source_code_link: "https://github.com/Sahilitgithub/CarRentPlatform.git",
        btnIcon: <GitHub/>,
        popupTitle: 'Working on the project...',
        tags: [
            {
              name: "Html",
            },
            {
              name: "tailwind-Css",
            },
            {
              name: "React.js",
            },
            {
              name: "MongoDB",
            },
          ],
    },
    {
        id: 2,
        title: "Job-It Platform",
        imgSrc: "./images/projects/jobit.png",
        description: "The web application that empowers users to search and discover job openings, explore estimated salary ranges for different positions, located available jobs based on their current location. It offers a comprehensive solution for job seekers.",
        altTag: 'Job-It Platform',
        source_code_link: "https://github.com/Sahilitgithub/JobItPlatform.git",
        btnIcon: <GitHub/>,
        popupTitle: 'Working on the project...',
        tags: [
            {
                name: 'Html',
            },
            {
                name: 'Tailwindcss',
            },
            {
                name: 'Next.js',
            },
            {
                name: 'WordPress',
            },
        ]
    },
    {
        id: 3,
        title: "Hotel Platform",
        imgSrc: "./images/projects/tripguide.png",
        description: "It is a comprehensive travel booking site. that allows users to book flights, hotels, & rental cars, and offers curated recommendations for popular destinations.",
        altTag: 'Sahil Web Developer Project',
        source_code_link: "https://github.com/Sahilitgithub/HotelPlatform.git",
        btnIcon: <GitHub/>,
        popupTitle: 'Working on the project...',
        tags: [
            {
                name: 'Html/CSS',
            },
            {
                name: 'React.js',
            },
            {
                name: 'Next.js',
            },
            {
                name: 'php',
            },
        ]
    },
    {
        id: 4,
        title: "Portfolio App",
        imgSrc: "./images/projects/Sahil-it-portfolio.png",
        description: "Here I am providing comprehensive services from this platform. You have come into right place if you have any needs start now to chat with us and take your desired project from me.",
        altTag: 'Sahil Website & SEO Agency',
        source_code_link: "https://web.websahilit.com/",
        btnIcon: <Link/>,
        popupTitle: 'It is almost done',
        tags: [
            {
                name: 'Html/CSS',
            },
            {
                name: 'Tailwindcss',
            },
            {
                name: 'Reactjs',
            },
            {
                name: 'Vitejs',
            },
            {
                name: '3D Website',
            },
            
        ]
    },
    {
        id: 5,
        title: "E-commerce Store",
        imgSrc: "./images/projects/sahil-ecommerce-website.png",
        description: "It is a e-commerce based website inside this site, intregated feature-product, single-page, payment-method functtional and lot more. fully responsive user-friendly and fast loaded, etc.",
        altTag: 'Sahil Web Developer Project',
        source_code_link: "https://github.com/Sahilitgithub/E-commerceStore.git",
        btnIcon: <Link/>,
        popupTitle: 'I will live within a few days..',
        tags: [
            {
                name: 'Html/CSS',
            },
            {
                name: 'React.js',
            },
            {
                name: 'RestApi',
            },
            {
                name: 'Database',
            },
        ]
    },
    {
        id: 6,
        title: "Blogging Site",
        imgSrc: "./images/projects/sahil-it-blogsite.png",
        description: "It is a blog based website where is posted article about digital marketing tools stragies, online business, search enigne optimizaton (SEO) and graphic design, etc.",
        altTag: 'Sahil Web Developer Project',
        source_code_link: "https://websahilit.com",
        btnIcon: <Link/>,
        popupTitle: 'It will be lived within a few days' ,
        tags: [
            {
                name: 'SEO',
            },
            {
                name: 'Google Search Console',
            },
            {
                name: 'Google Analytics',
            },
            {
                name: 'WordPress',
            },
        ]
    },
];

const freequentlyAskQuestion = [
    {
        id: 1,
        question: 'What services do you provide?',
        answer: 'I am providing (Services) Webiste Design, Search Engine Optimization (SEO), WordPress Website Setup and, lot more.'
    },
    {
        id: 3,
        question: 'What is your prices?',
        answer: 'Actually, price depends on the package which service package you are willing to take from me. and also, I offer custom package according to your needs.'
    },
    {
        id: 4,
        question: 'What is your delivery time?',
        answer: 'Actually it depends on your project.'
    },
    {
        id: 5,
        question: 'How to get service?',
        answer: "The process of my working is very powerful. first of all, i take ideas from client's business and recommendations and then. We try to find the solution of clients. and also, i discuss with client about their business directly via messenger or video chat."
    },
];

export {ServiceDatas, TestimonialsDatas, ProjectsApi, freequentlyAskQuestion};
