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
    " ",
  webProjects: [
    {
      projectName: "Multi-Dimensional-Database-Search",
      image: "images/programmingdiaries.png",
      summary:
        "A Web-based search engine that provides searching capabilities on any multi-dimensional data resource such as colleges, automobiles, etc. The Web application works on data coming from different domains describing entities in the respective domains.",
      preview: "https://github.com/srilatha99/Multi-Dimensional-Database-Search",
      techStack: ["HTML","CSS","Javascript","GraphQL","Python"],
    },
    {
      projectName: "Complaint Management System",
      image: "images/findyourbank.png",
      summary:
      "Developed an Application which records the complaint, assigns an employee to the complaint, escalates the complaint and return the status of a complaint. MYSQL database is used to store details of the complaint. Used HTML and CSS for designing UI which includes various scenarios like Homepage, Admin page, customer page and user page. Processed user-input using PHP to record, assign, and escalate and to return status of a complaint",
      preview: "https://github.com/srilatha99/Complaint-Management-System",
      techStack: ["PHP","JavScript","CSS","HTML","MYSQL"],
    },
  ],
  softwareProjects: [
    {
      projectName: "BulkyBook CRUD Application",
      image: "images/pizzaorderchatbot.png",
      summary:
        "Asp. Net MVC Project for CRUD operations on a MS SQL server databse. This project performs create, insert, update, delete opearations on MS SQL database(books database) and it uses model-view-controller architecture.",
      preview: "https://github.com/srilatha99/BulkyBook/tree/master/BulkyBookWeb",
      techStack: [".Net","ASP.Net MVC", "MS SQL Server"],
    },
    {
      projectName: "MagicVilla_API CRUD Application",
      image: "images/whatsappbot.jpg",
      summary:
        "Restful Web APIs which allows CRUD operations on the data. This project uses httppost,httpdelete, httpput, httpget operations to allow CRUD operations on the database of Villas",
      preview: "https://github.com/srilatha99/MagicVilla_API/tree/master/MagicVilla_VillaAPI",
      techStack:[".Net","ASP.Net Web API", "MS SQL Server"],
    },
    {
      projectName: "Retrieving data using ADO.Net objets",
      image: "images/billgenerator.png",
      summary:
        "In this project object data can be retrieved by calling stored procedures using System.sql in the sql server management studio and records can be be searched based on Id number.",
      preview: "https://github.com/srilatha99/ADO.NETCore",
      techStack: ["ADO.Net",".Net Core"],
    },
  ],
  androidProjects: [
    {
      projectName: "Vehicle-accident-Risk-prediction-Model",
      image: "images/nitwcse.jpg",
      summary:
        "Created a machine learning based model which aims at finding whether the vehicle is at the risk of accident by analysing real-life accidents data using Adaboost Classification Algorithm.",
      preview: "https://github.com/srilatha99/Vehicle-accident-Risk-prediction-Model",
      techStack: ["Python", "SMOTE", "One Hot Encoding"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "ML model that automates the process of screening large number of applications received by DonorsChoose.org and determines if the project can be offered funding",
      preview: "https://github.com/srilatha99/DonorsChoose.org-Application-screening-Python-Google-Collab-Pandas-Matplotlib-Scikit-learn",
      techStack: ["Python","KNN","Naive Bayes"],
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
    duration: "Sep 2019 - Nov 2021",
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
    duration: "May 2019 - Aug 2019",
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
    title: "Masters in Computer Science",
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
    ],
  },
  {
    label: "Social Profiles",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/srilathajammigu/",
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
