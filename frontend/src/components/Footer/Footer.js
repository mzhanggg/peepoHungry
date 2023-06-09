import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer id="main-footer">
            <div id="footer-container">
                <ul id="footer-col">
                    <h2 id="footer-title">Frontend</h2>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                </ul>

                <ul id="footer-col">
                    <h2 id="footer-title">Backend</h2>
                    <li>Rails</li>
                    <li>Ruby</li>
                    <li>PostgresSQL</li>
                </ul>

                <ul id="footer-col">
                    <h2 id="footer-title">Other</h2>
                    <li>Google Maps API</li>
                    <li>AWS S3</li>
                </ul>

                <ul id="footer-col">
                    <h2 id="footer-title">About Me</h2>
                    <li><a id="per-link" href="https://github.com/mzhanggg/peepoHungry">GitHub</a></li>
                    <li><a id="per-link"href="https://www.linkedin.com/in/michele-zhang-380417199/">LinkedIn</a></li>
                </ul>

            </div>

            <p id="copyright">{`Copyright © ${year} peepoHungry and related marks are registered trademarks of peepoHungry.`}</p>
        </footer>
    )
}

export default Footer;