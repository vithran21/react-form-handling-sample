import React, { useState } from "react";
import "./SimpleForm.css";

function SimpleForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        return {
          ...prevData,
          skills: checked
            ? [...prevData.skills, value]
            : prevData.skills.filter((skill) => skill !== value),
        };
      });
    } else if (type === "radio") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Skills:</label>
        <div className="checkbox-group">
          {[
            "Java",
            "SQL",
            "HTML",
            "CSS",
            "JS",
            "JDBC",
            "Hibernate",
            "Spring",
            "React",
            "Docker",
            "Kubernetes",
            "AWS",
          ].map((skill) => (
            <label key={skill} className="checkbox-label">
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
              />
              {skill}
            </label>
          ))}
        </div>
      </div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;
