import './App.css';
import MainText from './component/mainText';
import VersionBox from './component/versionBox';
import LinkBox from './component/linkBox';

function App() {
  return (
    <div className="App">
      <VersionBox></VersionBox>
        <MainText></MainText>
        {/* <LinkBox></LinkBox> */}
    </div>
  );
}

export default App;
