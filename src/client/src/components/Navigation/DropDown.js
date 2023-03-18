import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-center md:hidden mt-5">
      <div>

      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
      <FontAwesomeIcon className="text-white fa-2x" icon={faBars} /> 
      </Button>
      <StyledMenu
      className="ml-4 mt-2"
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/">
          <StyledMenuItem onClick={handleClose}>
            <ListItemText primary="Home" />
          </StyledMenuItem>
        </Link>
        <Link to="/portfolio">
          <StyledMenuItem onClick={handleClose}>
            <ListItemText primary="Portfolio" />
          </StyledMenuItem>
        </Link>
        <Link to='/contact'>
          <StyledMenuItem onClick={handleClose}>
            <ListItemText primary="Contact" />
          </StyledMenuItem>
        </Link>
      </StyledMenu>
      </div>
    </div>
  );
}
