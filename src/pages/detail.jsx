import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detail.scss";
import BoxComponent from "../component/box";
import { callAPI } from "../domain/callAPI";

function Detail() {
  const { id } = useParams();
  const [passwordDisplay, setPasswordDisplay] = useState({});
  useEffect(() => {
    const fetchPassword = async () => {
      try {
        const data = await callAPI(`/${id}`, "GET");
        setPasswordDisplay(data);
      } catch (error) {
        console.error("Error fetching password data:", error);
      }
    };

    fetchPassword();
  }, [id]);
  return (
    <div className="detail">
      <div className="boxContainer">
        <BoxComponent item={passwordDisplay} />
      </div>
    </div>
  );
}

export default Detail;
