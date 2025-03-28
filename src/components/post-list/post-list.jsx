import './post-list.css';

import PostListItem from '../post-list-item';

const PostList = ({ posts }) => {
    const elements = posts.map((post) => {
        const { id, ...itemProps } = post;
        return (
            <li className="list-group-item" key={id}>
                {/* <PostListItem label={post.label} important={post.important} /> */}
                <PostListItem {...itemProps} />
            </li>
        );
    });
    return <ul className="app-list list-group">{elements}</ul>;
};
export default PostList;
