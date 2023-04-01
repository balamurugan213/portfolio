import { Link } from "react-router-dom";
import '../listpage.css'

const List = () => {
    return ( 
        <div className="listPage" >
            <div className="sizedbox">
            <div className="divider">

            </div>
            </div>
            
            <div className="ListBox">
                <div className="listItem">
                <Link to={'v1'} className="title">
                    <h1 className="head"> Version 1</h1>
                    <h3 className="sub">LAST UPDATED<span>25 DEC 2021</span> </h3>
                    </Link>    
                </div>
                <div className="listItem">
                <Link to={'v2'} className="title"><h1> Version 2</h1>
                <h3 className="sub">LAST UPDATED<span>21 DEC 2022</span> </h3>
                </Link>    
                </div>
            </div>
        </div>
     );
}
 
export default List;