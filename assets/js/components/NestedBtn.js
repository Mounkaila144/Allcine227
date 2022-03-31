import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {useNavigate} from "react-router-dom";

const NestedBtn = ({name, link,setOpen}) => {
    let navigate = useNavigate();
    const handleDrawerClose = () => {
        navigate(link)
        setOpen(false);
    };
    return (
        <ListItemButton
            sx={{pl: 4}}
           onClick={handleDrawerClose}
        >
            <ListItemIcon>
                <StarBorder/>
            </ListItemIcon>
            <ListItemText primary={name}/>
        </ListItemButton>
    )
        ;
};

export default NestedBtn;
