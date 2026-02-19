import { useEffect } from "react";
import axios from "axios";

function ApiHandler() {
  useEffect(() => {
    axios("http://localhost:3000/test")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
}

export default ApiHandler;
