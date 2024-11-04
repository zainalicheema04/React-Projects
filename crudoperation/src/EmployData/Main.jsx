import React, { useEffect, useState } from "react";
import { EmployeeData } from "./EmployeeData";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const [data, setData] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(0);
  const [isupdate,setIsupdate]=useState(false);

  useEffect(() => {
    setData(EmployeeData);
  }, []);

  // Handle Edit Functions
  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);
    if (dt !== undefined) {
       setIsupdate(true) 
      setId(id)
      setFirstname(dt[0].firstname);
      setLastname(dt[0].lastname);
      setAge(dt[0].age);
      setId(dt[0].id);
    }
  };

  // Handle Delete Functions
  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Are you sure you want to delete")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  //   Handle Save Functions
  const handleSave = (e) => {
    let error =''
    if(firstname === '')
    error+='First name is required, '

    if(lastname === '')
        error+='Last name is required, '

    if(age <=0)
        error+='Age is required, '

    if(error ===''){
    e.preventDefault()
    const dt=[...data]
    const newObject={
        id: dt.length+1,
        firstname: firstname,
        lastname: lastname,
        age: age,
      }
      dt.push(newObject)
      setData(dt)
      handleClear()
    }
    else{
        alert(error)
    }
}

  // Handle Update Functions
  const handleUpdate = () => {
    const index=data.map((item)=>{
        return item.id
    }).indexOf(id);
    const dt=[...data]
    dt[index].firstname=firstname
    dt[index].lastname=lastname
    dt[index].age=age
    setData(dt)
    handleClear()
  };

  // Handle Clear Functions
  const handleClear = () => {
    setId('')
    setFirstname('');
    setLastname('');
    setAge('');
    setId('');
    setIsupdate(false)
  };

  return (
    <>
      <div
        className="Inputs-container mt-4 mb-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {/* First Name */}
        <div>
          <label>
            <strong> First Name</strong>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => setFirstname(e.target.value)}
              value={firstname}
            />
          </label>
        </div>
        {/* Last Name */}
        <div>
          <label>
            <strong> Last Name</strong>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => setLastname(e.target.value)}
              value={lastname}
            />
          </label>
        </div>
        {/*Age*/}
        <div>
          <label>
            <strong>Age</strong>
            <input
              type="number"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </label>
        </div>

        {
        !isupdate?
        <button className="btn btn-success" onClick={(e) => handleSave(e)}>Save</button>
        :
        <button className="btn btn-warning" onClick={() => handleUpdate()}>Update</button>
        }

        <button className="btn btn-danger" onClick={() => handleClear()}>Clear</button>
      </div>
      <table className="table table-hover">
        {/* Heading of Table Data */}
        <thead>
          <tr>
            <td>
              <strong>Sr.</strong>No
            </td>
            <td>
              <strong>ID</strong>
            </td>
            <td>
              <strong>First Name</strong>
            </td>
            <td>
              <strong>Last Name</strong>
            </td>
            <td>
              <strong>Age</strong>
            </td>
            <td>
              <strong>Actions</strong>
            </td>
          </tr>
        </thead>

        {/* Body Data */}
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Main;
