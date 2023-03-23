const styles = {
    main: {
        width:"100%",
        height: "100vh",
        backgroundColor: "olive",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
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
        color: "black",
        alignItems: "center",
        justifyContent: "space-between",
        "& a": {
            color: "black"
        }
    },
    minipalettesContainer: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    },
    '@media (max-width: 1000px)': {
        minipalettesContainer: {
            display: "flex",
            flexDirection: "column",
            width:"60%"
        },
        main:{
            height: "auto"
        }
    },
    '@media (max-width: 800px)': {
        minipalettesContainer: {
            display: "flex",
            flexDirection: "column",
            width:"70%"
        },
        main:{
            height: "auto"
        }
    },
    '@media (max-width: 600px)': {
        minipalettesContainer: {
            display: "flex",
            flexDirection: "column",
            width:"80%"
        },
        main:{
            height: "auto"
        }
    }
}

export { styles }