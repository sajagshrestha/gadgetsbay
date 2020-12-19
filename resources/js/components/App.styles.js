import styled from "styled-components";

export const Theme = {
    textPrimary: "#2F2E41",
    textSecondary: "white",
    primaryColor: "white",
    secondaryColor: "#6C63FF",
    border: "2px solid #F3F3F3",
    titleFont: `${"Montserrat"}, sans-serif`
};

export const AppWrapper = styled.div`
    width: 80%;

    margin: 0 auto;
`;
export const LoadingSpinner = styled.div`
    height: ${props => (props.loaderHeight ? props.loaderHeight : "100%")};
    display: flex;
    align-items: center;
    justify-content: center;
`;
