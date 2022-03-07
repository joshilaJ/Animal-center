import React from "react";
import { useParams } from "react-router-dom";
const DetailAboutCentre = (props) => {
  const param=useParams();
  return (
    <div>
      <p>{param.id}</p>
      <h1>
        Veterinary Hospital, Emergency services and Quality veterinary services
        in Kathmandu, Nepal. Ph:... Chucchepati, Chabahil, Kathmandu, Nepal 01.
      </h1>
    </div>
  );
};

export default DetailAboutCentre;
