import { React, useEffect, useState } from "react";
import "../styles/home.css";
import CardComponent from "../component/card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate, useParams } from "react-router-dom";
import { callAPI } from "../domain/callAPI";

function Home() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { categoryParams } = useParams();

  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    if (selectedCategory === "work") {
      navigate("/work");
    } else if (selectedCategory === "family") {
      navigate("/family");
    } else if (selectedCategory === "personal") {
      navigate("/personal");
    } else {
      navigate("/");
    }
  };

  const fetchAllCategory = async () => {
    const data = await callAPI("", "GET");
    setData(data);
  };

  const fetchCategory = async () => {
    const data = await callAPI(`?category=${categoryParams}`, "GET");
    setData(data);
  };
  useEffect(() => {
    if (categoryParams) {
      fetchCategory();
    } else {
      fetchAllCategory();
    }
  }, [categoryParams]);

  const handleItemDeleted = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);
  };
  return (
    <div className="home">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Category</InputLabel>
        <Select labelId="demo-select-small-label" id="demo-select-small" label="Category" onChange={handleChange}>
          <MenuItem value="">None</MenuItem>
          <MenuItem value="work">Work</MenuItem>
          <MenuItem value="family">Family</MenuItem>
          <MenuItem value="personal">Personal</MenuItem>
        </Select>
      </FormControl>
      <div className="cardContainer">
        {data.map((item) => (
          <CardComponent item={item} onItemDeleted={handleItemDeleted} />
        ))}
      </div>
    </div>
  );
}

export default Home;
