const mediaPath = (fileName) => `${import.meta.env.BASE_URL}media/${fileName}`;

export const profile = {
  name: 'Elliot Feuillade',
  title: 'Full-stack developer, founder of Homii, and Epitech student',
  location: 'Montpellier, France and San Marcos, California',
  email: 'feuil001@csusm.edu',
  github: 'https://github.com/coroxx',
  linkedin: 'https://www.linkedin.com/in/elliot-feuillade/',
  intro:
    'I build practical web products with React, Node.js, Laravel, and automation tools. My current focus is Homii, a rental management platform designed to simplify daily operations for landlords and tenants.',
};

export const skills = [
  'React',
  'Node.js',
  'Express',
  'Laravel',
  'API design',
  'E-commerce',
  'Automation',
  'Product strategy',
];

export const projects = [
  {
    title: 'Homii',
    type: 'Founder project',
    description:
      'A rental management platform that centralizes property workflows, automates repetitive tasks, and gives owners a clearer view of tenant and lease activity.',
    stack: ['React', 'Laravel', 'Stripe', 'n8n'],
  },
  {
    title: 'RG System Web Tools',
    type: 'Internship project',
    description:
      'Internal web development work focused on Node.js, API integration, and maintainable interfaces for business users at RG System - Groupe Septeo.',
    stack: ['Node.js', 'APIs', 'JavaScript'],
  },
  {
    title: 'Anchor Paris E-Commerce',
    type: 'Co-founder project',
    description:
      'A cross-border e-commerce operation for high-end watches, built around marketing, product positioning, international logistics, and conversion-focused storefront work.',
    stack: ['E-commerce', 'Marketing', 'Operations'],
  },
  {
    title: 'React Portfolio',
    type: 'CIS 444 project',
    description:
      'A responsive portfolio and travel blog built with React Router, reusable components, project data, and GitHub Pages deployment configuration.',
    stack: ['React', 'Vite', 'React Router'],
  },
];

export const timeline = [
  {
    role: 'Founder',
    organization: 'Homii',
    period: 'September 2025 - Present',
    detail:
      'Building a rental management product from concept to launch, combining full-stack development, customer discovery, and automation.',
  },
  {
    role: 'Exchange student',
    organization: 'California State University San Marcos',
    period: 'August 2025 - May 2026',
    detail:
      'Studying computer science and economics in California while expanding international product and communication skills.',
  },
  {
    role: 'Master student',
    organization: 'EPITECH',
    period: 'October 2022 - July 2027',
    detail:
      'Project-based computer science program focused on programming, software architecture, and practical engineering.',
  },
];

export const springBreakPosts = [
  {
    title: 'Spring Break in Southern California',
    date: 'March 2026',
    image: mediaPath('spring-break-coast.svg'),
    alt: 'Placeholder for a spring break coast photo',
    paragraphs: [
      'Spring break was a chance to slow down after a busy semester at California State University San Marcos and explore more of the region around campus. I wanted the week to feel different from a normal school schedule, so I planned it around simple moments: walking near the coast, trying local food, taking photos, and spending time with friends outside of class.',
      'One of the best parts of the break was seeing how different Southern California feels depending on where you are. A morning can start near campus, continue with tacos or coffee in a busy neighborhood, and end with a sunset by the ocean. That mix of study abroad life, new places, and everyday routines made the experience feel personal rather than just touristic.',
      'The break also gave me time to reflect on why I chose an exchange year in the United States. Being away from France has pushed me to communicate better, adapt faster, and become more independent. Those lessons connect directly to my work as a developer and founder: good products are built by understanding people, context, and real problems.',
    ],
  },
  {
    title: 'Food, Friends, and a Change of Pace',
    date: 'March 2026',
    image: mediaPath('spring-break-city.svg'),
    alt: 'Placeholder for a spring break city photo',
    paragraphs: [
      'The second part of my spring break was less about checking places off a list and more about enjoying the rhythm of the week. I tried new restaurants, took longer walks than usual, and spent time with people I met during my exchange year. Small details stood out: conversations over food, warm evenings, and the feeling of discovering a place without rushing.',
      'Food was one of the easiest ways to experience the culture around me. California has a lot of variety, and every meal felt like a small introduction to a different part of the area. I especially enjoyed how casual and social meals felt, whether it was something quick after a day outside or a longer dinner with friends.',
      'By the end of the week, I came back with more energy and a clearer sense of what I want from the rest of the semester. Spring break was not just a vacation; it was a pause that helped me appreciate the exchange year, the people around me, and the balance between work, school, and personal growth.',
    ],
  },
];
