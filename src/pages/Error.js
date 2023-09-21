import React from "react";
import Navigations from "../component/Navigations";

const ErrorPage = () => {
  return (
    <>
      <Navigations />
      <main>
        <h1> An Error occured!</h1>
        <p>Could not find this page</p>
      </main>
    </>
  );
};

export default ErrorPage;
