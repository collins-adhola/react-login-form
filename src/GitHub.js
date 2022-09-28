import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Media } from "react-bootstrap";

export default function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" greg");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await
    axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  //  axios
  // .get(`https://api.github.com/search/users?q=${searchTerm}`)
  //     .then((res) => {
  //       console.log(res.data.items);
  //       setData(res.data.items);
  //       setIsLoading(false);
  //     });
  // }, [searchTerm]);

  const listUsers = data.map((user) => (
    <Media ey={user.id}>
      <a href={user.html_url}>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={user.avatar_url}
          alt="Generic placeholders"
        />
      </a>
      <Media.Body>
        <h5>Login : {user.login}</h5>
        <p>id: {user.id}</p>
      </Media.Body>
    </Media>
  ));
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h3>Github Users Results</h3>
      {isLoading && <ReactLoading type="spinningBubbles" color="#444" />}
      {listUsers}
    </div>
  );
}
