import React from "react";
import PropTypes from "prop-types";
import { List, Section, Item, Percentage } from './Statistic.styled'


export function Statistics({ items }) {
  return (
    <Section>
      <h2>Upload stats</h2>
      <List>
        {items.map(({id, label, percentage}) => (
          <Item bg={label} key={id}>
            <span>{label}</span>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  )
}

Statistics.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),),
}