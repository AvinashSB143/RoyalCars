import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import withStyles from "@material-ui/core/styles/withStyles";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { styled, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./header.css";
import Logo from "../../images/Logo.png";

const styles = theme => ({
    root: {
      background: "#f2f3f5",
    },
    
  });

const Header = (props) => {
    const {classes} = props;
    return(
        <div className="header_conainer"> 
            <div className="header_logo">
            <img src={Logo} width="100px" height="100px" />
            </div>
            <div className="header_search_bar">
            {/* <Search>
                
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
            </Search> */}
            <div className="search_container">
                <TextField
                id="standard-search"
                placeholder="Search field"
                type="search"
                variant="standard"
                classes={{ root: classes.root }}
                InputProps={{ disableUnderline: true }}
                className="search_text"
                />
                 <SearchIcon className="search_icon"/>
            <div>
                    
                </div>

            </div>
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

export default withStyles(styles)(Header);