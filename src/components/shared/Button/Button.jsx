import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';

const Button = ({
  label,
  link,
  clickHandler,
  ...restProps
}) => {
  return (
    <S.Button
      to={link}
      onClick={clickHandler ? () => clickHandler() : null}
      {...restProps}>
      {label}
    </S.Button>
  )
}

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string
}

Button.defaultProps = {
  label: 'Click me'
}