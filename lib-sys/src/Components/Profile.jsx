import Axios from "axios";
import React from "react";
import { useState } from "react";
import "./Profile.css";
import { useLocation } from "react-router-dom";
import { ReactDOM } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";

const Profile = ({ username }) => {
  const location = useLocation(); //get the location object from the router
  // basically, the thing that is passed to the component as propsS
  // console.log(location.state);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [studentid, setStudentid] = useState("");
  const [facultyid, setFacultyid] = useState("");

  useEffect(() => {
    Axios.post("http://localhost:3001/profile", {
      userName: location.state,
    }).then((response) => {
      console.log(response)
      setFirstName(response.data[0]["first_name"]),
        setLastName(response.data[0]["last_name"]),
        setEmail(response.data[0]["email"]),
        setPhone(response.data[0]["phone"]),
        setDob(response.data[0]["date_of_birth"]),
        setStudentid(response.data[0]["student_id"]),
        setFacultyid(response.data[0]["faculty_id"]);
    });
  }, []);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/booksIssued", {
      userName: location.state,
    }).then((response) => {
      // console.log(response.data);
      setBooks(response.data);
    });
  }, []);

  // let books = [
  //   {
  //     id: 1,
  //     name: "Pride and Prejudice",
  //     author: "XYZ",
  //     dueDate: "2022-12-12",
  //   },
  //   {
  //     id: 2,
  //     name: "Meditations",
  //     author: "Penguin Classic",
  //     dueDate: "2022-12-12",
  //   },
  //   {
  //     id: 3,
  //     name: "The fault in our stars",
  //     author: "ABC",
  //     dueDate: "2022-12-12",
  //   },
  //   {
  //     id: 4,
  //     name: "The fault in our stars v2",
  //     author: "ABC v2",
  //     dueDate: "2022-12-12",
  //   },
  //   {
  //     id: 5,
  //     name: "asdasdasda",
  //     author: "ABC v2",
  //     dueDate: "2022-12-12",
  //   },
  //   {
  //     id: 6,
  //     name: "sadajdoiqwueroiqwp",
  //     author: "ABC v2",
  //     dueDate: "2022-12-12",
  //   },
  // ];

  return (
    <div>
      <div className="section heroSec">
        <div className="left info ">
          <h2>Personal Information</h2>
          <ul>
            <li key={1}>
              <label>Name :</label> {firstName} {lastName}
            </li>
            {/* <li key={2}>369257</li> */}
            <li key={3}>
              <label>Phone :</label> {phone}
            </li>
            <li key={4}>
              <label>Email :</label> {email}
            </li>
            {/* <li key={5}>Razi 2 Hostel Bolan Road NUST H-12 Islamabad</li> */}
          </ul>
        </div>
        {/* <div className="right avatar">
          <img
            src="src/assets/avatar2.png"
            alt="Shameekh Naveed"
            className="avatarImg"
          />
        </div> */}
      </div>

      <div className="section">
        <h2 className="center-">Borrowing</h2>
        <table className="table">
          <thead>
            <tr key={"old"}>
              <th key={6} scope="col">
                #
              </th>
              <th key={7} scope="col">
                Book Name
              </th>
              <th key={8} scope="col">
                Author
              </th>
              <th key={9} scope="col">
                Due Date
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr>
                  <th key={index + 1} scope="row">
                    {index + 1}
                  </th>
                  <td key={book["title"]}>{book["title"]}</td>
                  <td key={book["first_name"]}>
                    {book["first_name"]} {book["last_name"]}
                  </td>
                  <td key={book["due_date"]}>
                    {book["due_date"].split("T")[0]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Profile;
