# Deepak Kumar — Software Engineer Portfolio

> A motion-rich portfolio for **Deepak Kumar**, a Software Engineer and Java Backend Developer based in Mumbai, India.

This React portfolio presents backend engineering experience, distributed systems work, AI-powered applications, frontend projects, technical skills, and a professional timeline. It preserves the original dark editorial identity, animated backgrounds, glitch typography, tactile cards, and colorful accent system while repositioning backend engineering as the primary specialization.

## Professional profile

- **Role:** Software Engineer | Java Backend Developer
- **Experience:** 2.9 years
- **Location:** Mumbai, India
- **Email:** [kumardeepakcse22@gmail.com](mailto:kumardeepakcse22@gmail.com)
- **LinkedIn:** [linkedin.com/in/deepak-kumar4](https://www.linkedin.com/in/deepak-kumar4/)
- **GitHub:** [github.com/Deepakdekisugi](https://github.com/Deepakdekisugi)

Deepak specializes in Java, Spring Boot, REST APIs, microservices, Apache Kafka, Redis caching, relational and document databases, Docker, AWS, Jenkins CI/CD, testing, API documentation, and production troubleshooting. React frontend development and AI integration complement this backend focus.

## Portfolio experience

### Home

The landing page introduces Deepak as a Java backend Software Engineer and highlights Java, Spring Boot, microservices, Kafka, Redis, and AI integration. It includes the animated profile hero, contact CTA, journey roadmap, and quick navigation cards.

### About

The About page covers:

- 2.9 years of professional experience.
- The transition from the Nirvana Studios frontend internship to Java backend engineering at TapQwik Software Private Limited.
- Backend engineering responsibilities across Spring Boot, microservices, Kafka, Redis, databases, Docker, AWS, Jenkins, testing, and troubleshooting.
- 11 featured portfolio projects.
- Downloadable [`public/resume.pdf`](./public/resume.pdf).
- Email and LinkedIn contact actions.

### Skills

Skills are grouped into:

1. **Java Backend & Microservices** — Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST APIs, microservices, validation, exception handling, Spring Security, JWT, and RBAC.
2. **Databases, Messaging & Caching** — MySQL, PostgreSQL, MongoDB, Redis, SQL, indexing, query optimization, Apache Kafka, producers, consumers, and idempotent consumers.
3. **AI Integration** — Gemini AI, LangChain4j, PDF parsing, document chunking, semantic retrieval, context-aware Q&A, AI resume generation, and interview preparation.
4. **Cloud, DevOps & Quality** — AWS, EC2, Docker, Jenkins, CI/CD, Maven, Linux, JUnit 5, Mockito, SonarQube, Swagger/OpenAPI, Postman, and Logback.
5. **Frontend Development** — React, JavaScript, TypeScript, HTML5, CSS3, Redux, Next.js, Tailwind CSS, Styled Components, Framer Motion, and responsive design.
6. **Languages & Fundamentals** — JavaScript, Python, C, C++, Bash, data structures, algorithms, OOP, DBMS, operating systems, system design, and problem solving.

### Projects

The Projects page renders the centralized [`src/data/WorkData.js`](./src/data/WorkData.js) collection. Each card includes a category, verified period or professional context when supplied, description, technology badges, project details, and a verified repository/demo action. Unverified links intentionally display **Demo link pending** rather than inventing URLs.

## Experience timeline

| Period | Role | Organization | Focus |
| --- | --- | --- | --- |
| December 2023 – June 2024 | Frontend Web Developer Intern | Nirvana Studios | React, JavaScript, HTML, CSS, responsive company website, reusable components, cross-browser testing |
| June 2024 – Present | Software Engineer | TapQwik Software Private Limited | Java backend development, Spring Boot microservices, APIs, Kafka, Redis, databases, cloud deployment, testing, and production support |

The Panasonic platform was built during the TapQwik role. It should not be read as direct employment by Panasonic.

## Project catalog

### Featured backend and AI work

| Project | Category | Period/context | Technologies |
| --- | --- | --- | --- |
| AskMyPdf | AI Applications | April 2026 | Java, Spring Boot, LangChain4j, Gemini AI, PostgreSQL, Spring Security |
| Skillmate AI | AI Applications | January–June 2026 | Java, Spring Boot, Spring Security, Hibernate, PostgreSQL, Gemini AI, Recharts, Inngest |
| Planify | Backend Engineering | Not provided | Java, Spring Boot, Spring Security, Hibernate, PostgreSQL, JWT |
| Panasonic E-Commerce Platform | Backend Engineering | TapQwik Software Private Limited | Java 8+, Spring Boot, Hibernate, Kafka, MySQL, MongoDB, Redis, AWS, Docker, Jenkins, JUnit, Swagger/OpenAPI |
| Nirvana Studios Website | Frontend Development | Nirvana Studios internship | React.js, JavaScript, HTML, CSS |

### Original projects retained from the portfolio

| Project | Category | Repository |
| --- | --- | --- |
| Chess Engine | Other Projects | [View repository](https://github.com/Deepakdekisugi/Chess_engine_using_c) |
| Digit Prediction | AI Applications | [View repository](https://github.com/Deepakdekisugi/Digit_prediction) |
| Urban Company Clone | Frontend Development | [View repository](https://github.com/Deepakdekisugi/Urban_Company_Clone) |
| GIPHY Clone | Frontend Development | [View repository](https://github.com/Deepakdekisugi/GIPHY_clone) |
| Twitter Clone | Frontend Development | [View repository](https://github.com/Deepakdekisugi/twitter-clone) |
| MERN Backend | Other Projects | [View repository](https://github.com/Deepakdekisugi/Explorin_MERN_Backend) |

The Panasonic project records a 30% improvement in high-read API responsiveness through Redis caching, indexing, and JPA/SQL optimization, plus more than 85% unit test coverage on critical services. These figures apply only to that project.

## Technology stack

### Application

- [React 18](https://react.dev/)
- [React Router 6](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Normalize.css](https://necolas.github.io/normalize.css/)

### Engineering areas represented

- Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, Spring Security
- REST APIs, microservices, DTO mapping, validation, exception handling, JWT, RBAC
- Apache Kafka, Redis, MySQL, PostgreSQL, MongoDB, SQL, indexing, query optimization
- Docker, AWS, EC2, Jenkins, Maven, Git, Linux, shell scripting
- JUnit 5, Mockito, SonarQube, Swagger/OpenAPI, Postman, Logback
- React, JavaScript, TypeScript, HTML5, CSS3, responsive design
- Gemini AI, LangChain4j, PDF parsing, document chunking, and semantic retrieval

## Routes

| Route | Page |
| --- | --- |
| `/` | Home, professional headline, journey, and quick links |
| `/about` | Profile, experience summary, metrics, resume, and contact |
| `/skills` | Backend-first skills taxonomy and technology stack |
| `/work` | Featured AI/backend work and retained projects |
| Any unmatched route | Home fallback |

Routing is defined in [`src/App.js`](./src/App.js), and shared navigation is implemented in [`src/subComponents/Navbar.js`](./src/subComponents/Navbar.js).

## Project structure

```text
Portfolio_react/
├── public/
│   ├── favicon.svg
│   ├── index.html
│   ├── manifest.json
│   ├── resume.pdf
│   └── robots.txt
├── src/
│   ├── assets/                 # Profile image and illustrations
│   ├── components/             # Route-level portfolio pages
│   ├── config/                 # Particle background configuration
│   ├── data/WorkData.js        # Central project catalog
│   ├── subComponents/          # Navigation and visual effects
│   ├── App.js
│   ├── globalStyles.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Getting started

### Prerequisites

- Node.js 16 or newer.
- npm 8 or newer.

### Install and run

```bash
git clone https://github.com/Deepakdekisugi/Portfolio_react.git
cd Portfolio_react
npm install
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the development server. |
| `npm run build` | Creates an optimized production build in `build/`. |
| `npm test` | Runs the Create React App test runner. |
| `npm run eject` | Ejects Create React App configuration; use only intentionally. |

## Customization

### Add a project

Add a verified entry to [`src/data/WorkData.js`](./src/data/WorkData.js):

```js
{
  id: 12,
  name: "Project name",
  category: "Backend Engineering",
  period: "Verified period or null",
  description: "What the project does.",
  details: "Verified implementation details.",
  tags: ["Java", "Spring Boot"],
  github: null,
  demo: null
}
```

Use `null` for unavailable links. The interface will show **Demo link pending** instead of a fabricated URL.

### Update professional content

- Hero copy and timeline: [`src/components/Main.js`](./src/components/Main.js)
- Biography, metrics, contact, and resume action: [`src/components/AboutPage.js`](./src/components/AboutPage.js)
- Skill groups and technology grid: [`src/components/MySkillsPage.js`](./src/components/MySkillsPage.js)
- Navigation and email: [`src/subComponents/Navbar.js`](./src/subComponents/Navbar.js)
- Resume document: [`public/resume.pdf`](./public/resume.pdf)

### Update metadata

Page title, description, author, Open Graph metadata, favicon, and external fonts are configured in [`public/index.html`](./public/index.html). Installable-app metadata and theme colors are configured in [`public/manifest.json`](./public/manifest.json).

## Production and deployment

Build the application with:

```bash
npm run build
```

The generated files are written to `build/`. Because this app uses client-side routing, the hosting provider must rewrite unknown paths to `index.html`.

### Vercel or Netlify

Use `npm run build` as the build command and `build` as the output directory. Configure a fallback/rewrite from route paths to `/index.html` so direct visits to `/about`, `/skills`, and `/work` work correctly.

### GitHub Pages

Publish the `build/` directory and configure a single-page-app fallback for client-side routes. GitHub Pages may also require a repository-specific base path if the site is not served from a custom domain.

## Accessibility and performance

- Semantic headings and descriptive image `alt` text are used across route pages.
- Navigation remains available on mobile through the animated menu.
- Layouts use responsive breakpoints and fluid typography.
- Unverified project links are not presented as working links.
- Keep keyboard focus states, readable contrast, and content independent of animation when extending the UI.
- Respect `prefers-reduced-motion` when adding new motion effects.
- Keep long technology labels wrapped to avoid horizontal overflow.

## No-fabrication policy

This portfolio intentionally does not invent:

- Certifications, employers, titles, education dates, or employment end dates.
- Project dates where none were supplied.
- Live demo or repository URLs for projects without verified links.
- Business metrics, user counts, or unsupported technology usage.
- A direct Panasonic employment relationship.
- Generalized performance or test-coverage claims beyond the Panasonic project.

## License

No license file is currently included. Unless a license is added, all rights are reserved by the repository owner.
