import React from "react";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"

const ItemInfo = ({ onAddfetch }) => {
  let {id}=useParams();
  console.log({id});
  return (
    <div>
      {console.log(onAddfetch)}
      <ul>
        {onAddfetch.map((fetch, i) => {
            return (<div key={i}><li >{fetch.name}</li>
                <p>{fetch.address}</p>
                <p>{fetch.phone}</p>
                <Link to={`/otherCentre/${i}`} 
                >detail</Link>
                </div>);
        })}
      </ul>
    </div>
  );
};

export default ItemInfo;
