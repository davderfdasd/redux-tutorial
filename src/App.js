import React from "react";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
import SampelContainer from "./containers/SampleContainer";
import SampleContainer from "./containers/SampleContainer";

function App() {
    return (
        <div>
            <CounterContainer></CounterContainer>
            <hr></hr>
            <TodosContainer></TodosContainer>
            <ht></ht>
            <SampleContainer></SampleContainer>
        </div>
    );
}

export default App;
