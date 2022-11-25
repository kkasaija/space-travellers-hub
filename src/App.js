import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import store from './redux/configureStore';
import Header from './components/Header';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';
import './index.css';

const App = () => (
  <>
    <Router>
      <Header />
      <div className="center">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </div>
    </Router>
  </>
);

export default App;
