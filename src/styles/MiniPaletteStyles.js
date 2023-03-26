const styles = {
    main: {
        backgroundColor: "white",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        height: "10rem"
    },
    colorsContainer: {
        "&:hover": {
            cursor: "pointer"
        },
        backgroundColor: "white",
        height: "140px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "0.3rem",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0rem",
        color: "black",
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
        margin: "0rem",
        fontSize: "1rem",
        position: "relative",
        marginBottom: "-0.6rem",
        "&:hover": {
            cursor: "pointer",
            color: "#D2042D",
        }
    },
    bottomInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
}

export { styles }