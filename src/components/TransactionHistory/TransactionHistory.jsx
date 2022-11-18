import React from "react";
import { Transaction } from "./transactions";
import { Title, Container } from './transaction.styled'

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
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
  </tbody>
</Container>
  )
}