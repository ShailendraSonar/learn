import {firestore as db}  from './firebaseConfig' 
import firebase from './firebaseConfig';
import React, {useEffect, useState} from 'react';

const D = ()=>{

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetchBlogs();
    },[]);

    const fetchBlogs = async()=>{
        const response = db.collection('Blogs');
        const data = await response.get();

        data.docs.forEach(item=>{
            setBlogs([...blogs, item.data()])
        })
    }
    return(

        <>
            <div className="App">
                {
                    blogs && blogs.map(blogs=>{
                        return(
                            <>
                                <div className='blogContainer'>
                                    <h4>{blogs.id}</h4>
                                    <h4>{blogs.body}</h4>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
};

export default D;