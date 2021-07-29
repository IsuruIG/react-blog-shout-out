import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import PostsList from '../PostsList/PostsList';

const Posts = () => {
    const postId = useParams().postId;
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log(postId)
    useEffect(() => {
        setIsLoading(true);
        const fetchPosts = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
                const postData = await response.json();

                if (postId) {
                    const filteredPost = postData.filter(post => post.id === postId)
                    setLoadedPosts(filteredPost);
                }
                setLoadedPosts(postData);
                setIsLoading(false);
            } catch (err) {}
        };
        fetchPosts();
    }, [postId]);

    return (
        <React.Fragment>
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && <PostsList items={loadedPosts}/>}
        </React.Fragment>
    )
};

export default Posts;