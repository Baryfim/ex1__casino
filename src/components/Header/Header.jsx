import React, { useState } from "react";

import Container from "../Container/Container";

// Styles
import classes from "./Header.module.css"
// Media
import Money from "../../images/Header/money.svg"
import Bell from "../../images/Header/bell.svg"
import User from "../../images/Header/user.svg"
import Up from "../../images/Header/up.svg"


// TODO: Сделать при нажать на икону в правом верхнем углу выезжающее меню с контентом в нём, например при нажатии на баланс появляется меню с лево в котором либо можно поплнить баланс либо вывести средства разными способами, при нажатии на кнопку "уведомления" выезжает меню со всеми уведомлениями, а при нажатии на кнопку профиля будет выезжать меню в котором будет способ заменить имя пользователя, пароль или почту, а также посмотреть статистику средств
// TODO: При нажатии на кнопку Stocks сделать страницу с колесом, которую можно будет крутить раз в день получая бонусы

const Header = () => {
    const [stylesBalance, setStylesBalance] = useState({display: "none", opacity: "0"})
    const openBalanceWind = () => {
        setStylesBalance({display: "flex", opacity: "0"})
        setTimeout(() => {
            setStylesBalance({display: "flex", opacity: "1"})
        }, 50)
    }

    const closeBalanceWind = () => {
        setStylesBalance({display: "flex", opacity: "0"})
        setTimeout(() => {
            setStylesBalance({display: "none", opacity: "0"})
        }, 50)
    }

    return (
        <header className={classes.HeaderBlock}>
            <Container>
                <div className={classes.HeaderInner}>
                    {/* First block */}
                    <div className={classes.HeaderBlock__StocksAndLang}>
                        <button className={classes.StocksBtn}>
                            Stocks
                        </button>
                        <select className={classes.LangSelector}>
                            <option value="En">En</option>
                            <option value="Ru">Ru</option>
                        </select>
                    </div>
                    {/* Second block (Logotype) */}
                    <div className={classes.LogotypeItem}>
                        <h1>TIXI</h1>
                        <span>casino</span>
                    </div>
                    {/* Therd block */}
                    <div className={classes.UserInfoBlock}>
                        <button className={classes.BalanceBlock} onClick={() => (
                            stylesBalance.display !== "flex"
                            ? openBalanceWind()
                            : closeBalanceWind()
                        )}>
                            <img src={Money} alt="Money" />
                            <span className={classes.MoneyValue}>103</span>
                            <div className={classes.InteractionWithTheBalanceSheet} style={stylesBalance}>
                                <button className={classes.Splash}>
                                    <img width={20} src={Up} alt="Up" />
                                </button>
                                <button className={classes.Withdraw}>
                                    <img width={20} src={Up} alt="Up" style={{transform: "rotate(180deg)"}} />
                                </button>
                            </div>
                        </button>
                        <div className={classes.NotificationsBlock}>
                            <img src={Bell} alt="Bell" />
                        </div>
                        <div className={classes.Profile}>
                            <img src={User} alt="User" />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;