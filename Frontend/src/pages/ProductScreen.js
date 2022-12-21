import { Box } from "@mui/system";
import { useEffect, useContext, useState } from "react";
// import UserContext from "./UserContext";

function ProductScreen() {
  const [productDetails, setProductDetails] = useState();

  useEffect(function () {
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/products/findall`, {
      method: "POST",
      // 'body': {}
    })
      .then(function (backendResponse) {
        return backendResponse.json();
      })
      .then(function (jsonResponse) {
        setProductDetails(jsonResponse);
      })
      .catch(function (backendError) {
        console.log(backendError);
      });
  }, []);

  if (productDetails) {
    return (
      <Box className="cont">
        <div className="main_content">
          {productDetails.map((prod) => (
            <div className="card" key={prod.id}>
              <div className="card_img">
                <img alt={prod.id} src={prod.image} />
              </div>
              <div className="card_header">
                <p className="brand">{prod.brand}</p>
                <p className="desc">{prod.model}</p>
                <p className="desc">{prod.color}</p>
                <p className="price">${prod.price}</p>
                <div className="btn">Add to cart</div>
              </div>
            </div>
          ))}
        </div>
      </Box>
    );
  } else {
    return <Box></Box>;
  }
}

export default ProductScreen;
