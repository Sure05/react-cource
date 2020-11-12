import React, { useMemo } from 'react';
import { Button, Icon, Label, List } from "semantic-ui-react";

export default function CartSumm({products}){

    const totalPrice = useMemo(() => {
        return products.reduce((sum, product) => {
            return Math.ceil((sum + (product.price * product.count) * 100) / 100)
        }, 0);
    }, [products]);

    return (
        <List.Item>
            <List.Content>
                <Button as='div' labelPosition='right'>
                    <Button icon color='green'>
                        Checkout
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {totalPrice}$
                    </Label>
                </Button>
            </List.Content>
        </List.Item>
    )
}