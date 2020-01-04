import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/WELarson" target="_blank" rel="noopener noreferrer" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/erikssource" target="_blank" rel="noopener noreferrer" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/eriklarsonkc/" target="_blank" rel="noopener noreferrer" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; 2020 - Erik Larson</li><li><a href="https://html5up.net">Gatsby Template by HTML5 UP</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
