import { ListGroup } from 'reactstrap';
import './post-list.css';
import PostListItem from '../post-list-item';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((post) => {
        const { id, ...itemProps } = post;
        return (
            <li className="list-group-item" key={id}>
                {/* <PostListItem label={post.label} important={post.important} /> */}
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        );
    });
    return <ListGroup className="app-list">{elements}</ListGroup>;
};
export default PostList;
