import styled from "styled-components";

export const SearchWrapper = styled.div`
    form {
        display: flex;
        justify-content: space-between;
        border: 1px solid #e9e9e9;
        border-radius: 20px;
    }

    .search-form input[type="text"] {
        width: 250px;
        height: 35px;
        background: #ffffff;
        outline: none;
        box-sizing: border-box;
        border: none;
        padding-left: 20px;
        font-size: 16px;
        transition-duration: 0.4s;
    }

    .search-button {
        height: 35px;
        width: 50px;
        border: none;
        color: #111111;
        background-color: #ffffff;
        font-weight: bold;
        transition: background-color 0.4s ease-out;
        transition: 0.3s;
        cursor: pointer;
    }
    .search-button:hover {
        background: #111111;
        color: #f1f1f1;
    }
`;
