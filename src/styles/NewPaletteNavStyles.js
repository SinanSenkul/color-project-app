import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    height: "4rem",
    flexDirection: "row",
    justifyContent: "space-between",
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const styles = {
    main: {
        display: "flex",
    },
    toolbar: {
        display: "flex",
        flexDirection: "row",
    },
    paletteNameForm: {
        display: "flex",
        flexDirection: "row",
        marginLeft: "1rem",
    },
    paletteNameTextbox: {
        marginRight: "0.75rem !important",
        height: "2rem !important"
    },
    navButtonsContainer: {
        display: "flex",
        flexDirection: "row",
    },
    navButton: {
        fontSize: "0.75rem !important",
        width: "8rem",
        height: "2rem",
        marginRight: "0.75rem !important",
        marginLeft: "0.75rem !important",
    },
    goBackLink: {
        textDecoration: "none"
    }
}

export { styles, drawerWidth, AppBar }