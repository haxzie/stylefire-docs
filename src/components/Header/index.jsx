import React from 'react'
import styles from './styles.module.scss'
import Container from '../Container';
import Icon from '../Icon';
import GitHubLogo from '../../images/github-logo.svg';

function Header() {
    return (
        <div className={styles.header}>
            <Container>
                <div className={styles.contents}>
                    <Icon>whatshot</Icon>
                    <h1 className={styles.brand}>StyleFire</h1>
                    <div className={styles.expand}/>
                    <ul className={styles.navMenu}>
                        <li>Docs</li>
                        <li>Examples</li>
                    </ul>
                    <img className={styles.socialIcon} src={GitHubLogo}></img>
                </div>
            </Container>
        </div>
    )
}

export default Header
