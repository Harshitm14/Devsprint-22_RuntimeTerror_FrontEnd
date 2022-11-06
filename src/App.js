import { Calendar } from "react-calendar"
import "./components/Calendar"
import 'react-calendar/dist/Calendar.css';
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";
import { Route,Routes } from "react-router-dom"
import Student from "./components/Student";
import Teacher from "./components/Teacher";


export default function App(){
  return (
    <><Navbar/>
  <Routes>
    
    <Route exact path="/" element={<Forms />} />
    <Route path ="/teach" element={<Teacher />} />  
    <Route path ="/stud" element={<Student/>} /> 
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
 

