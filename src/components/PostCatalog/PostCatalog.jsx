import {useEffect, useState} from 'react';

function PostCatalog(props) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(props.url)
            .then(response => response.json())
            .then(response => setPosts(response))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="posts">
            <ul className="posts__list">
                {posts.map(post => (
                    <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostCatalog;