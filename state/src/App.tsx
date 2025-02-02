import './App.css'
// import useCounterStore from './components/store'
import useCounterStore from './components/store';

const App: React.FC = () => {
 const { count, increment, decrement } = useCounterStore()
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
