import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kenneth",
  lastName: "Tan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ktan.kenneth@gmail.com",
  location: "US/Arizona", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
  // languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/k-nn-tht",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kenneth-i-tan/",
  },
  // {
  //   name: "X",
  //   icon: "x",
  //   link: "",
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Developing Innovative Solutions</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SOLPower</strong></>,
    //SOLPower Link
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Kenneth, an undergraduate student as the University of California, Santa Barbara studying Computer Science, where I am forging my career to become a software engineer, making meaningful contributions to companies and the community.
      <br /> 
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from California`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kenneth is a US-based software engineer with a passion for learning and applying new technologies
        for innovative solutions. He is currently studying at the University of California, Santa Barbara, 
        where he is honing his skills to be able to contribute to meaningful projects to help the community and companies.
        He enjoys pysical activities such as bouldering, volleyball, and bowling, and is always looking for new challenges to tackle.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ambarella",
        timeframe: "June 2025 - September 2025",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Validating and optimizing the porting of neural network models onto Ambarella’s custom SoCs
          </>,
          // <>
          //   Spearheaded the integration of AI tools into design workflows, enabling designers to
          //   iterate 50% faster.
          // </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/amba_chip.jpeg",
            alt: "Ambarella Chip Pic",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ACM with The Paskin Group",
        timeframe: "April 2025 - June 2025",
        role: "Machine Learning and Full Stack Developer",
        achievements: [
          <>
            Led the machine learning modeling team in exploring various methods of predictive forecasting 
            for real estate ranging from linear regression
            to model chaining
          </>,
          <>
            Built end-to-end application workflows, covering secure user authentication through Google OAuth/Supabase
            and database functionality
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/paskin_logo.jpeg",
            alt: "The Paskin Group Logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Ambarella",
        timeframe: "June 2024 - August 2024",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Designed and developed a web application to visually represent data from 10,000+ documents using interactive
            charts and time series graphs
          </>,
          <>
            Designed and developed an applications utilizing the MERN stack(MongoDB, Express, React, Node.js), Restful API, and Grafana
          </>,
        ],
        images: [{
          src: "/images/projects/project-01/amba_logo.png",
          alt: "Ambarella Logo",
          width: 16,
          height: 9,
        },],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "College",
    institutions: [
      {
        name: "University of California, Santa Barbara",
        description: <>BS in Computer Science and Minor in Statistical Science</>,
      },
      // {
      //   name: "Build the Future",
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const project = {
  path: "/project",
  label: "Project",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, project };
