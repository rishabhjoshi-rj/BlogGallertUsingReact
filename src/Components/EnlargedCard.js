import React from "react";
import $ from "jquery";

function EnlargedCard(props) {
  var i = props.index;
  var arr = props.arr;

  const saveBlog = (e) => {
    $("body").removeClass("editing"); //this as first line of save function
    $("#h1").html($(".title-update").val());
    $("#h2").html($(".author-update").val());

    if ($(".summary-update").val() === "") {
      $("#h3").html($(".summary-update").attr("value"));
    } else {
      console.log("ouuu");
      $("#h3").html($(".summary-update").val());
    }

    console.log(arr);

    // const a = $("#h1").html();
    // const b = $("#h2").html();
    // props.updateTitle(a);
    // props.updateAuthor(b);
  };
  const editBlog = (e) => {
    $("body").addClass("editing");
    console.log("editfycj");

    // var title = e.target.parentElement.querySelector("#h1").innerHTML;
    // var author = e.target.parentElement.querySelector("#h2").innerHTML;
    // var summary = e.target.parentElement.querySelector("#h3").innerHTML;

    var title = arr[i].title;
    var author = arr[i].author;
    var summary = arr[i].blogtext;
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
            <img src={arr[i].url} id="img4"></img>
          </div>
          <div className="card-body">
            <h1 id="h1">{arr[i].title} </h1>
            <h1 id="h2">{arr[i].author} </h1>
            <p id="date">{new Date().toString().substring(4, 15)}</p>

            <center>
              <h1 id="blogHeading">Blog</h1>
            </center>
            <h1 id="h3">{arr[i].blogtext}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <center>
          <button
            className="btn btn-info btn-lg btn-block"
            id="edit"
            onClick={editBlog}
          >
            Edit Blog
          </button>
        </center>
        <center>
          <button
            className="btn btn-success btn-lg btn-block"
            id="save"
            onClick={saveBlog}
          >
            Save
          </button>
        </center>
      </div>
    </React.Fragment>
  );
}

export default EnlargedCard;
