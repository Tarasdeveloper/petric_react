import { Component } from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'like', label: 'Favorite' },
    ];

    render() {
        const buttons = this.buttons.map(({ name, label }) => {
            const { filter, onFilterSelect } = this.props;
            const active = filter === name;
            const classes = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${classes}`}
                    onClick={() => onFilterSelect(name)}
                >
                    {label}
                </button>
            );
        });
        return <div className="btn-group">{buttons}</div>;
    }
}
