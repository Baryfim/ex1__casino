import React from "react";
// Styles
import classes from "./TopGames.module.css"
import { TopGamesList } from "./Items";
import { Link } from "react-router-dom";


// TODO: Сделать 4 игры представленные на стринце

const TopGames = () => {
    return (
        <div className={classes.TopGameBlock}>
            <h1>Top Games</h1>
            <div className={classes.CardsGamesBlock}>
                {TopGamesList.map(item => (
                    <Link key={item.Title} to={item.path} className={classes.CardBlockLink}>
                        <div className={classes.CardBlock}>
                            <h1>{item.Title}</h1>
                            <p>{item.Info}</p>
                            <img src={item.Image} alt={item.Title} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopGames;