import './post-add-form.css';

const PostAddForm = ({ onAdd }) => {
    return (
        <div className="bottom-panel d-flex">
            <input
                className="form-control new-post-label"
                type="text"
                placeholder="What are you thinking about?"
            />
            <button
                className="btn btn-outline-secondary"
                type="submit"
                onClick={() => onAdd('Hello')}
            >
                Add
            </button>
        </div>
    );
};
export default PostAddForm;
