import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();

  const [signleProduct, setSingleProduct] = useState([]);

  console.log(signleProduct);

  // Get Data From API
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    axios
      .get(url)
      .then(function (response) {
        setSingleProduct(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <p>Purchase</p>
    </div>
  );
};

export default Purchase;
