import { SiCloudinary } from "react-icons/si";

export const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const PROJECTS = [
    {
        title: "E-Commerce Web App (Client Project)",
        description:
            "Developed an online catalog with search, cart management, and admin controls to streamline the shop’s product showcase. Collaborated directly with the client to gather requirements and delivered a clean, reliable platform.",
        image:
            "https://images.unsplash.com/photo-1557821552-17105176677c",
        github: "https://github.com/shivaguru10/sabarish_metals_v2",
        live: "https://sabarish-metals-v2-y7ki.vercel.app/",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "postgreSQL", "Prisma ORM", "Cloudinary", "NextAuth", "vercel",],
    },
    {
        title: "E-Commerce Product Dashboard",
        description:
            "Built an admin dashboard enabling quick product additions, updates, and deletions with real-time interface updates. Focused on efficient workflows, clean structure, and a smooth management experience across devices.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        github: "https://github.com/shivaguru10/sabarish_metals_v2",
        live: "https://sabarish-metals-v2-y7ki.vercel.app/admin",
        tags: ["React.js", "Express.js", "CRUD", "Data Modeling"],
    },
    {
        title: "Personal Portfolio Website",
        description:
            "Designed and developed a personal portfolio highlighting skills, experience, and projects. Enhanced layout, content, and visuals based on reviewer feedback to create a polished professional presence.",
        image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
        github: "https://github.com/shivaguru10/professional_portfolio",
        live: "https://shivaguru10.github.io/professional_portfolio/",
        tags: ["React.js", "GSAP", "Tailwind CSS", "Framer Motion"],
    },
    {
        "title": "Task Manager Application",
        "description": "Built a task management web application that allows users to create, update, categorize, and track tasks efficiently. Implemented a clean UI, smooth interactions, and essential productivity features to deliver a seamless task-handling experience.",
        "image": "https://images.unsplash.com/photo-1551650975-87deedd944c3",
        "github": "https://github.com/shivaguru10/task_manager",
        "live": "https://task-manager-nu-one-34.vercel.app/",
        "tags": ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"]
    }, {
        title: "KidQuiz - Interactive Learning App",
        description:
            "Developed a cross-platform educational application tailored for children of different age groups. Engineered features including AI-generated quizzes, engaging Lottie animations, offline accessibility, and gamified progression with badges and leaderboards.",
        image:
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
        github: "https://github.com/shivaguru10/quiz_app",
        live: "https://expo.dev/@shivaguru10/quiz_app",
        tags: ["React Native", "TypeScript", "Expo", "Zustand", "Lottie"],
    },
    {
        title: "HackerRank Exam Environment Clone",
        description:
            "Built a precise front-end replica of the HackerRank coding assessment platform. Integrated the Monaco Editor, a 1-hour exam timer, and a camera access feature to simulate a proctored environment for realistic interview practice.",
        image:
            "https://images.unsplash.com/photo-1605379399642-870262d3d051",
        github: "https://github.com/shivaguru10/test",
        live: "https://shivaguru10.github.io/test",
        tags: ["Next.js 14", "Tailwind CSS v4", "Monaco Editor", "React"],
    }


];

export const SKILLS = [
    {
        title: "Frontend",
        items: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI Design"],
    },
    {
        title: "Backend & APIs",
        items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware Logic", "Server-side Rendering"],
    },
    {
        title: "Databases & Storage",
        items: ["MongoDB", "MySQL", "Data Modeling"],
    },
    {
        title: "Developer Tools",
        items: ["Git & GitHub", "Chrome DevTools", "Postman", "Netlify", "Render", "Vercel", "Cursor", "GitHub Copilot", "Antigravity"],
    },
];

export const EXPERIENCE_EDUCATION = [
    {
        title: "Full-Stack Developer Intern",
        place: "Sri Max Company, Sivakasi",
        time: "06/2024 – 07/2024",
        description:
            "Developed responsive UI components with React.js and integrated REST APIs using Axios/Fetch. Built backend routes using Node.js & Express.js. Collaborated in an Agile setup with daily stand-ups and handled client calls.",
    },
    {
        title: "B.Tech in Information Technology",
        place: "PSNA College of Engineering and Technology, Dindigul",
        time: "11/2021 – 07/2025",
        description:
            "Graduated with a B.Tech in Information Technology, maintaining a final CGPA of 7.3. Focused on core software engineering principles and web technologies.",
    },
];
