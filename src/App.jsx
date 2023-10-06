import React from "react";
import "./App.css";
import Count from "./components/Count";
import { useDispatch,useSelector } from "react-redux";
import { dec, inc } from "./redux/slicies/counter/counterSlice";
import { change, submitData } from "./redux/slicies/form/formSlice";

function App() {
  const dispatch = useDispatch();
  const formData = useSelector(state => state.form.formData)
  function handleSubmit(e)
  {
    e.preventDefault();
    dispatch(submitData(formData));
  }
  return (
    <div className="App">
      <button onClick={() => dispatch(inc())}>Inc</button>
      <Count />
      <button onClick={() => dispatch(dec())}>Dec</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" onChange={e => dispatch(change({[e.target.name]:e.target.value})) } />
        <input type="text" name="lastName" onChange={e => dispatch(change({[e.target.name]: e.target.value}))}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
