import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { styled, alpha } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./header.css";
import Logo from "../../images/Logo.png";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const Header = () => {
    return(
        <div className="header_conainer"> 
            <div className="header_logo">
            <img src={Logo} width="100px" height="100px" />
            </div>
            <div>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            </div>
            <div className="header_buy_car">
                <b>
                    Buy Car
                </b>
                <ArrowDropDownIcon />
            </div>
            <div>
                <b>
                   Sell Car
                </b>
            </div>
            <div className="header_buy_car">
                <b>
                    more
                </b>
                <ArrowDropDownIcon />
            </div>
            <div>
                <FavoriteBorderIcon />
            </div>
            <div className="header_SignIn_bar">
                <p>
                    Hello, Sign in
                </p>
                <b>Account
                </b>
                <ArrowDropDownIcon />
            </div>
            <div className="header_SignIn_bar">
                <p>
                    call at
                </p>
                <b>7788665544
                </b>
            </div>
        </div>
    )
}

export default Header;