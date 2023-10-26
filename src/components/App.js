import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// console.log(blogData);
// console.log(blogData.posts);




function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About about={blogData.about} src={blogData.image} />

      <ArticleList list={blogData.posts} />
    </div>
  );
}

export default App;
