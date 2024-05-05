import { useEffect, useState } from "react";
function About() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setText(data.slice(0, 20));
      });
  }, []);
  return (
    <div className="container">
      <ul className="ul">
        {text.map(({ id, title, completed }) => {
          console.log(completed);
          return (
            <li className="li">
              <p>Id:{id}</p>
              <p>Title:{title}</p>
              <p>Complited:{completed}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default About;
