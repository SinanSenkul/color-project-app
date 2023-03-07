const styles = {
    main: {
        backgroundColor: "blue",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100%"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    minipalettesContainer: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    }
}

export { styles }