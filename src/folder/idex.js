import { Component, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app';

class WhoAmI extends Component {
    // constructor(props) {
    // super(props);
    // this.state = {
    //     years: 27,
    // };
    // this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //     this.setState((state) => ({
    //         years: ++state.years,
    //     }));
    // };
    // }

    state = {
        years: 20,
    };

    nextYear = () => {
        this.setState((state) => ({
            years: ++state.years,
        }));
    };

    // nextYear() {
    //     this.setState((state) => ({
    //         years: ++state.years,
    //     }));
    // }

    render() {
        const { name, surname, link } = this.props;
        const { years } = this.state;
        return (
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>
                    My name is {name}, surname - {surname}, years = {years}
                </h1>
                <a href={link}>My profile</a>
            </>
        );
    }
}

const All = () => {
    return (
        <>
            <WhoAmI name="John" surname="Smith" link="google.com" />
            <WhoAmI name="Jack" surname="Potter" link="facebook.com" />
            <WhoAmI name="Simon" surname="Shepard" link="vk.com" />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        {/* <App /> */}
        <All />
    </StrictMode>
);
