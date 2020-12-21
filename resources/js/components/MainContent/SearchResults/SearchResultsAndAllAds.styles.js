import styled from "styled-components";

export const AdsAndFilterWrapper = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    min-height: 71vh;
`;

export const AdsWrapper = styled.div`
    display: grid;
    grid-row-gap: 50px;
    justify-self: center;
`;

export const FilterWrapper = styled.div`
    width: 300px;
    padding: 10px;
    .filter-form {
        display: grid;
        grid-gap: 20px;
        .form-group {
            display: grid;
            grid-gap: 10px;
            .form-items {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 10px;
            }
        }
    }
    @media screen and (max-width: 1500px) {
        width: 250px;
    }
`;
