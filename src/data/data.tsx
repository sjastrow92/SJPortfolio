import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/few.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';

import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Stephen Jastrow.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Philadelphia based <strong className="text-stone-100">Software Developer</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        As a dedicated software developer with a background in sales, I bring a{' '}
        <strong className="text-stone-100">
          unique blend of technical expertise and customer-focused communication skills.
        </strong>{' '}
        My transition from sales to software engineering has been driven by a passion for delivering high-quality work
        in a collaborative team setting. I am committed to leveraging my diverse skill set to contribute effectively and
        be a valuable asset to any team I join. Let's connect and explore how I can bring value to your organization.
      </p>
      <br />
    </>
  ),
  actions: [
    {
      href: '/StephenJastrowResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Simply said, A man who is ready to get into the nitty gritty of it all. Based in Philadelphia, I have a bit of an unconventional approach to where I find myself today. Having originally studied Sport Management, I had my eyes set on game day experiences and being as close to the glass banging action as possible. After all, I am a life long hockey player. After obtaining a bachelors degree from Temple University I embarked on a journey through several sales jobs. From enterprise software solutions to merchant processing in the healthcare space, I felt that I had reached my whit's end in the 24 hour sales cycle. Picture Jack Lemmon's character in the classic film "Glenngarry Glen Ross". So what does a man like me do when faced with the opportunity change things for the better? Learn to code of course! In March of 2024 I decided to take on one of my biggest challenges yet, a full stack web development bootcamp that will instill in me a 2 year education in 3 months time. After many late nights I can say without a doubt that it was the best decision I have ever made. It has always been a goal of mine to turn passion into paper. To love my occupation. To showcase talent in a professional space. Coding has opened that door for me. "But Stephen, tell me more about the hockey!" Of course. Since the age of five I have been in the crease, stopping pucks and crushing dreams. I have been very fortunate to still be playing at the level I do. Aside from the weeknight rec leagues, I spend my summers traveling across the country playing in cash-prize tournaments with players from the NHL, AHL, and around the world.`,
  aboutItems: [
    {label: 'Location', text: 'Philadelphia, PA', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Hockey, the outdoors, hard bass drops', Icon: SparklesIcon},
    {label: 'Employment', text: 'Possibly you!', Icon: BuildingOffice2Icon},
    {
      label: 'Study',
      text: 'University of Central Florida (full-stack bootcamp certification)',
      text2: 'Temple University (BS Sports Management)',
      Icon: AcademicCapIcon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 1,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Jeans',
    description:
      'A web application that fetches color palette and image search APIs to allow the user to obtain easy to use themes for any type of creative projects.',
    url: 'https://main--projectjeans.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Bucket',
    description: 'A web application built for the purpose of creating a working bucket list',
    url: 'https://bucket-8eis.onrender.com/',
    image: porfolioImage2,
  },
  {
    title: 'Root2Roast',
    description: 'Utilizing two Api fetches, this is an application for the homegrower who loves to cook! Search edible plants to grow, search a recipe for it, then discuss with other users!',
    url: 'https://root2roast.onrender.com/',
    image: porfolioImage3,
  },
  {
    title: 'SocialMediaApp',
    description: 'A backend application using NoSQL to build an API for a social media web application where users can create, read, update, and delete thoughts. This uses expressJS for routing, a MongoDB database, and the Mongoose ODM',
    url: 'https://www.youtube.com/watch?v=tKkNucbbZmw',
    image: porfolioImage4,
  },
  {
    title: 'sqlEmployeeTracker',
    description: 'Using PostgreSQL with full CRUD, the user can create, read, update, and delete job roles, salaries, and managers in an employee database',
    url: 'https://www.youtube.com/watch?v=BO5sAI2Kk5U&t=1s',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '03/2024 - 07/2024',
    location: 'University of Central Florida',
    title: 'Full Stack Software Engineering Bootcamp',
    content: (
      <p>
        In this program I graduated with the base knowledge and skills to become a full stack web developer. This was a
        12 week program that tested my ability to learn at a professional's pace, while implementing the personal
        accountability needed to succeed. I am equipped with the skills, languages, and mindset to be a full stack
        software engineer in REACT.
      </p>
    ),
  },
  {
    date: '01/2013 - 09/2016',
    location: 'Temple University',
    title: 'School of Sport, Tourism, and Hospitality Management',
    content: (
      <>
        <p>• B.S Sport and Recreation Management – Promotions Concentration.</p>
        <p>
          • Montague – Ridall & Associates, Marketing Committee Chair 2016. Raised over $10,000 for the STHM Travel
          Abroad Scholarship Fund and raised $1,500 for the Visot Foundation.
        </p>
        <p>• National Collegiate Roller Hockey Association, Secretary of organization 2016.</p>
      </>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: '10/2024 - Present,',
    location: 'Savior Masks',
    title: 'Web Developer',
    content: (
      <>
        <p>
          • I am currently designing, developing and maintaining a running full-stack website that integrates both
          front- end and back-end components, creating a seamless user experience while handling data processing and
          server communication effectively.
        </p>
        <p>
          • The application will have an interactive user interface and responsive design with user authentication and
          authorization and will be built using React.
        </p>
      </>
    ),
  },
  {
    date: '09/2023 - 03/2024',
    location: 'ModMed',
    title: 'Regional Sales Manager',
    content: (
      <>
        <p>
          • Provided robust payment solutions to healthcare providers that allowed for more efficient avenues of
          accepting payment in and out of the doctor's office.
        </p>
        <p>
          • Owned the entire sales process from prospecting to closing. This often involved multiple demonstrations to
          executives, all of whom had their own circumstantial wants and needs.
        </p>
        <p>• Exceeded 150% of a $400K monthly revenue goal during my tenure.</p>
      </>
    ),
  },
  {
    date: '11/2021 - 03/2023,',
    location: 'JP Morgan Healthcare Payments, InstaMed',
    title: 'Business Development Executive',
    content: (
      <p>
        • Sourced and closed sales new business through highly targeted and strategic outbound calls and email
        campaigns. Coordinated and hosted virtual demonstrations with c level executives, physicians, and billing staff
        at hospitals and medical offices. Closed and supported $1.5 million in revenue in 2022.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'skjastrow@gmail.com',
      href: 'mailto:skjastrow@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Philadelphia, PA',
      href: 'https://www.google.com/maps/place/Philadelphia,+PA/data=!4m2!3m1!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1?sa=X&ved=1t:242&ictx=111',
    },
    {
      type: ContactType.Instagram,
      text: '@sirjastrow',
      href: 'https://www.instagram.com/sirjastrow/',
    },
    {
      type: ContactType.Github,
      text: 'sjastrow92',
      href: 'https://github.com/sjastrow92',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/sjastrow92'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/stephen-jastrow-4b3a49b4/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sirjastrow/'},
];
