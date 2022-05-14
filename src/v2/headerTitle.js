import styles from '../versiontwo.module.css'
import { useMediaQuery } from 'react-responsive'

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
            {/* <p>
            A developer who is curious to learn new technologies every day and use it to its advantage with the things I develop.
            </p> */}
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