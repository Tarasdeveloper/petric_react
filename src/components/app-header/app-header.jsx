import './app-header.css';
import { Header } from './app-header.styled';

const AppHeader = ({ liked, allPosts }) => {
    return (
        <Header>
            <h1>My Name</h1>
            <h2>
                {allPosts} notes, favorite {liked}
            </h2>
        </Header>
    );
};

export default AppHeader;
