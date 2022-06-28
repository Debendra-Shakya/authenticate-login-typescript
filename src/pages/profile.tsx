import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Profile = () => {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  
  const RootStyle = styled("div")({
    background: "rgb(249, 250, 251)",
    height: "100vh",
    display: "grid",
    placeItems: "center",
  });
  return (
    <div>
      <RootStyle>
        <Typography variant="h2">welcome to profile page {name}</Typography>
        <Typography>
          <LoadingButton
            size="large"
            variant="contained"
            onClick={() => {
              localStorage.clear();
              alert("logged out");
              navigate("/login");
            }}
          >
            logout
          </LoadingButton>
        </Typography>
      </RootStyle>
    </div>
  );
};

export default Profile;
