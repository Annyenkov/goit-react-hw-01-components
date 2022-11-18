import PropTypes from "prop-types";
import { Item, Percentage } from './statistic.styled'

export const Statistic = ({
  label,
  percentage,
}) => {
  return (
    <Item bg={label}>
      <span>{label}</span>
      <Percentage>{percentage}%</Percentage>
    </Item>
  )
}

Statistic.prototype = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}