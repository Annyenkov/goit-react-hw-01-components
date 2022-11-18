import PropTypes from "prop-types";
import {Item, Line} from './transaction.styled'

export const Transaction = ({
  type,
  amount,
  currency,
}) => {
  return (
    <Line>
      <Item>{ type }</Item>
      <Item>{ amount }</Item>
      <Item>{ currency }</Item>
    </Line>
  )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}
