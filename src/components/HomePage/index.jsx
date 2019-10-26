import React from 'react'
import Layout from '../Layout';
import Container from '../Container';
import styles from './styles.module.scss';
import useTheme from '../useTheme';

function HomePage() {

    const [currentTheme, setTheme] = useTheme();
    const themes = ['light', 'dark'];

    return (
        <Layout>
            <div className={styles.homepageBackground}>
                <Container>
                    <h1>A Tiny library to manage all your CSS variables to help build custom themes for web apps easily.</h1>
                    <div className={styles.expand}></div>
                    <div className={styles.buttonArea}>
                        {
                            themes.map(item => 
                                <button 
                                    className={`${styles.themeButton} ${item === currentTheme ? styles.active : ``}`}
                                    onClick={() => setTheme(item)}
                                    >{item}</button>
                                )
                        }
                    </div>
                    <div className={styles.window}>
                        <header>
                            <h2 className={styles.title}>StyleFire</h2>
                            <ul className={styles.buttonRow}>
                                <li className={styles.minimize}></li>
                                <li className={styles.maximize}></li>
                                <li className={styles.close}></li>
                            </ul>
                        </header>
                        <div className={styles.contentArea}>
                            <div className={styles.captionArea}>
                                <p>Install StyleFire</p>
                                <p>v1.0.7</p>
                            </div>
                            <pre>npm install --save @haxzie/stylefire</pre>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    )
}

export default HomePage
