import './App.css';
// import MainText from './component/mainText';
// import VersionBox from './component/versionBox';
// import LinkBox from './component/linkBox';
import { BirdsBackground } from './v2/background';
import VersionTextTwo from './v2/versionText2';
import HeaderTitle from './v2/headerTitle';

function App() {
  return (
    <div className="App" >
    <BirdsBackground>
      <div className="">
      <VersionTextTwo/>
      <HeaderTitle/>
      </div>
    </BirdsBackground>
     {/* <VersionBox></VersionBox>
        <MainText></MainText> */}
    </div>
  );
}

export default App;
