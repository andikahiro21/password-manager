import React from "react";
import { Link } from "react-router-dom";
import PasswordImage from "/./passwordImage.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "../styles/cardComponent.css";
import { callAPI } from "../domain/callAPI";

function CardComponent(props) {
  const item = props.item;

  const handleDelete = async (id) => {
    const confirmation = confirm("Apakah Anda yakin ingin menghapus item ini?");
    console.log(confirmation);
    if (confirmation) {
      try {
        await callAPI(`/${id}`, "DELETE");
        props.onItemDeleted(id);
      } catch (error) {
        console.error("Error deleting item", error);
      }
    }
  };

  return (
    <Card className="card" sx={{ background: "#6d4772", maxWidth: 200, height: 260 }} key={item.id}>
      <CardMedia sx={{ height: 140 }} image={PasswordImage} title={item.title} />
      <CardContent className="cardContent">
        <h1>{item.provider}</h1>
        <h2>{item.email}</h2>
        <h2>{item.category}</h2>
      </CardContent>
      <div className="buttonContainer">
        <Link to={`/detail/${item.id}`}>
          <button>Detail</button>
        </Link>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
      </div>
    </Card>
  );
}

export default CardComponent;
