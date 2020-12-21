import styled from "styled-components";
import { Button } from "@material-ui/core";

export const HomeWrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
`;

export const HeroSection = styled.div`
    height: 85vh;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
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
            color: ${props => props.theme.textPrimary};
            @media only screen and (min-width: 1650px) {
                width: 500px;
            }
        }
        .post-add-section {
            width: 100%;
            align-self: start;
            margin-top: 20px;
            display: grid;

            justify-items: center;
        }
    }
    .scrolldown-section {
        grid-area: scroll;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
// export const PostAddButton = styled(RegisterButton)`
//     && {
//         padding: 10px 30px;
//         width: 200px;

//         font-size: 1.2rem;
//         font-weight: bold;
//         &:hover {
//             box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
//                 0 1px 3px rgba(0, 0, 0, 0.08);
//             background-color: #5469d4;
//         }
//     }
// `;

export const PostAdButton = styled(Button)`
    && {
        padding: 10px 20px;
        width: 15rem;
        font-size: 1.2rem;
        font-weight: bold;
    }
`;
export const FeaturedProductSection = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 2rem;
    margin-bottom: 2rem;
    .title-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
            font-family: ${props => props.theme.titleFont};

            font-size: 1.5rem;
        }
        a {
            color: #3f51b5;
            font-size: 1.1rem;
        }
    }
    .featured-products {
        display: grid;
        grid-template-columns: repeat(4, 220px);
        grid-row-gap: 50px;
        justify-content: space-between;
    }
`;

export const ScrollDownButton = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    .mouse {
        width: 2rem;
        height: 4rem;
        border: 2px solid;
        border-color: ${props => props.theme.textPrimary};
        border-radius: 1rem;
        display: flex;
        span {
            width: 1rem;
            height: 1rem;
            display: block;
            background-color: ${props => props.theme.textPrimary};
            border-radius: 50%;
            margin: auto;
            animation: move-wheel 1s linear infinite;
        }
    }
    .arrow span {
        width: 1.1rem;
        height: 1.1rem;
        display: block;
        border: 2px solid transparent;
        border-right-color: ${props => props.theme.textPrimary};
        border-bottom-color: ${props => props.theme.textPrimary};
        transform: rotate(45deg);
        animation: arrow-down 0.5s alternate infinite;
    }
    @keyframes move-wheel {
        0% {
            opacity: 0;
            transform: translateY(-1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(1rem);
        }
    }
    @keyframes arrow-down {
        0% {
            opacity: 0;
        }
        25% {
            opacity: 0.25;
        }
        50% {
            opacity: 0.5;
        }
        75% {
            opacity: 0.75;
        }
        100% {
            opacity: 1;
        }
    }
`;
