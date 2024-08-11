import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../Routes';
import { Navigation, Footer } from '../Components/layout';
import { ContactPage} from '../Pages';



function App() {
  return (
    <>
    <Router basename="/">
        <header className="mx-auto items-center bg-background text-brown-200">
          <Navigation
            navClassName={`max-width mx-auto`}
            homeLinkClassName={`bg-twe_blue-300 font-semibold text-2xl`}
            ulClassName={`flex justify-between pt-6 font-lg`}
            divClassName={`flex`}
            liClassName={`mx-6`}/>
            
        </header>
        <main>
          <Routes>
            
            <Route path={ROUTES.Contact} element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
    </Router>
  </>
  );
}

export default App;
