import React, { useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Card from "./Card";
import VisibilityHook from "../Hooks/VisibilityHook";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
var rj = [];

function Blogform() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [blog_text, setText] = useState("");
  const [url, setUrl] = useState("");

  const addData = (e) => {
    console.log(typeof toggleVisibility);

    // e.preventDefault();
    setTitle($("#title").val());
    setAuthor($("#author").val());

    setText($("#BlogText").val());
    setUrl($("#url").val().toString());

    if (
      $("#title").val() === "" ||
      $("#author").val() === "" ||
      $("#BlogText").val() === ""
    ) {
      toast.error("Please fill all fields !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } else {
      rj.push({
        title: $("#title").val(),
        author: $("#author").val(),
        blogtext: $("#BlogText").val(),
        url: $("#url").val().toString(),
      });
      console.log(rj);

      $("#title").val("");
      $("#author").val("");

      $("#BlogText").val("");
      $("#url").val("");

      toast.success("Blog Successfull added!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
      toggleVisibility2();
      toggleVisibility();
    }
  };

  const [cardComponent, toggleVisibility] = VisibilityHook(
    <React.Fragment>
      <Card arr={rj} />
      <div className="container">
        <center>
          <button
            className="more btn btn-primary btn-lg "
            onClick={() => {
              toggleVisibility();
              toggleVisibility2();
            }}
          >
            Add more Blogs
          </button>
        </center>
      </div>
    </React.Fragment>,

    false
  );

  const [formComponent, toggleVisibility2] = VisibilityHook(
    <div className="container mt-4">
      <h1 id="heading" className="display-4 text-center">
        <i class="fas fa-bolt text-primary"></i> My
        <span class="text-primary">Blog</span>Gallery
      </h1>

      <form className="book-form">
        <div className="form-group">
          <label for="title">Title</label>
          <input id="title" type="text" class="form-control" />
        </div>
        <div className="form-group">
          <label for="author">Author</label>
          <input type="text" id="author" class="form-control" />
        </div>
        <div className="form-group">
          <label for="BlogText">Blog Content</label>

          <textarea
            id="BlogText"
            placeholder="Type your Blog Content here"
            name="BlogText"
            rows="8"
            cols="160"
          ></textarea>
        </div>
        <div className="form-group">
          <label for="url">Image URL</label>
          <input
            type="text"
            id="url"
            placeholder="Paste url for a cover image of blog if available, else a default image will be put."
            class="form-control"
          />
        </div>

        <button
          id="addnew2"
          type="button"
          className="btn btn-primary btn-block add btn-lg"
          onClick={addData}
        >
          Add Blog
        </button>

        <Link to="/">
          <button
            id="back"
            type="button"
            className="btn btn-success btn-lg btn-block"
          >
            Go Back to Homescreen
          </button>
        </Link>

        <button
          className="btn3 btn btn-primary btn-lg btn-block"
          onClick={() => {
            toggleVisibility();
            toggleVisibility2();
          }}
        >
          View Card Gallery
        </button>
      </form>
    </div>,
    true
  );

  return (
    <div>
      <div className="card1">
        {formComponent}

        {cardComponent}
      </div>
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          toggleVisibility();
          toggleVisibility2();
        }}
      >
        Toggle
      </button> */}
    </div>
  );
}

export default Blogform;
