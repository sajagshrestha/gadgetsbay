import styled from "styled-components";
import { RegisterButton } from "../Nav/Nav.styles";
export const HomeWrapper = styled.div``;

export const HeroSection = styled.div`
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    grid-template-rows: 7fr 3fr;
    grid-column-gap: 50px;
    .img-section {
        img {
            width: 100%;
            height: 100%;
        }
    }
    .title-section {
        display: grid;
        width: 100%;
        align-items: center;
        justify-content: stretch;
        grid-template-rows: 2fr 70px 2fr;
        justify-items: center;
        .logo {
            align-self: end;
            width: 100%;
            img {
                width: 100%;
            }
        }
        .secondary-title {
            text-align: center;
            width: 350px;
            align-self: start;
            font-size: 1.3rem;
            font-weight: bold;
            margin-top: 10px;
            color: ${props => {
                props.theme.textPrimary;
            }};
        }
        .post-add-section {
            align-self: start;
            margin-top: 20px;
        }
    }
`;
export const PostAddButton = styled(RegisterButton)`
    height: 50px;
    width: 250px;
    display: flex;
    font-size: 1.3rem;
`;
