import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Data() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Data show page...</h1>
          {user.map((user, index) => (
            <div key={index} className=" d-flex">
              <div className=" d-inline-block gap-5 border border-2 border-black  ms-5 p-3 mt-3">
                <h3 className=" p-3">Name : {user.username}</h3>
                <h2 className=" ">Email :{user.email}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Data;
