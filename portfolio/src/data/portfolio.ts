// All content below is sourced directly from Pragnya Yelisetti's resume.
// Edit this file to update site content — components read from here only.

export const profile = {
  name: 'Pragnya Yelisetti',
  tagline: 'Computer Science Engineering · B.Tech 3rd Year · Expected Graduation: May 2028',
  email: 'pragnyayelisetti@gmail.com',
  phone: '+91 9494389676',
  linkedin: 'https://www.linkedin.com/in/pragnyayelisetti/',
  github: 'https://github.com/Pragnyayelisetti',
}

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Linux', 'VS Code', 'JWT Authentication', 'Groq AI'],
  },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    org: 'Meridian Data Labs',
    type: 'Internship',
    link: 'https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy83OWU4NTk4ODJkY2IwZTY0L0lRQTdCMUw1UGExQlNyN29DckF0Z2sxNEFTYzg1cWFBSkNVcUhraDRoSzFfOWRjP2U9YkthMEtn&cid=79E859882DCB0E64&id=79E859882DCB0E64!sf952073bad3d4a41bee80ab02d824d78&parId=79E859882DCB0E64!103&o=OneUp',
    bullets: [
      'Developed 10+ responsive React.js UI components using modern JavaScript (ES6+), improving cross-device consistency and reducing reported UI defects by 30% during testing cycles.',
      'Architected reusable, component-based UI modules integrated with 5+ REST API endpoints, cutting redundant code by 40% and accelerating feature delivery across 3 application modules.',
      'Collaborated with a cross-functional Agile team of 6 developers and stakeholders across bi-weekly sprints, resolving 20+ UI bugs and shipping 4 new features within deadlines.',
      'Maintained 100% Git-based version control discipline across all contributions, participating in 15+ code reviews and reducing post-merge conflicts by following structured branching workflows.',
    ],
  },
]

export const projects = [
  {
    name: 'PrepPilot',
    image: '/images/projects/preppilot-ai.png',
    accent: 'violet',
    stack: ['React.js', 'TypeScript', 'Node.js', 'Express.js'],
    link: 'https://github.com/Pragnyayelisetti/preppilot',
    summary:
      'AI-powered mock interview platform with live video proctoring and automated performance feedback.',
    problem:
      'Students rarely get realistic, judged interview practice — PrepPilot simulates a live AI interviewer with proctoring so practice actually mirrors the real thing.',
    bullets: [
      'Engineered a live, video-call mock interview module with an AI interviewer, driving real-time camera/microphone streaming and state sync between a React.js + TypeScript frontend and a Node.js/Express.js backend.',
      'Implemented proctoring safeguards — continuous webcam/mic monitoring and enforced fullscreen mode with violation detection — to preserve interview integrity end-to-end.',
      'Built an automated post-interview performance report pipeline that scores responses and generates structured, answer-grounded feedback for candidates.',
    ],
  },
  {
    name: 'CareerVerse AI',
    image: '/images/projects/careerverse-ai.png',
    accent: 'cyan',
    stack: ['React.js', 'FastAPI', 'MongoDB', 'Groq AI', 'JWT'],
    link: 'https://github.com/Pragnyayelisetti/CareerVerse-AI',
    summary:
      'Full-stack AI career and scholarship guidance platform serving students from post-10th through postgraduate level.',
    problem:
      'Career and scholarship guidance in India is fragmented across every study stage — CareerVerse AI unifies it into one AI-guided, geo-aware platform for all 4 stages.',
    bullets: [
      'Architected a full-stack AI-powered career & scholarship platform using Groq AI (Llama 3.3 70B), serving 4 student segments (post-10th, post-12th, undergraduates, postgraduates) with personalized career roadmaps and scholarship matching.',
      'Engineered a secure FastAPI + JWT + MongoDB backend and integrated OpenStreetMap/Overpass APIs for real-time, geo-filtered college and institution discovery.',
      'Crafted 6+ modular React.js components — AI chatbot counsellor, skill profiler, and scholarship matcher — forming a complete guided decision system for every study stage.',
    ],
  },
  {
    name: 'Student Course Registration & Report Generator',
    image: '/images/projects/course-registration-ai.png',
    accent: 'amber',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/Pragnyayelisetti/Student-Course-Registration-and-Report-Generator/tree/master',
    summary:
      'Production-ready full-stack system for course registration, enrollment tracking, and automated reporting.',
    problem:
      'Manual course registration and reporting is slow and error-prone — this system automates enrollment, tracking, and PDF reports end to end.',
    bullets: [
      'Built a production-ready full-stack application with RESTful APIs supporting 5+ modules — course registration, enrollment tracking, student management, and automated PDF report generation.',
      'Designed a normalized MongoDB schema with optimized queries, cutting redundant reads; implemented a component-based React.js UI with low-latency Express.js routing for seamless client–server communication.',
    ],
  },
]

