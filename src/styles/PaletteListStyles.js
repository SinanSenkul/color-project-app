import background from './background.svg'

const styles = {
    main: {
        width: "100%",
        height: "100vh",
        backgroundColor: "#fffff",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by svgbackgrounds.com */
        backgroundImage: `url(${background})`,
        overflow: 'scroll'
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
        "& a": {
            color: "white",
            textDecoration: 'none',
        },
        "& a:hover": {
            textDecoration: 'underline',
        }
    },
    minipalettesContainer: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    },
    '@media (max-width: 1600px)': {
        container: {
            width: "60%"
        },
    },
    '@media (max-width: 1200px)': {
        container: {
            width: "80%"
        },
    },
    '@media (max-width: 990px)': {
        minipalettesContainer: {
            gridTemplateColumns: "repeat(2,40%)",
            justifyContent: "center"
        }
    },
    '@media (max-width: 770px)': {
    },
    '@media (max-width: 580px)': {
        minipalettesContainer: {
            gridTemplateColumns: "repeat(1,60%)",
            justifyContent: "center"
        }
    }
}

export { styles }