import React from 'react';
import { useHistory } from "react-router-dom";

 export default function Logout() {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
