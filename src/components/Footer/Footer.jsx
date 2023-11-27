import React from "react";
import Container from "../Container/Container";
// Styles
import classes from "./Footer.module.css"
import { ROUTES_COMPANY, ROUTES_FOR_PARTNERS, ROUTES_SOCIAL_NETWORKS, ROUTES_SUPPORT } from "../../utils/consts";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className={classes.FooterBlock}>
            <Container>
                <div className={classes.footerInner}>
                    <div className={classes.LogotypeAndInfoBlock}>
                        <div className={classes.LogotypeItem}>
                            <h1>TIXI</h1>
                            <span>casino</span>
                        </div>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using '
                        </p>
                    </div>
                    <div className={classes.InfoBlocks}>
                        <div className={classes.InfoBlock}>
                            <h3 className={classes.NameGroup}>Company</h3>
                            <div className={classes.Links}>
                                {ROUTES_COMPANY.map(route => (
                                    <Link to={route.path}>{route.innerText}</Link>
                                ))}
                            </div>
                        </div>
                        <div className={classes.InfoBlock}>
                            <h3 className={classes.NameGroup}>For Partners</h3>
                            <div className={classes.Links}>
                                {ROUTES_FOR_PARTNERS.map(route => (
                                    <Link to={route.path}>{route.innerText}</Link>
                                ))}
                            </div>
                        </div>
                        <div className={classes.InfoBlock}>
                            <h3 className={classes.NameGroup}>Support</h3>
                            <div className={classes.Links}>
                                {ROUTES_SUPPORT.map(route => (
                                    <Link to={route.path}>{route.innerText}</Link>
                                ))}
                            </div>
                        </div>
                        <div className={classes.InfoBlock}>
                            <h3 className={classes.NameGroup}>Social Networks</h3>
                            <div className={classes.Links}>
                                {ROUTES_SOCIAL_NETWORKS.map(route => (
                                    <Link to={route.path}>{route.innerText}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;