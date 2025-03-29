// import { Button } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            {/* <Button color="info">All</Button> */}
            <button type="button" className="btn btn-info">
                All
            </button>
            <button type="button" className="btn btn-outline-secondary">
                Favorite
            </button>
        </div>
    );
};
export default PostStatusFilter;
