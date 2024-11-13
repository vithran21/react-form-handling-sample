import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    subjects: {
      Java: false,
      Python: false,
      Javascript: false,
    },
    gender: '',
  });
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showTable, setShowTable] = useState(false); // State to control table visibility

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        subjects: {
          ...prevData.subjects,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formData]);
    setShowTable(true); // Show the table after form submission
    setFormData({
      username: '',
      email: '',
      phoneNumber: '',
      subjects: {
        Java: false,
        Python: false,
        Javascript: false,
      },
      gender: '',
    });
    setShowForm(false); // Hide form after submission to show the table
  };

  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="title">Student Registration</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="nav-button"
        >
          {showForm ? 'Student Details' : 'Student Registration'}
        </button>
      </nav>

      {showForm ? (
        <div className="form-container">
          <h3>Register Student</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>
            <fieldset>
              <legend>Subjects</legend>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="Java"
                    checked={formData.subjects.Java}
                    onChange={handleChange}
                  />
                  Java
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Python"
                    checked={formData.subjects.Python}
                    onChange={handleChange}
                  />
                  Python
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Javascript"
                    checked={formData.subjects.Javascript}
                    onChange={handleChange}
                  />
                  Javascript
                </label>
              </div>
            </fieldset>
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      ) : (
        showTable && (
          <div className="table-container">
            <h3>Student Details</h3>
            <table>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Subjects</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{student.username}</td>
                    <td>{student.email}</td>
                    <td>{student.phoneNumber}</td>
                    <td>
                      {Object.keys(student.subjects)
                        .filter((subject) => student.subjects[subject])
                        .join(', ')}
                    </td>
                    <td>{student.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      )}
    </div>
  );
}

export default App;
