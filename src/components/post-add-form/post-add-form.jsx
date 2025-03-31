import { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    state = {
        text: '',
    };
    onValueChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({ text: '' });
    };

    render() {
        return (
            <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="What are you thinking about?"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button className="btn btn-outline-secondary" type="submit">
                    Add
                </button>
            </form>
        );
    }
}
