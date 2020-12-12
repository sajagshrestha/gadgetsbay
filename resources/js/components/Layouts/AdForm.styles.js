import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const AdFormWrapper = styled.div `
    .RadioButton{
        color: rgba(0, 0, 0, 0.54);
    }
    .images-container {
        width: 60vw;
        display: grid;
        grid-template-columns: 1fr 1fr;

        justify-content: center;
        align-items: center;

        border: solid 1px #ced4da;
        padding: 50px;
    }
    .preview-plus-add {
        display: grid;
        grid-template-rows: 2fr 1fr;
        justify-content: center;
        align-items: center;
    }
    .primary-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .primary-image {
        height: 300px;
        width: 300px;
    }
    .preview-image-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
    }

    .preview-images {
        height: 100px;
        width: 120px;
    }
    .my-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .ad-form-button {
        margin: 10px 0px;
    }
    .error-text {
        color: red;
        font-size:10px;
    }
    .file-upload{
        margin:10px 10px 10px 0;
    }
`;

export const StyledTextField = styled.div `
    // width: minmax(280px,400px);
    max-width:30%;
    margin: 20px 0px;
    display:block;
`;
