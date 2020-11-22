import styled from "styled-components";
import { RegisterButton } from "../Nav/Nav.styles";
export const HomeWrapper = styled.div``;

export const HeroSection = styled.div`
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 7fr 3fr;
    grid-template-areas:
        "img title"
        "scroll scroll";
    grid-column-gap: 50px;
    .img-section {
        grid-area: img;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .title-section {
        grid-area: title;
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
    .scrolldown-section {
        grid-area: scroll;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const PostAddButton = styled(RegisterButton)`
    padding: 20px 10px;
    width: 200px;
    display: flex;
    font-size: 1.2rem;
`;
