# Deepak Kumar · Engineer's Control Room

> A motion-rich portfolio for a Software Engineer and Java Backend Developer building reliable systems, distributed services, and useful AI-powered products.

<p>
  <a href="https://github.com/Deepakdekisugi/Portfolio_react"><img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=121212" alt="React 18"></a>
  <a href="https://styled-components.com/"><img src="https://img.shields.io/badge/Styled--Components-5.3-DB7093?logo=styled-components&logoColor=white" alt="Styled Components"></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer%20Motion-Animations-FF0055?logo=framer&logoColor=white" alt="Framer Motion"></a>
</p>

## About

This portfolio presents Deepak's work through an **Engineer's Control Room** concept:

- **Home** — launch console with mission status and career trajectory
- **About** — personal mission log, telemetry, architecture, and timeline
- **Projects** — archive of backend, AI, and frontend work
- **Skills** — systems lab and technology matrix

The interface combines dark editorial surfaces, coral/teal/yellow accents, glitch typography, tactile cards, animated backgrounds, and responsive layouts.

## Profile

**Software Engineer · Java Backend Developer**<br>
2.9 years of experience · Bangalore, India

**Focus:** Java · Spring Boot · Microservices · REST APIs · Kafka · Redis · Databases · AWS · AI integration

**Connect:** [Email](mailto:kumardeepakcse22@gmail.com) · [LinkedIn](https://www.linkedin.com/in/deepak-kumar4/) · [GitHub](https://github.com/Deepakdekisugi)

## Selected work

| Project | Focus | Stack |
| --- | --- | --- |
| **AskMyPdf** | AI document assistant | Java, Spring Boot, LangChain4j, Gemini AI |
| **Skillmate AI** | Career development platform | Java, Spring Boot, PostgreSQL, Gemini AI |
| **Planify** | Project and team management | Spring Boot, Spring Security, PostgreSQL |
| **Panasonic E-Commerce Platform** | E-commerce and order-management backend | Microservices, Kafka, Redis, AWS, Docker |
| **Nirvana Studios Website** | Responsive frontend product | React, JavaScript, HTML, CSS |
| **Chess Engine** | Algorithms and game logic | C |

Browse the complete catalog in [`src/data/WorkData.js`](./src/data/WorkData.js). Public repository links are shown on the project cards when available.

## Tech stack

**Frontend:** React 18 · React Router · Styled Components · Framer Motion<br>
**Backend:** Java · Spring Boot · Spring Security · REST APIs · Microservices<br>
**Data:** PostgreSQL · MySQL · MongoDB · Redis · Apache Kafka<br>
**Cloud & quality:** AWS · Docker · Jenkins · JUnit · Mockito · Swagger/OpenAPI<br>
**AI:** Gemini AI · LangChain4j · PDF parsing · Semantic retrieval

## Run locally

```bash
git clone https://github.com/Deepakdekisugi/Portfolio_react.git
cd Portfolio_react
npm install
npm start
```

Open [localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create the production build |
| `npm test` | Run the test runner |

## Project structure

```text
src/
├── components/       # Home, About, Skills, and Projects pages
├── data/WorkData.js  # Project catalog
├── subComponents/    # Navigation and visual effects
├── assets/           # Images and illustrations
└── App.js            # Routes and transitions
```

## Deployment

```bash
npm run build
```

Deploy the generated `build/` directory. Since the app uses client-side routes, configure the host to rewrite unknown paths to `index.html`.

## License

No license file is currently included. All rights reserved by the repository owner.
