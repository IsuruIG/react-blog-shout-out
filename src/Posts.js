import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

import PostsList from './PostsList/PostsList';

const Posts = () => {
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchPosts = async() => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const postData = await response.json();
                setLoadedPosts(postData);
                setIsLoading(false);
            } catch (err) {}
        };
        fetchPosts();
    }, []);

    return <div>
        {isLoading && (
            <div className='center'>
                <LoadingSpinner />
            </div>
        )}
        {!isLoading && <PostsList items={loadedPosts}/>}
    </div>
};

export default Posts;