import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

import PostsList from '../PostsList/PostsList';

const Post = () => {
    const postId = useParams().postId;
    const [loadedPost, setLoadedPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchPost = async() => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                const postData = new Array(await response.json());
                setLoadedPost(postData);
                setIsLoading(false);
            } catch (err) {}
        };
        fetchPost();
    }, [postId]);

    return (
        <React.Fragment>
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner />
                </div>
            )}
            {!isLoading && <PostsList items={loadedPost}/>}
        </React.Fragment>
    )
};

export default Post;