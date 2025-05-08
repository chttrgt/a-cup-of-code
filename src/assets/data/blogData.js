const blogDatas = [
  {
    id: "1",
    title: "How to learn React",
    description: "React is a JavaScript library for building user interfaces.",
    image:
      "https://www.tatvasoft.com/blog/wp-content/uploads/2022/07/Why-Use-React-1280x720.jpg",
    author: "John Doe",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    date: "2023-10-01",
    content:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. React allows developers to create large web applications that can change data, without reloading the page. Its key feature is the ability to build reusable UI components.",
    likeCount: 35,
    commentCount: 61545455,
  },
  {
    id: "2",
    title: "Understanding JavaScript Closures",
    description: "Closures are a powerful feature of JavaScript",
    image:
      "https://antondevtips.com/_next/image?url=https%3A%2F%2Fantondevtips.com%2Fmedia%2Fcovers%2Fjavascipt%2Fcover_js_closures.png&w=3840&q=100",
    author: "Jane Smith",
    avatar:
      "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
    date: "2023-10-02",
    content:
      "JavaScript closures are a fundamental concept that allows for powerful programming patterns. They enable functions to maintain access to their lexical scope even when the function is executed outside that scope.",
    likeCount: 15,
    commentCount: 16,
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox",
    description: "A comparison of CSS Grid and Flexbox for layout design.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQE_es4z5pMIZA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1714892538827?e=2147483647&v=beta&t=uWDxr1ZEK1CDDjf_e-qs8PcvCeGEhVXcoDhuV9Fe9SI",
    author: "Alice Johnson",
    avatar:
      "https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png",
    date: "2023-10-03",
    content:
      "CSS Grid and Flexbox are two powerful layout systems in CSS. This article explores their differences and when to use each.",
    likeCount: 33,
    commentCount: 14,
  },
  {
    id: "4",
    title: "Node.js for Beginners",
    description: "An introduction to Node.js and its ecosystem.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20241016105256460477/NodeJS-Tutorial.webp",

    author: "Michael Brown",
    avatar:
      "https://t3.ftcdn.net/jpg/03/30/78/62/360_F_330786249_i7inRCNEHz2FL88FrHvg55dgVel3gLYF.jpg",
    date: "2023-10-04",
    content:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications.",
    likeCount: 7,
    commentCount: 1,
  },
  {
    id: "5",
    title: "Understanding Asynchronous JavaScript",
    description: "A deep dive into callbacks, promises, and async/await.",
    image:
      "https://i.ytimg.com/vi/_IGIQ10yX1o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAWf5IeCB_4adjZzMEzOLc4SjrleA",

    author: "Emily Davis",
    avatar:
      "https://img.freepik.com/free-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg",
    date: "2023-10-05",
    content:
      "Asynchronous JavaScript is essential for handling operations that take time to complete, such as API calls. This article covers callbacks, promises, and the async/await syntax.",
    likeCount: 45,
    commentCount: 88,
  },
  {
    id: "6",
    title: "Building RESTful APIs with Express",
    description: "Learn how to create RESTful APIs using Express.js.",
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/211587125/original/2723345b9d69a4d505cbd28b67193f935ea981a8/create-a-custom-api-in-node-js-and-express-js.png",

    author: "David Wilson",
    avatar: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
    date: "2023-10-06",
    content:
      "This article will guide you through the process of building RESTful APIs using Express.js, covering routing, middleware, and error handling.",
    likeCount: 15,
    commentCount: 28,
  },
  {
    id: "7",
    title: "Introduction to TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds static typing.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1644689412592/ix473Yfs6.png",

    author: "Chris Evans",
    avatar:
      "https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg",
    date: "2023-10-07",
    content:
      "TypeScript enhances JavaScript by adding static types, which can help catch errors early and improve code quality.",
    likeCount: 55,
    commentCount: 71,
  },
  {
    id: "8",
    title: "Exploring the MERN Stack",
    description:
      "A guide to building full-stack applications with MongoDB, Express, React, and Node.js.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQED03quaX3Qxg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1728185646941?e=2147483647&v=beta&t=5ZHHHPxpw3wArT-bn_hYD54ScauUJT0bRViD8fvJzXU",

    author: "Laura Green",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02c52-wYtk8AxTcU7KtpKNsOQjlXpj_ZyyQ&s",
    date: "2023-10-08",
    content:
      "This article provides an overview of the MERN stack and how to build full-stack applications using MongoDB, Express, React, and Node.js.",
    likeCount: 5000,
    commentCount: 100,
  },
  {
    id: "9",
    title: "CSS Animations and Transitions",
    description:
      "Learn how to create smooth animations and transitions with CSS.",
    image:
      "https://cdn.foreachnext.com/wp-content/uploads/2025/04/css-animations-v-transitions-jpg-1024x538.webp?strip=all&lossy=1&ssl=1",

    author: "Mark Taylor",
    avatar:
      "https://st3.depositphotos.com/3431221/12963/v/450/depositphotos_129635888-stock-illustration-man-avatar-icon-hipster-character.jpg",
    date: "2023-10-09",
    content:
      "CSS animations and transitions allow you to create dynamic and engaging user experiences. This article covers the basics of implementing animations and transitions in your web projects.",
    likeCount: 100,
    commentCount: 48,
  },
  {
    id: "10",
    title: "JavaScript ES6 Features",
    description: "Explore the new features introduced in ES6.",
    image:
      "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F80ijyr830p5h9q61kfwv.png",

    author: "Sarah Connor",
    avatar:
      "https://www.shutterstock.com/image-vector/vector-bright-portrait-beautiful-brunette-600nw-2452267975.jpg",
    date: "2023-10-10",
    content:
      "This article explores the new features introduced in ES6, including let and const, arrow functions, template literals, and more. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, aut sint nobis ipsam non ducimus at! Et molestiae assumenda aliquam unde corrupti earum minus quasi nemo sunt, ipsam non quidem deleniti, fugit optio beatae dolor labore ducimus dolore accusamus? Maxime blanditiis alias debitis, minima esse laborum cumque quod, corporis optio ducimus et similique odio inventore. Magni provident ullam repellat sequi dolor fuga accusamus, perspiciatis assumenda atque optio sit doloremque reprehenderit. Dolores impedit soluta quaerat beatae labore. Repudiandae explicabo expedita voluptatibus. Sint quam itaque quis unde, laudantium quo reiciendis hic dicta placeat est nemo possimus iure magnam porro nihil cupiditate vel?",
    likeCount: 5,
    commentCount: 11,
  },
  {
    id: "11",
    title: "Web Accessibility Best Practices",
    description:
      "Learn how to make your web applications accessible to all users.",
    image:
      "https://reciteme.com/wp-content/uploads/2023/12/Top-10-Web-Accessibility-Best-Practices-Thumbnail.jpg",
    author: "Sarah Connor",
    avatar:
      "https://www.shutterstock.com/image-vector/vector-bright-portrait-beautiful-brunette-600nw-2452267975.jpg",
    date: "2023-10-11",
    content:
      "Web accessibility is crucial for ensuring that all users, including those with disabilities, can use your web applications effectively. This article discusses best practices for making your web applications accessible.",
    likeCount: 20,
    commentCount: 5,
  },
  {
    id: "12",
    title: "Introduction to GraphQL",
    description: "Learn about GraphQL and how it differs from REST APIs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFBpGPp0RsHfAb2wc2jew7PCVn5j7g-qrQg&s",
    author: "John Doe",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    date: "2023-10-12",
    content:
      "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. This article explains how GraphQL differs from REST APIs and its advantages.",
    likeCount: 30,
    commentCount: 12,
  },
  {
    id: "13",
    title: "Building Progressive Web Apps (PWAs)",
    description:
      "Learn how to build Progressive Web Apps that provide a native app-like experience.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*bNZI3TPHZ9C4C1LzkJOymA.jpeg",

    author: "Jane Smith",
    avatar:
      "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
    date: "2023-10-13",
    content:
      "Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver an app-like experience. This article covers the key features and benefits of PWAs.",
    likeCount: 25,
    commentCount: 8,
  },
  {
    id: "14",
    title: "JavaScript Design Patterns",
    description:
      "Explore common design patterns used in JavaScript development.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*vWgYYgudyihZwhwlKpkU7g.png",
    author: "Laura Green",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02c52-wYtk8AxTcU7KtpKNsOQjlXpj_ZyyQ&s",
    date: "2023-10-14",
    content:
      "Design patterns are reusable solutions to common problems in software design. This article explores some of the most common design patterns used in JavaScript development.",
    likeCount: 40,
    commentCount: 20,
  },
  {
    id: "15",
    title: "Introduction to Docker",
    description: "Learn about Docker and containerization.",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1669175238565/PCz023ZoD.png",
    author: "Mark Taylor",
    avatar:
      "https://st3.depositphotos.com/3431221/12963/v/450/depositphotos_129635888-stock-illustration-man-avatar-icon-hipster-character.jpg",
    date: "2023-10-15",
    content:
      "Docker is a platform that enables developers to automate the deployment of applications inside lightweight containers. This article provides an introduction to Docker and its benefits.",
    likeCount: 60,
    commentCount: 30,
  },
  {
    id: "16",
    title: "Understanding WebSockets",
    description:
      "Learn about WebSockets and how they enable real-time communication.",
    image:
      "https://www.pubnub.com/og/?text=WebSockets%20vs%20REST:%20Understanding%20the%20Difference&style=blue&img=6",
    author: "Chris Evans",
    avatar:
      "https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg",
    date: "2023-10-16",
    content:
      "WebSockets are a protocol for full-duplex communication channels over a single TCP connection. This article explains how WebSockets work and their use cases.",
    likeCount: 70,
    commentCount: 40,
  },
  {
    id: "17",
    title: "Introduction to Firebase",
    description:
      "Learn about Firebase and how it can help you build web applications.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUyv5yvS1sNqkuue8W0nfaP5WdXxqHl07jA&s",
    author: "Michael Brown",
    avatar:
      "https://t3.ftcdn.net/jpg/03/30/78/62/360_F_330786249_i7inRCNEHz2FL88FrHvg55dgVel3gLYF.jpg",
    date: "2023-10-17",
    content:
      "Firebase is a platform developed by Google for creating mobile and web applications. It provides a variety of tools and services to help developers build high-quality apps.",
    likeCount: 80,
    commentCount: 50,
  },
  {
    id: "18",
    title: "Introduction to Machine Learning",
    description:
      "Learn about the basics of machine learning and its applications.",
    image:
      "https://static.kanopy.com/cdn-cgi/image/fit=cover,height=540,width=960/https://static-assets.kanopy.com/video-images/138c8a73-6521-4251-a22d-5e71fa74ce76.jpeg",
    author: "Cihat Turgut",
    avatar: "https://avatars.githubusercontent.com/u/184358742?v=4",
    date: "2025-05-08",
    content:
      "Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data. This article provides an introduction to machine learning concepts and applications.",
    likeCount: 90,
    commentCount: 60,
  },
  {
    id: "19",
    title: "Introduction to Blockchain Technology",
    description:
      "Learn about blockchain technology and its potential applications.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQEqCNi2QVYeiw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700629451839?e=2147483647&v=beta&t=Rg9P3YXJzpLV_jiB0KyHogANISrz3wi8XRQBsaZ_p-o",
    author: "David Wilson",
    avatar: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
    date: "2023-10-19",
    content:
      "Blockchain technology is a decentralized digital ledger that records transactions across many computers. This article explores the basics of blockchain technology and its potential applications.",
    likeCount: 100,
    commentCount: 70,
  },
  {
    id: "20",
    title: "Introduction to Cloud Computing",
    description: "Learn about cloud computing and its benefits for businesses.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D12AQE-taKuq6JCew/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691564771764?e=2147483647&v=beta&t=VeTrK2IkAX6kO0B-5C1NKdV_V7-oykMgeos8j_3EsVs",
    author: "Cihat Turgut",
    avatar: "https://avatars.githubusercontent.com/u/184358742?v=4",
    date: "2023-10-18",
    content:
      "Cloud computing is the delivery of computing services over the internet. This article provides an overview of cloud computing and its benefits for businesses.",
    likeCount: 110,
    commentCount: 80,
  },
  {
    id: "21",
    title: "Introduction to DevOps",
    description:
      "Learn about DevOps and how it can improve software development processes.",
    image:
      "https://www.whizlabs.com/blog/wp-content/uploads/2019/10/devops-introduction.jpg",
    author: "Mark Taylor",
    avatar:
      "https://st3.depositphotos.com/3431221/12963/v/450/depositphotos_129635888-stock-illustration-man-avatar-icon-hipster-character.jpg",
    date: "2023-10-20",
    content:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). This article explores the principles of DevOps and its benefits for software development.",
    likeCount: 120,
    commentCount: 90,
  },
  {
    id: "22",
    title: "Introduction to Cybersecurity",
    description:
      "Learn about cybersecurity and how to protect your digital assets.",
    image:
      "https://bbb-main.blr1.digitaloceanspaces.com/uploads/course/introduction-to-cybersecurity-1720530832069.jpeg",
    author: "Chris Evans",
    avatar:
      "https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg",
    date: "2023-10-21",
    content:
      "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. This article provides an overview of cybersecurity and its importance in today's digital world.",
    likeCount: 130,
    commentCount: 100,
  },
  {
    id: "23",
    title: "Artificial Intelligence",
    description:
      "Learn about artificial intelligence and its applications in various fields.",
    image:
      "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
    author: "Emily Davis",
    avatar:
      "https://img.freepik.com/free-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg",
    date: "2023-10-22",
    content:
      "Artificial intelligence (AI) is the simulation of human intelligence processes by machines. This article explores the basics of AI and its applications in various fields.",
    likeCount: 140,
    commentCount: 110,
  },
  {
    id: "24",
    title: "Introduction to Quantum Computing",
    description:
      "Learn about quantum computing and its potential to revolutionize technology.",
    image:
      "https://miro.medium.com/v2/resize:fit:1200/1*VweJuj7drkYkoR3bnj_v2Q.png",
    author: "Alice Johnson",
    avatar:
      "https://png.pngtree.com/png-vector/20240910/ourmid/pngtree-business-women-avatar-png-image_13805764.png",
    date: "2023-10-23",
    content:
      "Quantum computing is a type of computation that takes advantage of quantum mechanics. This article provides an overview of quantum computing and its potential to revolutionize technology.",
    likeCount: 150,
    commentCount: 120,
  },
  {
    id: "25",
    title: "Introduction to Augmented Reality",
    description:
      "Learn about augmented reality and its applications in various fields.",
    image: "https://i.ytimg.com/vi/ngkYWGPojQA/maxresdefault.jpg",
    author: "Jane Smith",
    avatar:
      "https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg",
    date: "2023-03-14",
    content:
      "Augmented reality (AR) is an interactive experience that combines the real world with computer-generated content. This article explores the basics of AR and its applications in various fields.",
    likeCount: 160,
    commentCount: 130,
  },
  {
    id: "26",
    title: "Introduction to Virtual Reality",
    description:
      "Learn about virtual reality and its applications in various fields.",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240627172114/Virtual-reality.webp",
    author: "Michael Brown",
    avatar:
      "https://t3.ftcdn.net/jpg/03/30/78/62/360_F_330786249_i7inRCNEHz2FL88FrHvg55dgVel3gLYF.jpg",
    date: "2023-02-23",
    content:
      "Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. This article provides an overview of VR and its applications in various fields.",
    likeCount: 170,
    commentCount: 140,
  },
  {
    id: "27",
    title: "Introduction to Internet of Things (IoT)",
    description:
      "Learn about the Internet of Things and its applications in various fields.",
    image:
      "https://lh6.googleusercontent.com/proxy/GyEL6n_47X2GgoTc07uYc81meA6OqBFZ2RZa5yrSQT9a0gty36AtRxszPqODXXGmNSaSK53E5a7FEacTNIUGEw3pDuiB346JT7452GIQa6nUx__N0vGOnhGwUaWXm3W1Snqay5Esfa4E1qOuFX0f",
    author: "Laura Green",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02c52-wYtk8AxTcU7KtpKNsOQjlXpj_ZyyQ&s",
    date: "2023-10-20",
    content:
      "The Internet of Things (IoT) refers to the interconnection of everyday objects to the internet. This article explores the basics of IoT and its applications in various fields.",
    likeCount: 180,
    commentCount: 150,
  },
];

export default blogDatas.sort((a, b) => new Date(b.date) - new Date(a.date));
