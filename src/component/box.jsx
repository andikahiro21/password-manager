import { Component } from "react";
import "../styles/boxComponent.scss";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import PasswordImage from "/./passwordImage.jpeg";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default class BoxComponent extends Component {
  state = {
    showPassword: false,
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };
  render() {
    let item = this.props.item;
    const bull = (
      <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
      </Box>
    );
    const password = this.state.showPassword ? item.password : "••••••••";
    return (
      <Card className="box" sx={{ background: "#00c9be", maxWidth: 500, maxHeight: 300 }}>
        <CardContent sx={{ height: 180 }} className="cardContent">
          <p>id: {item.id}</p>
          <h1>{item.provider}</h1>
          <h2>{item.email}</h2>
          <div className="passwordContainer">
            <h2>{password}</h2>
            <VisibilityIcon className="visibilityIcon" onClick={this.toggleShowPassword} />
          </div>
          <h2>{item.category}</h2>
        </CardContent>
        <CardMedia sx={{ height: 400 }} image={PasswordImage} />
      </Card>
    );
  }
}
