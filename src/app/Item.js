import { FormatAlignJustify, Height } from '@mui/icons-material';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

function Item(props) {
  const { sx, ...other } = props;

  const baseStyles = {

    color: 'grey.800',
    padding: 3,
    borderRadius: 2,
    textAlign: 'center',
    fontSize: '0.875rem',
    fontWeight: 700,
    FormatAlignJustify: "space-between "
  };

  const styles = {
    ...baseStyles,
    ...sx,
  };

  return <Box sx={styles} {...other} />;
}

Item.propTypes = {
  sx: PropTypes.object, // Ensure sx is an object
};

export default Item;
