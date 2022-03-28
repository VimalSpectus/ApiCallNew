import React from 'react';
import { useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const ObjectShow = () => {

  const location:any = useLocation();
  const New = location.state
  console.log(New);
  
  let navigate = useNavigate();
  const hanleclick =() => {
    navigate("/");
}
  
  return (
    <div>
      {JSON.stringify(New)}
   
    <p>
      <Button variant="contained" onClick={hanleclick}>Back</Button>
    </p>

    </div>
  )
}

export default ObjectShow