import React from "react";
import { Statistic } from "./statistic"
import { List, Section } from './statistic.styled'


export function Statistics({ items }) {
  return (
    <Section>
      <h2>Upload stats</h2>
      <List>
        {items.map(item => (
          <Statistic
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </List>
    </Section>
  )
}