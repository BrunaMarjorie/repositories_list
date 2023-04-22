import styled from "styled-components";
import { darken } from "polished";

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin: 0 50px;

    li {
        display: flex;
        flex-direction: column;
        padding: 10px;
        max-width: 160px;

        img {
            align-self: center;
            height: 180px;
        }

        > strong {
            line-height: 20px;
            color: #333;
            margin-top: 5px;
            text-align: left;

            overflow: hidden;
            text-overflow: ellipsis; /* display three dots */
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
                    line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        > span {
            font-size: 18px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;

            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, "#7159c1")};
            }

            div {
                display: flex;
                align-items: center;
                padding: 10px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
                padding: 0 5px;
            }

            
        }
    }
`;
