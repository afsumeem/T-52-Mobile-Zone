import axios from "axios";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const AddNewBlog = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data) => {
    axios.post("https://mobile-zone.onrender.com/blog", data).then((res) => {
      if (res.data.insertedId) {
        alert("Blog Added Successful!!");
        reset();
      }
    });
  };

  return (
    <Container className="my-5 pt-4">
      <div className="section_title">
        <h2>Add New Blogs ...</h2>
        <p>Write your blogs</p>
      </div>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
          <div className="login_form">
            <div className="login_title mb-5">
              <h3>Write Your New Blogs</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
              <label htmlFor="blog">
                Blog Title <span>*</span>
              </label>
              <input
                placeholder="Enter your blog title"
                id="blog"
                {...register("name", { required: true })}
              />

              <label htmlFor="blog_details">
                Blog Description <span>*</span>
              </label>
              <textarea
                style={{
                  height: "100px",
                  border: "1px solid #00000021",
                  marginBottom: "12px",
                }}
                className="w-100 pt-2 ps-2"
                placeholder="Enter your blog description"
                id="blog_details"
                {...register("description", { required: true })}
              />

              <label htmlFor="img_link">
                Image Link <span>*</span>
              </label>
              <input
                placeholder="Paste your image link"
                id="img_link"
                {...register("img", { required: true })}
              />

              <label htmlFor="writer">
                Blog Writer <span>*</span>
              </label>
              <input
                id="writer"
                placeholder="Enter writer name"
                {...register("author", { required: true })}
              />

              <label htmlFor="writer">
                Blog Post Date <span>*</span>
              </label>
              <input
                defaultValue={new Date().toISOString().substring(0, 10)}
                {...register("date", { required: true })}
              />

              <Button type="submit" className="btn_regular w-100 py-3 fw-bold">
                Post Your Blogs
              </Button>
            </form>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default AddNewBlog;
