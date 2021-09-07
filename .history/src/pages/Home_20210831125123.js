import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* <link rel="shortcut icon" href="" type="image/x-icon" /> */}
        <title>Expenses Manage</title>
      </Helmet>
      <div>asd</div>
    </>
  );
};

const ContainerHome = styled.div`
  padding: 20px 20px;
`;

export default Home;
