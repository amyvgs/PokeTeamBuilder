import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import UserTeams from './pages/UserTeams';
import TeamDisplay from './pages/TeamDisplay';
import Compare from './pages/Compare';


// overall set up for web application

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myteams' element={<UserTeams/>}/>
        <Route path="/team-display" element={<TeamDisplay />}/>
        <Route path="/compare" element={<Compare/>}/>
      </Routes>
  )
}

export default App
