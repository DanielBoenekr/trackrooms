import './Footer.css'

function Footer(){
    return(
        <div className='footer'>
        <div class="container">
            <ul>
                <li><a href="datenschutz.html">Datenschutz</a></li>
                <li><a href="impressum.html">Impressum</a></li>
            </ul>
            <div class="social-icons">
                <a href="https://www.youtube.com/" target="_blank"><img src="youtube-icon.png" alt="YouTube" /></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="instagram-icon.png" alt="Instagram" /></a>
            </div>
        </div>
        </div>
    )
}

export default Footer;