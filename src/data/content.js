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
          link: "https://github.com/carlosavilesbuitron",
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
      cvUrl: "https://cdn.carlos-developer.com/files/Resume2020.pdf",
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
      categoryList: ["React", "Node", "SCSS", "AWS", "WordPress", "Luminate"],
      portfolioList: [
        {
          itemType: ["react", "scss"],
          modalType: "work-content",
          category: "React",
          title: "Adorama Daily Deals",
          thumb: "https://s3.us-east-1.amazonaws.com/public.carlos.developer/portfolio/adorama.jpg",
          modal: {
            image: "https://s3.us-east-1.amazonaws.com/public.carlos.developer/portfolio/adorama.jpg",
            title: "Adorama Daily Deals",
            link: "https://www.adorama.com/dailydeals",
            content: "Daily deals page integrated with a .Net backend. Data is updated daily with a custom counter linked to an ecommerce api.",
          }
        },
        {
          itemType: ["react", "scss"],
          modalType: "work-content",
          category: "React",
          title: "Donor Marketing Cloud",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/dmc-02.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/dmc-02.jpg",
            title: "Donor Marketing Cloud",
            link: "https://rkdgroup.com/donor-marketing-cloud/",
            content: "A custom built donor platform and data manager. I built this app from scratch using a full stack JavaScript approach. It is hosted on the AWS cloud. This is app runs on serverless lambdas to cut down on cost and is deployed on a custom built code pipeline.",
          }
        },
        {
          itemType: ["react", "node", "aws"],
          modalType: "work-content",
          category: "React",
          title: "American Bible Society",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/abs-03.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/abs-02.jpg",
            title: "American Bible Society",
            link: "https://share.americanbible.org/donate/?banner=ABS2019-02-001&pid=549&des=26cedd0f-0cdd-4e68-a678-0525f327536c&source=Web_SEM&utm_campaign=general-donate",
            content: "The American Bible Society commisioned a form solution independant of any donation platforms. The form is hosted on AWS S3 and integrates with a custom built Braintree serverless backend.",
          }
        },
        {
          itemType: ["react", "aws", "wordpress"],
          modalType: "work-content",
          category: "React",
          title: "St. Labre School",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/slis-03.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/slis-02.jpg",
            title: "St. Labre School",
            link: "https://give.stlabre.org/page/34979/donate/1?HEADER=SLISBWEB&CPID=19CRO&SRC=19BWEBBWEB&CHOSEN=20&_ga=2.46419236.2029518156.1569963641-1206028134.1569963641",
            content: "Integrated Engaging Networks forms with AWS storage for front-end creative management. Their forms connect to their WordPress instance, and feed information back and forth for tracking/data enrichment.",
          }
        },
        {
          itemType: ["react", "aws"],
          modalType: "work-content",
          category: "Authorize.net",
          title: "Los Angeles Mission",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/lam-02.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/lam-02.jpg",
            title: "Los Angeles Mission",
            link: "https://give.losangelesmission.org/production?cl=LAM&pg=hope&appeal=FY19-FACE&amt=35,50,75,100",
            content: "Integrated with an Authorize.net for donation processing and donor data store. Their forms connect to their WordPress instance, and feed information back and forth for tracking/data enrichment.",
          }
        },
        {
          itemType: ["convio", "luminate"],
          modalType: "work-content",
          category: "Luminate Convio",
          title: "Food Bank of New York",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/nyfb-02.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/nyfb-02.jpg",
            title: "Food Bank of New York",
            link: "https://secure3.convio.net/fbnyc/site/Donation2;jsessionid=00000000.app338b?df_id=7464&mfc_pref=T&7464.donation=form1&s_src=topmenu&_ga=2.132100102.805220615.1569963804-536450629.1569963804&NONCE_TOKEN=D6C4A57FB8DB4DF821287FBAB282FEC3",
            content: "Donation forms built on the Luminate convio platform. These forms use Google Tag Manager to capture user events and display relevant content.",
          }
        },
        {
          itemType: ["convio", "luminate"],
          modalType: "work-content",
          category: "Luminate Convio",
          title: "Houston Food Bank",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/hfb-02.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/hfb-02.jpg",
            title: "Houston Food Bank",
            link: "https://secure.houstonfoodbank.org/site/Donation2;jsessionid=00000000.app367b?df_id=8530&mfc_pref=T&8530.donation=form1&NONCE_TOKEN=9461B5618A758DA8553396246B803E2B",
            content: "Donation forms built on the Luminate convio platform. These forms use Google Tag Manager to capture user events and display relevant content.",
          }
        },
        {
          itemType: ["react", "node"],
          modalType: "work-content",
          category: "AWS Integration",
          title: "SPCA of Texas",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/spca-02.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/spca-02.jpg",
            title: "SPCA of Texas",
            link: "https://secure.houstonfoodbank.org/site/Donation2;jsessionid=00000000.app367b?df_id=8530&mfc_pref=T&8530.donation=form1&NONCE_TOKEN=9461B5618A758DA8553396246B803E2B",
            content: "SPCA ported their forms and donor data to the Donor Marketing Cloud. These forms were custom built to integrate with their user data and front-end content.",
          }
        },
        {
          itemType: ["aws", "Luminate"],
          modalType: "work-content",
          category: "GTM Integration",
          title: "South Plains Food Bank",
          thumb: "https://s3.amazonaws.com/public.carlos.developer/portfolio/spfb-02.jpg",
          modal: {
            image: "https://s3.amazonaws.com/public.carlos.developer/portfolio/spfb-02.jpg",
            title: "South Plains Food Bank",
            link: "https://donate.spfb.org/production?cl=SPFB&pg=main&amt=30,60,90,150&value=3&large=1000&chosen=60&source=top-right",
            content: "Donation forms built on the Salsa platform. These forms use Google Tag Manager to capture user events and display relevant content.",
          }
        }
      ]
    },
    contact: {
      sectionTitle: "Get In Touch",
      headline: "Looking forward to working with you.",
      social: "LinkedIn",
      link: "https://www.linkedin.com/in/carlosavilesbuitron/"
    }
  };
  
export default SiteContent;