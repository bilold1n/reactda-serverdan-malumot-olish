import { useEffect, useState } from "react";
function Posts() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setText(data.slice(0, 20));
      });
  }, []);
  return (
    <div className="container">
      <ul className="ul">
        {text.map(({ id, title, body }) => {
          return (
            <li className="li">
              <p>Id:{id}</p>
              <p>Body:`{body}`</p>
              <p>Title:{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Posts;
