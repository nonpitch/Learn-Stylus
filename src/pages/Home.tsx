import Exam from "../components/PracticeExams";
import FeaturedCourses from "../components/FeaturedCourses";
import ExploreProjects from "../components/ExploreProjects";
import Welcome from "../components/Welcome";
import FAQSection from "../components/FAQ/FAQSection";

const Home = () => {
  return (
    <main>
      <Welcome />
      <ExploreProjects />
      <FeaturedCourses />
      <Exam />
      <FAQSection />
    </main>
  );
};

export default Home;