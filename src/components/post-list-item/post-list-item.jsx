import './post-list-item.css';

export default function PostListItem(props) {
    const {
        label,
        onDelete,
        onToggleImportant,
        onToggleLiked,
        important,
        like,
    } = props;

    let classNames = 'app-list-item d-flex justify-content-between';

    if (important) classNames += ' important';
    if (like) classNames += ' like';

    return (
        <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLiked}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-star"></i>
                </button>
                <button
                    className="btn-trash btn-sm"
                    type="button"
                    onClick={onDelete}
                >
                    <i className="fa fa-trash"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    );
}
