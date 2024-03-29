import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { getFirebase } from "../firebase";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/posts/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  

  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <>
      <main>
        <img className="banner-image" src={currentPost.coverImage} alt={currentPost.coverImageAlt}></img>
        <h1>{currentPost.title}</h1>
        <em>{currentPost.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </main>
    </>
  );
};

export default Post;
