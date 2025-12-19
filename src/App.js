import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

// Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import CursorGlow from "./subComponents/CursorGlow";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <CursorGlow />

      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
