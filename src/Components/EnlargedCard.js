import React from "react";
import $ from "jquery";

function EnlargedCard(props) {
  const saveBlog = (e) => {
    $("#h1").html(`Title: ` + $(".title-update").val());
    $("#h2").html(`Author: ` + $(".author-update").val());
  };
  const editBlog = (e) => {
    console.log("editfycj");

    var title = e.target.parentElement
      .querySelector("#h1")
      .innerHTML.substring(7);
    var author = e.target.parentElement
      .querySelector("#h2")
      .innerHTML.substring(8);
    var summary = e.target.parentElement.querySelector("#h3").innerHTML;
    console.log(props.title);

    $("#h1").html(
      '<input type="text" class="form-control title-update" value="' +
        title +
        '">'
    );

    $("#h2").html(
      '<input type="text" class="form-control author-update" value="' +
        author +
        '">'
    );

    $("#h3").html(
      '<textarea class="form-control summary-update"  rows="8" cols="160" value="' +
        summary +
        '"></textarea>'
    );
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <h1 id="heading" className="display-4 text-center">
          <i class="fas fa-bolt text-primary"></i> My
          <span class="text-primary">Blog</span>Gallery
        </h1>
      </div>
      <div id="cards" className="container mt-4">
        <div className="card">
          <div className="card-header">
            <img src={props.url} id="img4"></img>
          </div>
          <div className="card-body">
            <h1 id="h1">Title: {props.title} </h1>
            <h1 id="h2">Author: {props.author} </h1>
            <center>
              <h1>Blog</h1>
            </center>
            <p id="h3">{props.blogtext}</p>
          </div>
        </div>
        <button className="btn btn-info btn-lg" id="edit" onClick={editBlog}>
          Edit
        </button>
        <button className="btn btn-success btn-lg" id="save" onClick={saveBlog}>
          Save
        </button>
      </div>
    </React.Fragment>
  );
}

export default EnlargedCard;
