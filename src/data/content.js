const SiteContent = {
    header: {
      logo: "/img/logo-dark.png",
      siteTitle: "Carlos Aviles Developer",
      footer: "2019 Carlos Developer",
      nav: [
        {
          label: "Home",
          url: "home",
          isStatic: false,
          icon: "icon-home"
        },
        {
          label: "About",
          url: "about",
          isStatic: false,
          icon: "icon-user-following"
        },
        {
          label: "Skills",
          url: "skills",
          isStatic: false,
          icon: "icon-briefcase"
        },
        {
          label: "Experience",
          url: "experience",
          isStatic: false,
          icon: "icon-graduation"
        },
        {
          label: "Portfolio",
          url: "portfolio",
          isStatic: false,
          icon: "icon-layers"
        },
        /*
        {
          label: "Code",
          url: "https://github.com/carlosavilesbuitrondeveloper",
          isStatic: true,
          icon: "icon-social-github"
        },
        */
        {
          label: "Contact",
          url: "contact",
          isStatic: false,
          icon: "icon-bubbles"
        }
      ]
    },
    home: {
      sectionTitle: "Home",
      name: "Carlos Aviles Buitron",
      title: "I'm a full-stack JavaScript Developer",
      img: "/img/0.jpg",
      social: [
        {
          name: "github",
          link: "https://github.com/carlosavilesbuitrondeveloper",
          icon: "fa-github",
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/carlosavilesbuitron/",
          icon: "fa-linkedin",
        },
        {
          name: "instagram",
          link: "https://www.instagram.com/carlos.socializes/",
          icon: "fa-instagram",
        },
        {
          name: "facebook",
          link: "https://www.facebook.com/carlos.avilesbuitron.3",
          icon: "fa-facebook",
        }
      ]
    },
    about: {
      sectionTitle: "About Me",
      skills: [
        {
          name: "HTML/CSS",
          value: 100,
          colorHex: "#FFD15C",
          colorRGB: "rgb(255, 209, 92)",
        },
        {
          name: "JavaScript",
          value: 100,
          colorHex: "#FF4C60",
          colorRGB: "rgb(255, 76, 96)",
        },
        {
          name: "Databases",
          value: 100,
          colorHex: "#6C6CE5",
          colorRGB: "rgb(108, 108, 229)",
        },
      ],
      cvUrl: "https://cdn.carlos-developer.com/files/Resume.pdf",
      intro: "Welcome to my portfolio of projects in Front End & Back End development. I constantly study to improve my skills and expand the list of technologies I can use in my work.",
      img: "/img/avatar-2.svg"
    },
    services: {
      sectionTitle: "Skills",
      list: [
        {
          name: "Web/Email Development",
          description: "I have years of experience coding HTML/CSS front ends and responsive marketing emails.",
          colorHex: "#fff",
          colorRGB: "rgb(256, 256, 256)",
          image: "html",
          imageAlt: "Web Development",
          shadowClass: "shadow-blue",
          hasSpacer: true,
          delay: "0",
          textIsLight: false
        },
        {
          name: "Full Stack JS",
          description: "I have experience creating JavaScript web apps with React, Angular, and Node/Express.",
          colorHex: "#fff",
          colorRGB: "rgb(256, 256, 256)",
          image: "js",
          imageAlt: "Full Stack JS",
          shadowClass: "shadow-blue",
          hasSpacer: true,
          delay: "0.2s",
          textIsLight: false
        },
        {
          name: "Cloud Services",
          description: "I am skilled in deploying and maintaining web apps/websites using various AWS services.",
          colorHex: "#fff",
          colorRGB: "rgb(256, 256, 256)",
          image: "aws",
          imageAlt: "Server Side",
          shadowClass: "shadow-blue",
          hasSpacer: false,
          delay: "0.4s",
          textIsLight: false
        }
      ]
    },
    expierience: {
      sectionTitle: "Experience & Education",
      resume: "https://cdn.carlos-developer.com/files/Resume.pdf",
      timeLineEdu: [
        {
          delay: "0s",
          time: '2011 - Present (Summa Cum Laude)',
          title: 'B.S. Computer Animation',
          description: 'I studied 3D rendering, modeling, and animation. I also completed coursework in design and print layouts.'
        },
        {
          delay: "0.2s",
          time: '2006 (Summa Cum Laude)',
          title: 'A.A.S. Digital Media',
          description: 'I completed coursework is Front End Developement, Graphi Design, and Color Theory'
        }
      ],
      timeLineExp: [
        {
          delay: "0s",
          time: '2020 - Present',
          title: 'UX Developer - Adorama',
          description: 'ReactJS focused developer. I code and implement new UI interfaces.'
        },
        {
          delay: "0.2s",
          time: '2016 - 2019',
          title: 'Cloud Developer - RKD Group',
          description: 'I created a client facing web app to manage their user data and front-end elements.'
        },
        {
          delay: "0.4s",
          time: '2016 - 2016',
          title: 'Email Dev Contract - Live Nation',
          description: 'I developed and tested concert tour emails that reached millions of customers.'
        }
      ]
    },
    works: {
      sectionTitle: "Portfolio",
      categoryList: ["React", "Node", "Angular", "WordPress"],
      portfolioList: [
        {
          itemType: ["react", "node"],
          modalType: "work-content",
          category: "Node",
          title: "Guest App Walkthrough Screens",
          thumb: "/img/2.svg",
          modal: {
            image: "/img/single-work.svg",
            title: "Guest App Walkthrough Screens",
            link: "https://pxltheme.com/html/bolby/demo/index-light.html#",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit nibh in massa semper rutrum. In rhoncus eleifend mi id tempus.",
          }
        },
        {
          itemType: ["react", "node"],
          modalType: "work-content",
          category: "React",
          title: "Guest App Walkthrough Screens",
          thumb: "/img/2.svg",
          modal: {
            image: "/img/single-work.svg",
            title: "Guest App Walkthrough Screens",
            link: "https://pxltheme.com/html/bolby/demo/index-light.html#",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam hendrerit nibh in massa semper rutrum. In rhoncus eleifend mi id tempus.",
          }
        }
      ]
    },
    contact: {
      sectionTitle: "Get In Touch",
      headline: "Let's talk about everything!",
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/carlosavilesbuitron/"
    }
  };
  
export default SiteContent;