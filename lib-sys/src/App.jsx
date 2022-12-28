import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
// import Fine from './Components/Fine'
import Profile from "./Components/Profile";
import Search from "./Components/Search";
import Finecomp from "./Components/Fineslist";
import Fine from "./Components/Fine";
import Table from "./Components/Table";

function App() {
  const [count, setCount] = useState(0);
  const fineList = [
    {
      book_id: 1,
      book_name: "Database managment system",
      fine_amount: 500,
      days_overdue: 10,
    },
    {
      book_id: 2,
      book_name: "Computer organization and assembly language",
      fine_amount: 1000,
      days_overdue: 16,
    },
    {
      book_id: 3,
      book_name: "Data structures and algorithms",
      fine_amount: 200,
      days_overdue: 16,
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/fine"
          element={
            <div>
              <Table /> <Finecomp fineList={fineList} />
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
