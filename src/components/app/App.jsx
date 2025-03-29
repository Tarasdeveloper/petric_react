import { Component } from 'react';
import AppHeader from '../app-header';
import PostAddForm from '../post-add-form';
import PostList from '../post-list';
import PostStatusFilter from '../post-status-filter';
import SearchPanel from '../search-panel';

import { AppBlock } from './App.styled';
import './app.css';

export default class App extends Component {
    state = {
        data: [
            { label: 'Going to learn React', important: true, id: 1 },
            { label: 'Learnig React', important: false, id: 2 },
            { label: 'Want to finish Redux', important: false, id: 3 },
        ],
    };

    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newArr,
            };
        });
    };

    maxId = 4;

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return { data: newArr };
        });
    };

    onToggleImportant = (id) => {
        console.log(`Important ${id}`);
    };

    onToggleLiked = (id) => {
        console.log(`Like ${id}`);
    };

    render() {
        return (
            <AppBlock>
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem} />
                <PostAddForm
                    onAdd={this.addItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
            </AppBlock>
        );
    }
}
