import { useEffect, useState } from "react";
function About() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setText(data.slice(0, 20));
      });
  }, []);
  return (
    <div className="container">
      <ul className="ul">
        {text.map(({ id, title, thumbnailUrl }) => {
          return (
            <li className="li">
              <p>Id:{id}</p>
              <img src={thumbnailUrl} alt="thumbnailUrl" />
              <p>Title:{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default About;
