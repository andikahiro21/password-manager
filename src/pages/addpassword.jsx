import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "../styles/addPassword.css";
import axios from "axios";
import { callAPI } from "../domain/callAPI";

function AddPassword() {
  const category = [
    {
      value: "work",
      label: "Work",
    },
    {
      value: "family",
      label: "Family",
    },
    {
      value: "personal",
      label: "Personal",
    },
  ];
  const [formData, setFormData] = useState({
    provider: "",
    email: "",
    password: "",
    category: "work",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const clearForm = () => {
    setFormData({
      provider: "",
      email: "",
      password: "",
      category: "work",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isProviderValid(formData.provider) || isEmailValid(formData.email) || isPasswordValid(formData.password)) {
      alert("Invalid Data");
    } else {
      try {
        const response = await axios.post("http://localhost:3000/password", formData);
        alert("Password added successfully.");
        clearForm();
      } catch (error) {
        console.log("An error occurred:", error);
      }
    }
  };
  const isProviderValid = (data) => data.length < 1;
  const isEmailValid = (data) => data.length < 1 || !data.includes(".") || !data.includes("@");
  const isPasswordValid = (data) => data.length < 6;

  console.log(formData);
  return (
    <div className="addPassword">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        className="formBox"
      >
        <h1>ADD PASSWORD</h1>
        <div className="textFieldContainer">
          <TextField
            onChange={handleChange}
            className="textfield"
            required
            id="provider"
            label="Provider"
            name="provider"
            value={formData.provider}
            error={isProviderValid(formData.provider)}
            helperText={isProviderValid(formData.provider) ? "Provider Length Cannot Be Empty" : ""}
          />
          <TextField
            onChange={handleChange}
            className="textfield"
            required
            id="email"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            error={isEmailValid(formData.email)}
            helperText={isEmailValid(formData.email) ? "Email must include @ or ." : ""}
          />
          <TextField
            onChange={handleChange}
            className="textfield"
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            name="password"
            value={formData.password}
            error={isPasswordValid(formData.password)}
            helperText={isPasswordValid(formData.password) ? "Password Length Cannot Less than 6 Character" : ""}
          />
          <TextField onChange={handleChange} className="textfield" required id="category" select label="Select" defaultValue="work" helperText="Please select your category" name="category" value={formData.category}>
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Box>
    </div>
  );
}

export default AddPassword;
