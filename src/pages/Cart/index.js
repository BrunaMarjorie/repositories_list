import React from "react";
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from "react-icons/md"
import { Container, ProductTable, Total } from "./styles";

export default function Cart() {
    return (
    <Container>
        <ProductTable>
            <thead>
                <tr>
                    <th />
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th />
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>
                        <img src="https://m.media-amazon.com/images/I/51eF9eq4ZGL._SX322_BO1,204,203,200_.jpg" alt="book"/>
                    </td>
                    <td>
                        <strong>The Last Devil To Die: The Thursday Murder Club 4</strong>
                        <span>€15.00</span>
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <MdRemoveCircleOutline size={20} color="#7159c1"/>
                            </button>
                            <input type="number" readOnly value={2}/>
                            <button type="button">
                                <MdAddCircleOutline size={20} color="#7159c1"/>
                        </button>
                        </div>
                    </td>
                    <td>
                        <span>€30.00</span>
                    </td>
                    <td>
                        <button type="button">
                            <MdDelete size={20} color="7159c1"/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </ProductTable>

        <footer>
            <button type="button">Go to checkout</button>

            <Total>
                <span>Total</span>
                <strong>€56.90</strong>
            </Total>
        </footer>
    </Container>);
}