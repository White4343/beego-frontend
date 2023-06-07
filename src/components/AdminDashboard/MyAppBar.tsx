import * as React from 'react';
import {AppBar} from 'react-admin';
import logo from '../../assets/logo.svg'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import IconButton from '@material-ui/core/IconButton'
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {UserAPI} from "../../utils/api";


const MyAppBar = (props: any) => {
    const navigate = useNavigate();
    const onClickOrderHandler = () => navigate("/");

    const onClickReserveCopy = async () => {
        const reserve = await UserAPI.createReserveCopy()
        alert(reserve)
    }

    return (
        <AppBar
            sx={{
                "& .MuiToolbar-root": {
                    justifyContent: "space-between",
                },
                "& .RaAppBar-title": {
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                },
                "& .css-tltakn-RaLayout-root .RaLayout-content": {
                    marginTop: "50px !important"
                },
            }}
            {...props}
        >
            <img src={logo} alt="logo" width={60}/>
            <Button variant="contained" style={{marginLeft: "15px"}} onClick={onClickReserveCopy}>Reserve Copy</Button>
            <span style={{flex: 1}}/>
            <IconButton color="inherit" onClick={onClickOrderHandler}>
                <HomeRoundedIcon/>
            </IconButton>

        </AppBar>
    );
}


export default MyAppBar;