import React from 'react'
import PropTypes from 'prop-types';

const ResponsiveImage = ({
  images,
  alt
}) => {
  return (
    <img
      src={images.mobile}
      srcSet={`${images.mobile} 300w, ${images.tablet} 768w, ${images.desktop} 1032w`}
      alt={alt}
    />
  )
}

export default ResponsiveImage

ResponsiveImage.propTypes = {
  images: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
}
