import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>HOME Page</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>navigate</button>
      </p>
    </>
  );
};

export default HomePage;
