const styles = {
    main: {
        backgroundColor: "blue",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100vh"
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
        color: "white",
        alignItems: "center",
        justifyContent: "space-between",
        "& a":{
            color: "white"
        }
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