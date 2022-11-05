// import { Calendar } from "react-calendar"
import "./components/Calender"
import 'react-calendar/dist/Calendar.css';
import Navbar from "./components/Navbar";
import Forms from "./components/Forms";

export default function App() {
  return (
    <div className="relative">
      <Navbar/>
      <Forms/>
      {/* <Calendar className="" />  */}
    </div>
  )
}