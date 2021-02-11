import UseContextComponant from './componants/UseContextComponant';
import UseEffectComponant from './componants/useEffectComponant';
import UseReducerComponant from './componants/UseReducerComponant';
import UseStateComponant from './componants/UseStateComponant';
import UseCustomHookComponant from './componants/UseCustomHookComponant';
function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponant />
      <h1>useEffect</h1>
      <UseEffectComponant />
      <h1>useContext</h1>
      <UseContextComponant />
      <h1>useReducer</h1>
      <UseReducerComponant />
      <h1>CustomHook</h1>
      <UseCustomHookComponant />
    </div>
  );
}

export default App;
