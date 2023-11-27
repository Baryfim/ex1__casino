import React from "react";
import Menu from "../../components/Menu/Menu";
import Container from "../../components/Container/Container";
// Styles
import classes from "./Home.module.css"
import TopGames from "../../components/TopGames/TopGames";

const Home = () => {
    return (
        <Container>
            <main className={classes.MainBlock}>
                <Menu />
                <TopGames />
            </main>
        </Container>
    )
}

export default Home;