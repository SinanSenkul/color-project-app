const styles = {
    main: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    colorboxContainer: {
        height: "85%",
        display: "flex",
        flexWrap: "wrap",
    },
    footer: {
        backgroundColor: "white",
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontWeight: "bolder"
    },
    emojiSpan: {
        fontSize: "1.5rem"
    },
    goBack: {
        width: '20%',
        height: '22.5%',
        margin: '0 auto',
        display: 'flex',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: "40%",
        backgroundColor: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    link: {
        fontWeight: "bolder",
    },
    '@media (max-width: 1000px)': {
        goBack: {
            height: '11.25%',
            width: '50%'
        },
    },
    '@media (max-width: 600px)': {
        goBack: {
            height: '6%',
            width: '100%'
        },
    }
}

export { styles }