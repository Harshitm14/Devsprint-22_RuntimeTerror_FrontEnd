//import { Calendar } from "react-calendar"
import "./components/Calender"
import 'react-calendar/dist/Calendar.css';
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import { Route,Routes } from "react-router-dom"
import {teacher} from "./components/teacher";
import {student} from "./components/student";


export default function App(){
  return (
    <><Navbar/>
  <Routes>
    
    <Route exact path="/" element={<Forms />} />
    <Route path ="/teach" element={<teacher />} />  
    <Route path ="/stud" element={<student />} /> 
    </Routes>
    </>
  )
}


// export default function () {

//   return (
//     <div className="relative">
//       <Navbar/>
//       <Forms/>
      
//     </div>
//   )
// }
 

