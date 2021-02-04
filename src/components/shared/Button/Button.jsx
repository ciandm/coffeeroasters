import React from 'react'
import PropTypes from 'prop-types';
import * as S from './styled';

const Button = ({
  label,
  link
}) => {
  return (
    <S.Button>
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
  label: 'Click me',
  link: '/'
}