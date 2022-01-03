import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [bloges, setBloges] = useState([]);

    useEffect(() => {
        fetch("https://safe-coast-68587.herokuapp.com/blog")
            .then((res) => res.json())
            .then((data) => setBloges(data));
    }, []);

    return (
        <div className="container my-5 pt-4">
            <div className="section_title ">
                <h2>Our Blogs ...</h2>
                <p>Updated with the our blogs</p>
            </div>
            <div className="d-flex row">
                <div className="col-lg-4 border me-3">
                    <h3 className="py-5">
                        Recent <span style={{ color: "red" }}>Article</span>
                    </h3>

                    {bloges.map((bloge) => (
                        <div>
                            <div className="d-flex  ">
                                <div className="col-lg-5">
                                    <img className="w-100" src={bloge.img} alt="" />
                                </div>
                                <div className="col-lg-7 text-start  mt-4">
                                    <h4 className=" ">{bloge.name}</h4>
                                    <p className=""> {bloge.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row col-lg-8">
                    {bloges.map((blog) => (
                        <Blog key={blog.id} blog={blog}></Blog>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
