import styled from "styled-components";
import { Fab } from "@material-ui/core";
import { FeaturedProductSection } from "../Home/Home.styles";
export const DashboardNavWrapper = styled.div`
    margin-top: -20px;
    margin-bottom: 20px;
    a {
        font-family: ${props => props.theme.titleFont};
        box-sizing: border-box;
        text-decoration: none;
        color: ${props => props.theme.textPrimary};
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 20px;
        border: 2px solid transparent;
    }
`;

export const MyAdsWrapper = styled(FeaturedProductSection)`
    margin-top: 4em;
    .my-products {
    }
    .icons {
        margin-top: 20px;
        padding: 0 30px;
        display: flex;
        justify-content: space-between;
    }
`;
export const MyFab = styled(Fab)`
    && {
        background-color: ${props => props.mycolor};
        &:hover {
            background-color: ${props => props.mycolorhover};
        }
    }
`;
