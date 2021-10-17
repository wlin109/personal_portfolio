import Sidebar from './components/Sidebar/Sidebar';
import Introduction from './components/Introduction/Introduction';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';

function App() {
  return (
    <section id = "colorlib-page">
      <section id = "container-wrap">
        <Sidebar/>
        <main id = "colorlib-main">
          <Introduction/>
          <About/>
          <Skills/>
          <Timeline/>
        </main>
      </section>
    </section>
  );
}

export default App;
