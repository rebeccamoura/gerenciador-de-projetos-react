import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/js/Home';
import NewProject from './components/pages/js/NewProject';
import Navbar from './components/templates/js/Navbar';
import Footer from './components/templates/js/Footer';

function App() {
  return (    

    <Router>

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home /> } />
        <Route path="/newProject" element={ <NewProject /> }/>

      </Routes>

      <Footer />

    </Router>

  );
}

export default App;
