import React from "react";

// const TodoItem = ({ todo, onToggle, onRemove }) => {
//     return (
//         <div>
//             <input type="checkbox"></input>
//             <span>예제 텍스트</span>
//             <button>삭제</button>
//         </div>
//     );
// };

// const Todos = ({
//     input,
//     todos,
//     onChangeInput,
//     onInsert,
//     onToggle,
//     onRemove,
// }) => {
//     const onSubmit = (e) => {
//         e.preventDefault();
//     };
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input></input>
//                 <button type="submit">등록</button>
//             </form>
//             <TodoItem></TodoItem>
//             <TodoItem></TodoItem>
//             <TodoItem></TodoItem>
//         </div>
//     );
// };
// export default Todos;

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input
                type="checkbox"
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly={true}
            ></input>
            <span
                style={{ textDcoration: todo.done ? "line-through" : "none" }}
            >
                {todo.text}
            </span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};

const Todos = ({
    input,
    todos,
    number,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput(" ");
    };
    const onChange = (e) => onChangeInput(e.target.value);

    return (
        <div>
            {number}
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                ))}
            </div>
        </div>
    );
};

export default Todos;
