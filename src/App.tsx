import UseContextComponant from './componants/UseContextComponant';
import UseEffectComponant from './componants/UseEffectComponant';
import UseStateComponant from './componants/UseStateComponant';
function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponant />
      <h1>useEffect</h1>
      <UseEffectComponant />
      <h1>useContext</h1>
      <UseContextComponant />
    </div>
  );
}

export default App;
