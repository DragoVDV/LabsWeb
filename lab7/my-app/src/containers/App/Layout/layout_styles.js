import styled from 'styled-components';

export const StyledHeader = styled.div`
    padding: 16px 20px 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    table-layout: fixed;
    border-spacing: 10px;
    > div {
        display: flex;
    }
    p {
        font-size: 20px;
    }
    span {
        font-size: 24px;
    }
`;

export const IconsWrapper = styled.div`
    display: flex;
    > span {
        margin: 0 12px;
    }


`

export const Header = styled.div `

    display: flex;
    align-items: center;

`