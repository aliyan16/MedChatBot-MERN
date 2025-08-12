import './App.css';
import Onboarding from './pages/onboarding';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PageRouting from './Routing/pageRouting';

function App() {
  return (
    <>
    <Router>
      <PageRouting/>
    </Router>



    </>
  );
}

export default App;
