import React from "react";
import PropTypes from "prop-types";
import { List, Section, Item, Percentage } from './Statistics.styled'


export function Statistics({ items, title }) {
  return (
    <Section>
      <h2>{ title }</h2>
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