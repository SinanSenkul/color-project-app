const styles = {
    main: {
        width: "20%",
        height: "22.5%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-0.25rem",
    },
    boxContent: {
        position: "absolute",
        padding: "0.3rem",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "black",
        letterSpacing: "0.1rem",
        fontSize: "0.75rem",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        '& :hover': {
            color: 'white',
        }
    }
}

export { styles }