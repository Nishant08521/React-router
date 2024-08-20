import React, { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Nishant08521")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className=" text-center bg-gray-600 m-4 text-white p-4 text-3xl">
        Github Followers:{data.followers}
        <img src={data.avatar_url} width={400} />
      </div>
    </>
  );
}
