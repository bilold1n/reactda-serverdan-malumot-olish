import { useEffect, useState } from "react";
function About() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setText(data.slice(0, 20));
      })
      .catch(
        <li>
          <h1 className="eror">Eror</h1>
        </li>
      );
  }, []);
  return (
    <div className="container">
      <ul className="ul">
        {text.map(({ id, name, username, phone }) => {
          return (
            <li className="li">
              <p>Id:{id}</p>
              <p>Nmae:{name}</p>
              <p>Username:{username}</p>
              <p>Phone:{phone}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default About;
