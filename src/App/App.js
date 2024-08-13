import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../Routes';
import { Header, Footer } from '../Components/layout';
import { HomePage, ContactPage, AboutPage, ProjectPage, ProjectDetailPage,} from '../Pages';
import { HygraphProvider } from '../Context';



function App() {
  return (
    <>
    <Router>
      <HygraphProvider>
        <header className="mx-auto items-center bg-background text-brown-200">
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path={ROUTES.Home} element={<HomePage />} />
            <Route path={ROUTES.Project}>
              <Route index element={<ProjectPage />} />
              <Route path={ROUTES.ProjectDetail} element={<ProjectDetailPage />} />
            </Route>
            <Route path={ROUTES.About} element={<AboutPage />} />
            <Route path={ROUTES.Contact} element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </HygraphProvider>
    </Router>
  </>
  );
}

export default App;
