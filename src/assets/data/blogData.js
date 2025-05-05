const blogDatas = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
    title: "Building RESTful APIs with Express",
    description: "Learn how to create RESTful APIs using Express.js.",
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/211587125/original/2723345b9d69a4d505cbd28b67193f935ea981a8/create-a-custom-api-in-node-js-and-express-js.png",

    author: "David Wilson",
    avatar: "https://cdn-icons-png.flaticon.com/512/5556/5556512.png",
    date: "2023-10-06",
    content:
      "This article will guide you through the process of building RESTful APIs using Express.js, covering routing, middleware, and error handling.",
  },
  {
    id: 7,
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
  },
  {
    id: 8,
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
  },
  {
    id: 9,
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
  },
  {
    id: 10,
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
  },
];

export default blogDatas.sort((a, b) => new Date(b.date) - new Date(a.date));
