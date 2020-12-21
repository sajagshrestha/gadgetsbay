import styled from "styled-components";

export const DetailedAdViewWrapper = styled.div`
    display: grid;
    grid-template-columns: 55% auto;
    grid-template-rows: 500px auto;
    grid-gap: 50px;
    grid-template-areas:
        "product-image info"
        "about info";
    margin-top: 50px;
    .product-image-gallery {
        grid-area: product-image;
    }
    .product-info-section {
        grid-area: info;

        .product-title {
            font-family: ${props => props.theme.titleFont};
            font-weight: bold;
            text-align: justify;
            border-bottom: ${props => props.theme.border};
            font-size: 2rem;
        }
    }
    .product-about-section {
        grid-area: about;
    }
    @media (max-width: 768px) {
        .image-gallery-slide-wrapper.left,
        .image-gallery-slide-wrapper.right {
            width: calc(100% - 87px);
        }
    }
    @media only screen and (max-width: 1700px) {
        grid-template-rows: 400px auto;
    }
    @media only screen and (max-width: 1500px) {
        grid-template-rows: 350px auto;
    }
    @media only screen and (max-width: 1300px) {
        grid-template-rows: 300px auto;
    }
`;
export const DetailsGrid = styled.div`
    padding: ${props => {
        if (props.gridType === "about") return "0";
        else return "15px 0";
    }};
    border-bottom: ${props => {
        if (props.gridType === "about") return "";
        else return props.theme.border;
    }};
    .title {
        font-family: ${props => props.theme.titleFont};
        font-weight: bold;
        font-size: 1.2rem;
    }
    .grid-items {
        margin: 4px 0;
        text-align: justify;
        .product-price {
            color: #669e4f;
        }
    }
    @media only screen and (max-width: 1300px) {
        padding: ${props => {
            if (props.gridType === "about") return "0";
            else return "5px 0";
        }};
    }
    border-bottom: ${props => props.theme.border};
`;

export const MiniAdCardWrapper = styled.div`
    cursor: pointer;
    height: 21rem;
    width: 15rem;
    display: grid;
    grid-template-rows: 13rem 9rem;
    grid-template-columns: 15rem;
   
    transition: all 0.2s ease-out;
    color: #0c0c0c;
    box-shadow: ${props =>
        props.type === "myAds"
            ? "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)"
            : "none"};

    &:hover {
        box-shadow:0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
        /* box-shadow: ${props =>
            props.type !== "myAds"
                ? "0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)"
                : "none"}; */
        color: #0c0c0c;
        text-decoration: none;
    }
    img {
        height: 100%;
        width: 100%;
    }
    .home-title-info {
        
        display: grid;
        align-self: center;
        grid-template-columns: 13rem;
        grid-template-rows: 1.6rem 2rem 2rem;
        justify-content: center;
        min-width: 0;
        min-height: 0;
        .home-title {
            font-size: 1.3rem;
            font-family: ${props => props.theme.titleFont};

            font-weight: 550;
            color: #0c0c0c;
        }
        .home-condition {
            font-size: 1rem;
            color: #4a4a4a;
        }
        .home-price {
            color: #17924f;
            font-size: 1.2rem;
            align-self: center;
        }
        .home-title,
        .home-price,
        .home-condition {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
        }
    }
`;

export const MainAdCardWrapper = styled.div`
    cursor: pointer;
    height: 15rem;
    width: 55rem;
    display: grid;
    grid-template-columns: 1.5fr 3fr 1.2fr;

    align-items: center;
    justify-items: center;
    box-shadow: 2px 4px 15px rgba(115, 112, 112, 0.15);
    .img-wrapper,
    .product-info-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .img-wrapper {
        img {
            height: 8rem;
            width: 10rem;
        }
    }
    .product-info-wrapper {
        height: 85%;
        display: grid;
        grid-template-columns: 31rem;
        text-align: justify;

        grid-template-rows: auto;
        .title {
            font-family: ${props => props.theme.titleFont};
            font-size: 1.3rem;
            font-weight: 600;
            align-self: end;
            padding: 5px 0;
            border-bottom: ${props => props.theme.border};
        }
        .specs {
            font-size: 0.9rem;

            color: #3d3d3d;
        }
        .description {
            align-self: start;
        }
        .title,
        .description {
            padding: 0;
            overflow: hidden;

            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        .seller-info {
            margin: 0;
            font-size: 1rem;
        }
    }
    .price-wrapper {
        display: grid;
        align-items: center;
        justify-items: center;
        font-size: 1.1rem;
        .price {
            color: #669e4f;
            border: none;
        }
        .condition {
            font-size: 0.8rem;
        }
    }
    @media only screen and (max-width: 1300px) {
        width: 50rem;
        grid-template-columns: 2fr 3fr 1fr;
    }
`;
