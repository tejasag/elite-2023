"use client";

import Navbar from "../components/Navbar";
import Article from "../components/Article";

const getData = async () => {
  const res = await fetch("http://localhost:3000/article");

  if (!res.ok) {
    throw new Error("error fetching data");
  }

  return res.json();
};

export default async function Home() {
  let data = await getData();

  return (
    <>
      <Navbar />
      {data.map((x, i) => (
        <Article
          article={x.article}
          posted_by={x.posted_by}
          posted_at={x.posted_at}
        />
      ))}
    </>
  );
}
