import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Course from "./components/Course/Course";
import Dashboard from './components/Dashboard/Dashboard';
import CourseDetails from './components/CourseDetails/CourseDetails';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Course" element={<Course/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/course-details/:id" element={<CourseDetails />} />
      </Routes>
    </div>
  );
}

export default App;
