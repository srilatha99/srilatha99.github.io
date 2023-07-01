export const bio = [
  "Hello there &#128075;",
  "I'm Sri Latha Jammigumpula, a Software Engineer with a specialization in .Net Applications. I have a passion for all things tech and consider myself a curious and enthusiastic developer.",
  "Apart from coding, I love to read, listen to music, and travel.",
  "As a lifelong learner, I'm always seeking new knowledge and experiences to broaden my perspective and enhance my skills.",
  "Thanks for taking the time to learn a little about me!",
];

export const skills = [
  {
    title: "Languages",
    skillName: "C#, Python, SQL",
    color: "1",
    percentage: "80",
  },
  {
    title: "Frameworks/Libraries",
    skillName: ".NET Core, ASP.NET, ADO.NET, Flask, ReactJS",
    color: "6",
    percentage: "80",
  },
  {
    title: "Design",
    skillName: "HTML, CSS, Bootstrap, Javascript, PHP",
    color: "4",
    percentage: "80",
  },
  {
    title: "Version Control",
    skillName: "GitHub, JIRA ",
    color: "7",
    percentage: "70",
  },
  {
    title: "Databases",
    skillName: "MongoDB, Postgres, MYSQL, Oracle , XML, JSON",
    color: "3",
    percentage: "80",
  },
  {
    title: "Libraries",
    skillName: "Pandas, NumPy, Matplotlib, Scikit-learn, TensorFlow",
    color: "5",
    percentage: "60",
  },
  {
    title: "Editor",
    skillName: "Visual Studio, Eclipse, Jupyter Notebook, VS Code",
    color: "6",
    percentage: "70",
  },
];

export const projects = {
  disclaimer:
    "*** All the projects I listed were completed during my college-level development journey. As for my work at the industry level, those projects are confidential and cannot be disclosed.",
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Georgia State University",
    duration: "Jan 2022 - Present",
    subtitle: "Graduate Research Assistant",
    details: [
      "Working with finance authors to retrieve derivaitves(10-k) data of companies from S&P 1500 composite",
      "Analysed data of hundreds of stocks, offering investors valuable insights to help them make investment decisions",
      "Successfully delivered lectures on Principles of Computer Science (Java) and provided tutoring to class of 40 students"
    ],
    tags: ["Bloomberg","Analytics","Excel","Java"],
    icon: "heartbeat",
  },
  {
    title: "TATA Consultancy Services Pvt. Ltd.",
    duration: "Aug 2020 - Nov 2021",
    subtitle: "Software Developer",
    details: [
      "Designed and Developed Web Services using .NET Core and ASP.NET MVC 5.0 for a UK based client",
      "Implemented Restful Web Services which leverage ASP.Net Web API and created entities in Data Access Layer using Entity Framework 6.0 resulting a 70% increase in efficiency",
      "Deployed web services to Azure and seamlessly migrated data from SQL Server to cloud resources",
      "Utilized LINQ to SQL, LINQ to XML, and LINQ to Objects for optimized data retrieval",
      "Performed retrieval, update, modify, display operations on the SQL server database using ADO.NET objects"
    ],
    tags: ["ASP.Net MVC", "ASP.Net Web API", ".Net Core","ADO.NET","LINQ"],
    icon: "qrcode",
  },
  {
    title: "Relecura Technologies PVT LTD",
    duration: "Aug 2019 - July 2020",
    subtitle: "SDE Intern",
    details: [
      "Developed C# scripts to automate tasks in products of Relecura like Techtracker,TechExplorer, Novelty etc.",
      "Built web pages using React and refactored legacy Relecura software products, resulting in 60% increase in efficiency",
      "A full-time job was offered for my outstanding performance in internship"
    ],
    tags: ["C#","ReactJS","JQuery"],
    icon: "group",
  },
];

export const education = [
  {
    title: "Masterss in Computer Science",
    duration: "2022 - 2023",
    subtitle: "Georgia State University",
    details: ["CGPA - 3.9"],
    tags: [
      "Databases and the Web",
      "Advanced Software Engineering",
      "Machine Learning",
      "Web Development",
      "Fundamentals of Data Science",
      "Cryptography",
      
    ],
    icon: "graduation-cap",
  },
  {
    title: "Bachelors in Computer Science and Engineering",
    duration: "2016 - 2020",
    subtitle: "RVR&JC College of Engineering, Guntur",
    details: ["CGPA - 3.58"
    ],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Distributed Systems",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Pre-University in Mathematics Physcics and Chemistry",
    duration: "2014-2016",
    subtitle: "Sri Chaitanya Junior College, Guntur",
    details: [
      ["Score - 970/1000"]
    ],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
  {
    label: "Dev Profiles",
    data: [
     
      {
        text: "GitHub",
        link: "https://github.com/srilatha99",
      },
      {
        text: "HackerRank",
        link: "https://www.hackerrank.com/Srilatha852?hr_r=1",
      },
      {
        text: "LeetCode",
        link: "https://leetcode.com/srilatha852/",
      },
    ],
  },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
      {
        text: "Clone this page",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/vinaysomawat/",
      },
      {
        text: "Twitter",
        link: "https://twitter.com/thesigmakid",
      },
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
     
    ],
  },
];

const gitUserName = "srilatha99";
const mediumUserName = "vinaysomawat";

export const URLs = {
  mediumURL: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${mediumUserName}`,
};
