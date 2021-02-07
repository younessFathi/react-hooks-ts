import UseEffectComponant from './componants/useEffectComponant';
import UseStateComponant from './componants/UseStateComponant';
function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponant />
      <h1>useEffect</h1>
      <UseEffectComponant />
    </div>
  );
}

export default App;
