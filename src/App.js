import logo from './logo.svg';
import pic from './logo193.png';
import './App.css';
import axios from 'axios';
import PostList from './components/PostList.js';
import Post_create from './components/createpost_card.js';
import { useEffect, useState } from 'react';
import { VscAdd, VscRefresh, VscSearch } from "react-icons/vsc";

const Url = "https://localhost:8080/posts/";
const defaultValues = {
  title: "",
  content: "",
  author: "Piyush",
  id: null,
  h: "Create a Post",
};

function App() {

  const [posts, setPosts] = useState([]);
  const [values, setValues] = useState(defaultValues);
  const [showNoneFound, setShowNoneFound] = useState(true);
  const [showModal, setShowModal] = useState(false);
   const [searchText, setSearchText] = useState("");

  const set = (name, value) =>
    setValues((oldValues) => ({ ...oldValues, [name]: value }));
  const dismissModal = () => setShowModal(false);

  const getPosts = () => {
    axios.get(Url)
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  };
  useEffect(getPosts, []);

  const onFormSubmit = () => {
    dismissModal();
    const id = values.id;
    const save_values = {
      title: values.title,
      content: values.content,
      author: values.author,
    };
    if (id == null) {
      axios.post(Url, save_values)
        .then((res) => setPosts(res.data))
        .catch((error) => console.log(error));
    } else {
      axios
        .put(Url + id, save_values)
        .then((res) => setPosts(res.data))
        .catch((error) => console.log(error));
    }
    setValues(defaultValues);
    getPosts();
  };

  const addPost = () => {
    setValues(defaultValues);
    setShowModal(true);
  };

 

    //  const welcomeText="Hello"


  return (
<div className="App">
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid">
      <div className="explore">
    <form className="d-flex">
     <img src={logo} alt="logo"></img>
       <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        </div>
      {/* <a className="navbar-brand" href="/">Navbar</a> */}
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p>
            <i className="fas fa-home"></i><br></br>
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </p>
         
          </li>
          <li className="nav-item">
            <p>
            <i className="fas fa-user-friends"></i><br></br>
            <a className="nav-link" href="/">Network</a>
            </p>
            
          </li>
          <li className="nav-item"> 
          <p>
            <i className="fas fa-briefcase"></i><br></br>
            <a className="nav-link" href="/">Jobs</a>
          </p>
          </li>
          <li className="nav-item">
          <p>
            <i className="fas fa-comment-dots"></i><br></br>
            <a className="nav-link" href="/">Messaging</a>
          </p>
          </li>
          <li className="nav-item">
          <p>
            <i className="fas fa-bell"></i><br></br>
            <a className="nav-link" href="/">Notifications</a>
          </p>
          </li>         
        </ul>      
      </div>
    </div>
  </nav>
    <div className="main_body">
    <div className="post_section">
        <div className="Create_post">
           {/* <form className="d-flex" > */}
     <img src={pic} alt="pofile_pic"></img>
       <button className="form-control me-2" onClick={addPost}>write a post</button>
          
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        {/* </form> */}
        <div className="post_special">
        <div>
           <button><span><i className="far fa-image"></i>Photo</span></button>
        </div>
        <div>
        <button><span><i className="fab fa-youtube"></i>Video</span></button>
        </div>
        <div>
          <button><span><i className="far fa-calendar-alt"></i>Event</span></button>
        </div>
        <div>
               <button><span><i className="far fa-newspaper"></i>Write article</span></button>
        </div>
        
    </div>
        </div>
       
        <hr></hr>
        <div id="p1" className={showModal ? "overlay show" : "overlay"} href="#">
        <Post_create
          title={values.title}
          content={values.content}
          author={values.author}
          heading={values.h}
          _onSubmit={onFormSubmit}
          _handleCloseModal={dismissModal}
          _handleValues={set}
        />
      </div>
        <div className="recent_posts">
           <PostList
              id="PostList"
              posts={posts.filter((post) => {
                var val = post.title + post.content + post.author
                 return val.toLowerCase().includes(searchText)
              })}
           />
        </div>
    </div>
    </div>
    
</div>   

  );
}

export default App;
