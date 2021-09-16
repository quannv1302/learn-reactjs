import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: "todo 1"
        },
        {
            id: 2,
            title: "todo 2"
        },
        {
            id: 3,
            title: "todo 3"
        },
    ];
    return (
        <div>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;