export const education = [
  {
    school: 'Aditya University, Surampalem, AP',
    detail: 'B.Tech – CSE',
    score: 'CGPA: 9.38 / 10',
    period: '2024 – May 2028',
  },
  {
    school: 'Aditya Junior College, Kakinada, AP',
    detail: 'State Board (MPC)',
    score: '988 / 1000',
    period: '2022 – 2024',
  },
  {
    school: 'Mary Immaculate High School, Samalkot, AP',
    detail: 'BSEAP',
    score: '582 / 600',
    period: '2021 – 2022',
  },
]

export const certifications = [
  {
    name: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    link: 'https://1drv.ms/b/c/79e859882dcb0e64/IQAtlD3fzdHCRa3mtansmiAEAaF-in0Flgj90v8f94bj6GA?e=Tj8hBb',
  },
  {
    name: 'MOS: Excel (Office 2019)',
    issuer: 'Microsoft',
    link: 'https://drive.google.com/file/d/1X-eVJ8Zoz3XKuTNAAzYF4TXVTAVdt7cd/view?usp=sharing',
  },
  {
    name: 'Building with Claude API',
    issuer: 'Anthropic',
    link: 'https://drive.google.com/file/d/1bYySNJ1N5-Wo-F_pRLd_Niydf-MHc2V8/view?usp=sharing',
  },
  {
    name: 'PL-900: Power Platform Fundamentals',
    issuer: 'Microsoft',
    link: 'https://drive.google.com/file/d/1LHf_QEIFwLEaTNqURd-JM-KIvH2zvZrR/view?usp=sharing',
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    link: 'https://drive.google.com/file/d/1z3nJdC1ONlYJcyqBW_iA_-LcC4TPwIfs/view?usp=sharing',
  },
  {
    name: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/f19ef838e533',
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    link: 'https://drive.google.com/file/d/14nN5b_BH2zNJKurRDYSOYD92KIE77mbw/view?usp=sharing',
  },
]

export const achievements = [
  {
    text: 'Ranked in the Top 270 among participants in the Women Who Master Hackathon.',
    link: 'https://image-s-3-store.replit.app/api/storage/public-objects/campaigns/823c7319-d20f-489b-85b6-3dbc3742e220/generated/generated-certificate-wwm26-viz-g-t018-m05.pdf',
    stat: '270',
    label: 'Top rank, Women Who Master Hackathon',
  },
  {
    text: 'Solved 900+ problems and earned the 200 Days Badge on LeetCode.',
    link: 'https://leetcode.com/u/NebulaOfCodeRK/',
    stat: '900+',
    label: 'Problems solved, LeetCode',
  },
  {
    text: 'Attained a 900+ rating on Codeforces.',
    link: 'https://codeforces.com/profile/gnya_as_astrocoder',
    stat: '900+',
    label: 'Codeforces rating',
  },
  {
    text: 'Earned 2-Star rating with 400+ problems solved on CodeChef.',
    link: 'https://www.codechef.com/users/keen_card_98',
    stat: '400+',
    label: 'Problems solved, CodeChef',
  },
  {
    text: 'Achieved peak rating of 1700+ with 4600+ EXP and the Achiever Badge on Code360.',
    link: 'https://www.naukri.com/code360/profile/c892ae85-fd88-46a0-9f87-48c1d06360aa',
    stat: '1700+',
    label: 'Peak rating, Code360',
  },
  {
    text: '4-Star in SQL & Java; 3-Star in C, C++, and Python on HackerRank.',
    link: 'https://www.hackerrank.com/profile/Pragnya582988',
    stat: '4★',
    label: 'SQL & Java, HackerRank',
  },
]

export const extracurricular = [
  'Competed in the Google Sprint Hackathon, collaborating under deadline-driven conditions to design and present a working solution within 24 hours.',
  'Appointed Face of Internshala at Aditya University — drove campus-wide internship awareness campaigns and mentored 100+ peers on career development and internship application strategies.',
]
