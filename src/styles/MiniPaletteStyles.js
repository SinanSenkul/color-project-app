const styles = {
    main: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        },
        border: "1px solid black",
        display: "flex",
        flexDirection: "column"
    },
    colorsContainer: {
        "&:hover": {
            cursor: "pointer"
        },
        backgroundColor: "white",
        height: "140px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "0.3rem"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative",
    },
    emoji: {
        marginLeft: "0.5rem",
    },
    babyColor: {
        width: "20%",
        height: "2.1rem",
        display: "inline-block",
        /* margin: "0 auto", */
        position: "relative",
        marginBottom: "-0.25rem"
    },
    deleteIcon: {
        marginRight: '0rem',
        opacity: '1'
    }
}

export { styles }