import axios from 'axios';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddNewBlog = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = data => {

        axios.post('https://safe-coast-68587.herokuapp.com/blog', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Blog Added Successful!!");
                    reset();
                }
            })
    };

    return (
        <Container>
            <div className='section_title pt-3'>
                <h2>Add New Blog</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>

                <input className='d-block my-3 w-75 m-auto p-1' placeholder='Paste your image link' {...register("img", { required: true })} />

                <input className='d-block my-3 w-75 m-auto p-1' placeholder='Blog title' {...register("name", { required: true })} />

                <input className='d-block my-3 w-75 m-auto p-1' placeholder="Blog Details" {...register("description", { required: true })} />

                <input className='d-block my-3 w-75 m-auto p-1' defaultValue={user.displayName} {...register("author", { required: true })} />

                <input className='d-block my-3 w-75 m-auto p-1' defaultValue={new Date().toISOString().substring(0, 10)} {...register("date", { required: true })} />

                <Button type="submit" className='quick_view d-block my-3 w-75 m-auto p-1'>
                    Add Blog
                </Button>

            </form>
        </Container>
    );
};

export default AddNewBlog;