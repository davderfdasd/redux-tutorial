import React from "react";
import { connect } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({
    input,
    todos,
    number,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            number={number}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // ({ todos }) => ({
    (state) => ({
        input: state.todos.input,
        todos: state.todos.todos,
        number: state.counter.number,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    }
)(TodosContainer);
