import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EditBlogPost from "./EditBlogPost";

export default function BlogPost() {
  let navigate = useNavigate();

  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.log("There was an error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    setFormData({
      userId: post.userId,
      title: post.title,
      body: post.body,
    });
  }, [isLoading]);

  const handleDelete = async () => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      console.log(`delete blog ${id}`);
      return navigate("/");
    } catch (error) {
      console.log("There was an error", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            title: formData.title,
            body: formData.body,
            userId: formData.userId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log("There was an error", error);
    } finally {
      setIsEdit(false);
    }
  };

  return (
    <div>
      <Link to="/">Home</Link>
      {isLoading && <p>Loading</p>}
      {isEdit && !isLoading ? (
        <EditBlogPost
          onInputChange={handleChange}
          onEdit={handleEdit}
          formData={formData}
        />
      ) : (
        <>
          <h2>Blog : {id}</h2>
          <h3>userID:{post.userId}</h3>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <Button onButtonSelect={() => setIsEdit(true)} label="Edit" />
          <Button onButtonSelect={handleDelete} label="X" />
        </>
      )}
    </div>
  );
}
