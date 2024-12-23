import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CoursesPage } from './pages/CoursesPage';
import Header from './components/Header';
import Home from './pages/Home';
import ExamsPage from './pages/ExamsPage';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import CourseOverviewPage from './pages/CourseOverviewPage';
import LessonPage from './pages/LessonPage';
import { ExplorePage } from './pages/ExplorePage';
import ProjectOverviewPage from './pages/ProjectOverviewPage';
import ExamOverviewPage from './pages/ExamOverviewPage';
import ScorePage from './pages/ScorePage';
// Create a ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-gray-50">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/:projectTitle" element={<ProjectOverviewPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/overview/:courseTitle" element={<CourseOverviewPage />} />
          <Route path="/courses/overview/:courseTitle/:lessonTitle" element={<LessonPage />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/exams/:examTitle" element={<ExamOverviewPage />} />
          <Route path="/exams/:examTitle/results" element={<ScorePage />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;