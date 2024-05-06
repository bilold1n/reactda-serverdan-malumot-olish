import { useEffect, useState } from "react";
function Posts() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
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
        {text ? (
          text.map(({ id, name, body, email }) => {
            return (
              <li className="li">
                <p>Id:{id}</p>
                <p>Name:{name}</p>
                <p>Email:{email}</p>
                <p>Body:`{body}`</p>
              </li>
            );
          })
        ) : (
          <li>Loader...</li>
        )}
      </ul>
    </div>
  );
}
export default Posts;
