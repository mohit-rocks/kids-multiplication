import { useEffect } from 'react'
import './App.css'
import Header from "./Components/Header.jsx";
import ProgressBar from "./Components/ProgressBar.jsx";
import Question from "./Components/Question.jsx";
import Answer from "./Components/Answer.jsx";
import Statistics from "./Components/Statistics.jsx";
import ControlButtons from "./Components/ControlButtons.jsx";
import { Provider, useDispatch } from "react-redux";
import store, { reset } from './store/store.jsx';

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={"quiz-container"}>
      <Header>

      </Header>
      <ProgressBar>

      </ProgressBar>
      <Question>

      </Question>
      <Answer></Answer>

      <ControlButtons></ControlButtons>
      <Statistics>

      </Statistics>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App
