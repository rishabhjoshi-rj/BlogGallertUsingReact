import React, { useState, useEffect } from "react";
import VisibilityHook from "../Hooks/VisibilityHook";
import EnlargedCard from "./EnlargedCard";

import Home from "./Home";

function Card(props) {
  var title = props.title;
  var author = props.author;
  var blogtxt = props.blogtext;
  var url = props.url;

  const [EnlargedComponent, toggleVisibility3] = VisibilityHook(
    <React.Fragment>
      <EnlargedCard
        title={title}
        author={author}
        blogtext={blogtxt}
        url={url}
      />
      <center>
        <button
          className="rjback btn btn-primary btn-lg"
          onClick={() => {
            toggleVisibility3();
            toggleVisibility4();
          }}
        >
          Back
        </button>
      </center>
    </React.Fragment>,

    false
  );

  const renderCard = (card, index) => {
    return (
      <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-3" key={index}>
        <div className="card-header">
          <img src={card.url} id="img3"></img>
        </div>
        <div className="card-body">
          <p>Title: {card.title} </p>
          <p>Author: {card.author} </p>
        </div>

        <button
          className="rjbt btn btn-info"
          id="viewbt"
          onClick={() => {
            toggleVisibility3(index);
            toggleVisibility4();
          }}
        >
          View Blog
        </button>
      </div>
    );
  };
  const [card2Component, toggleVisibility4] = VisibilityHook(
    <React.Fragment>
      <div className="container mt-4">
        <h1 id="heading" className="display-4 text-center">
          <i class="fas fa-bolt text-primary"></i> My
          <span class="text-primary">Blog</span>Gallery
        </h1>
      </div>

      <div id="cards" className="container mt-4">
        <div className="row">{props.arr.map(renderCard)}</div>
      </div>
    </React.Fragment>,

    true
  );

  return (
    <React.Fragment>
      {EnlargedComponent}

      {card2Component}
    </React.Fragment>
  );
}

export default Card;
