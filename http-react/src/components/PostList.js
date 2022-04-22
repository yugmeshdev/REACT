import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      erroMsg: "",
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts1")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ erroMsg: "Error retreiving data" });
      });
  }
  render() {
    const { posts, erroMsg } = this.state;
    return (
      <div>
        PostList
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {erroMsg ? <div>{erroMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;