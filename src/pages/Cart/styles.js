import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
    padding: 30px;
    margin: 0 40px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 100px;
        margin-right: 100px;

        button {
            background-color: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, "#7159c1")};
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 90%;
    border-bottom: 1px solid #191920;
    justify-self: center;
    margin-left: auto;
    margin-right: auto;

    thead th {
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
    }

    img {
        align-self: center;
        height: 100px;
    }

    strong {
        display: block;
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 16px;
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: start;
        align-items: center;

        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
            text-align: right;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
    }

    strong {
        font-size: 20px;
        margin-left: 5px;
    }
`;
