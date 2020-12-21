import styled from "styled-components";

export const FooterWrapper = styled.div`
    clear: both;
    position: relative;
    height: 3rem;
    border-top: ${props => props.theme.border};
    margin-top: 2rem;
    display: flex;
    align-items: center;
    .copyright {
        font-size: 0.9rem;
        color: #4a4a4a;
    }
`;
