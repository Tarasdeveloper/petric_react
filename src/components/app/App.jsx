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
            {
                label: 'Going to learn React',
                important: true,
                like: false,
                id: 1,
            },
            {
                label: 'Learnig advanced React',
                important: false,
                like: false,
                id: 2,
            },
            {
                label: 'Want to finish Redux',
                important: false,
                like: false,
                id: 3,
            },
        ],
        term: '',
        filter: 'all',
    };

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
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
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = { ...old, important: !old.important };

            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return { data: newArr };
        });
    };

    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = { ...old, like: !old.like };

            const newArr = [
                ...data.slice(0, index),
                newItem,
                ...data.slice(index + 1),
            ];

            return { data: newArr };
        });
    };

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter((item) => item.like);
        } else {
            return items;
        }
    };

    onUpdateSearch = (term) => {
        this.setState({ term });
    };

    onFilterSelect = (filter) => {
        this.setState({ filter });
    };

    render() {
        const { data, term, filter } = this.state;

        const liked = data.filter((item) => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(
            this.searchPost(data, term),
            filter
        );

        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                />
                <PostAddForm onAdd={this.addItem} />
            </AppBlock>
        );
    }
}
