import React, { useState, useEffect } from "react";

const getEmployeesURL = "http://localhost:5000/employees";
const addEmployeesURL = "http://localhost:5000/employees";
function AddEmployee(props) {
  const [employee, setEmployee] = useState({
    id: null,
    name: "",
    empId: "",
    status: 1,
  });

  useEffect(() => {
    fetch(getEmployeesURL, { method: "get"})
      .then((data) => data.json())
      .then((data) => {
        console.log("Employees Data: ", data);
      });
  }, []);

  function submitEmployee(e) {
    e.preventDefault();
    console.log("Emplyeee", employee);
    fetch(addEmployeesURL, {
        method: "post",
        data: employee
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("Add Employees Data: ", data);

        setEmployee({
          id: null,
          name: "",
          empId: "",
          status: 1,
        });
      });
  }
  return (
    <div>
      <h2>Add Employee</h2>

      <div>
        <form>
          <div>
            <label>ID:</label>
            <input
              type="number"
              name="id"
              value={employee?.id}
              onChange={(e) =>
                setEmployee((state) => {
                  return { ...state, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={employee?.name}
              onChange={(e) =>
                setEmployee((state) => {
                  return { ...state, [e.target.name]: e.target.value };
                })
              }
            />
          </div>
          <div>
            <label>Employee ID:</label>
            <input
              type="text"
              name="empId"
              value={employee?.empId}
              onChange={(e) =>
                setEmployee((state) => {
                  return { ...state, [e.target.name]: e.target.value };
                })
              }
            />
          </div>

          <br />
          <br />
          <br />

          <div>
            <button onClick={submitEmployee}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
