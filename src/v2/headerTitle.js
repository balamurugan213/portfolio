import styles from '../versiontwo.module.css'
import { useMediaQuery } from 'react-responsive'
import logo from '../img/icons/github-brands.svg';

const HeaderTitle = () => {
    return ( 
        <>
       
        <div className={styles.headertext} style={{color:'black'}}>
            <h3>
                Hi There
            </h3>
            <h1>
                I am Balamurugan213
            </h1>
        <ContentDetail></ContentDetail>
        <div class="social-menu">
        <ul>
            <li><a href="https://github.com/balamurugan213" target="blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://www.instagram.com/balamurugan213_" target="blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/balamurugan213/" target="blank"><i class="fab fa-linkedin-in"></i></a></li>
            {/* <li><a href="https://codepen.io/sanketbodke"><i class="fab fa-codepen" target="blank"></i></a></li> */}
        </ul>
    </div>
        
        </div>
        
        </>
    );
}


const ContentDetail=()=>{
    if(useMediaQuery({ maxWidth: 670 }))
    {
        return(
            <p>
            A developer who is curious to learn new technologies every day and use it to its advantage with the things I develop.
            </p>
        )
    }
    else{
        return(
            <p>
            A developer who is curious to learn new technologies every day <br/> and use it to its advantage with the things I develop.
            </p>
        )
    }
}

export default HeaderTitle;