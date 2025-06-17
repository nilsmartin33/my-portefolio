import Footer from '@/components/footer/Footer.tsx';
import NavBar from '@/components/navbar/NavBar.tsx';
import Hero from '@/components/sections/hero/Hero.tsx';
import MyInfos from '@/components/sections/me/MyInfos.tsx';
import WorkSection from '@/components/sections/projects/FlowingMenu.tsx';
import Projects from '@/components/sections/projects/Projects.tsx';
import { ThemeProvider } from '@/context/ThemeProvider.tsx';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <main className="flex flex-col h-full w-full">
        <NavBar />
        <Hero />
        <Projects />
        <WorkSection />
        <MyInfos />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
