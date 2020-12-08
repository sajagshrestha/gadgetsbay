import styled from "styled-components";
import { RegisterButton } from "../Nav/Nav.styles";
export const HomeWrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
`;

export const HeroSection = styled.div`
    height: 89.5vh;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
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
            font-family: ${props => props.theme.titleFont};

            font-size: 1.3rem;
            font-weight: bold;
            margin-top: 5px;
            color: ${props => {
                props.theme.textPrimary;
            }};
            @media only screen and (min-width: 1650px) {
                width: 500px;
            }
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
    && {
        padding: 10px 30px;
        width: 200px;

        font-size: 1.2rem;
        font-weight: bold;
        &:hover {
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
                0 1px 3px rgba(0, 0, 0, 0.08);
            background-color: #5469d4;
        }
    }
`;

export const FeaturedProductSection = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;

    .title {
        font-family: ${props => props.theme.titleFont};

        font-size: 1.5rem;
    }
    .featured-products {
        display: grid;
        grid-template-columns: repeat(4, 220px);
        grid-row-gap: 50px;
        justify-content: space-between;
    }
`;
