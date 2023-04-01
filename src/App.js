import './App.css';
import MainText from './component/v1/mainText';
import VersionBox from './component/v1/versionBox';
import LinkBox from './component/v1/linkBox';
import { BirdsBackground } from './component/v2/background';
import VersionTextTwo from './component/v2/versionText2';
import HeaderTitle from './component/v2/headerTitle';
import List from './component/list';
import {
  createBrowserRouter,
  RouterProvider,Routes,Route,Navigate
} from "react-router-dom";

function App() {

  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<Navigate to='portfolio' />} />
        <Route path='portfolio' element={<List></List>} />
        <Route path='portfolio/v1' element={<VersionOnePage></VersionOnePage>} />
        <Route path='portfolio/v2' element={<VersionTwoPage></VersionTwoPage>} />
      </Routes>

       {/* <RouterProvider router={router} /> */}
      {/* <List></List> */}
    
     {/* <VersionBox></VersionBox>
        <MainText></MainText> */}
    </div>
  );
}
const VersionOnePage = () => {
  return ( 
    <div>
      <VersionBox></VersionBox>
        <MainText></MainText>
    </div>
   );
}

const VersionTwoPage = () => {
  return ( 
    <BirdsBackground>
      <div className="">
      <VersionTextTwo/>
      <HeaderTitle/>
      </div>
    </BirdsBackground> 
   );
}
 


export default App;
