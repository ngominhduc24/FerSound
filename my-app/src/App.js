import Sidebar from './components/sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className="row" style={{ padding: 0, margin: 0 }}>
      <div className="col-md-2" style={{backgroundColor:'black'}}>
        <Sidebar />
      </div>
      <div className="col-md-10">
        <Body />
      </div>
    </div>
  );
}

export default App;
