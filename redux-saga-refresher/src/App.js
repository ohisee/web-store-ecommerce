/**
 * @fileoverview app component 
 */
import SagasRefresher from './components/sagas/sagas-refresher.component';
import UseEffectRefresher from './components/useeffect/use-effect-refresher.component';
import UseReducerRefresher from './components/usereducer/use-reducer-refresher.component';
import Post from './components/post/post.component';
import User from './components/user/user.component';
import {
  StateClassComponent,
  UseStateRefresher
} from './components/usestate/use-state-refresher.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <SagasRefresher />
      <StateClassComponent />
      <UseStateRefresher />
      <UseEffectRefresher />
      <User userId={1} />
      <Post postId={2} />
      <UseReducerRefresher />
    </div>
  );
}

export default App;
