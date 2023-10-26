import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Overreacted" />
      <About about="Personal blog by Dan Abramov. I explain with words and code." />
    </div>
  );
}

export default App;
