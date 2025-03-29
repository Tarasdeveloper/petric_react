import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        color: ${(props) => (props.colored ? 'red' : 'black')};
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`;
