import React from "react";
import PropTypes from "prop-types";
import { Title, Container, Item,Line } from './Transaction.styled'

export function TransactionHistory({items}) {
  return (
    <Container>
  <thead>
    <tr>
      <Title>Type</Title>
      <Title>Amount</Title>
      <Title>Currency</Title>
    </tr>
  </thead>

  <tbody>
        {items.map(({id, type, amount, currency}) => (
          <Line key={id}>
            <Item>{ type }</Item>
            <Item>{ amount }</Item>
            <Item>{ currency }</Item>
          </Line>
        ))}
  </tbody>
</Container>
  )
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),),
};