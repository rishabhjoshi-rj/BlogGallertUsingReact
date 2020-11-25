import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home() {
  return (
    <div className="container mt-4">
      <h1 id="heading" className="display-4 text-center">
        <i class="fas fa-bolt text-primary"></i> My
        <span class="text-primary">Blog</span>Gallery
      </h1>

      <center>
        <Link to="/form">
          <button id="addbtn2" class="btn btn-info btn-lg addbtn">
            Add New Blog
          </button>{" "}
        </Link>
      </center>
    </div>
  );
}

export default Home;
