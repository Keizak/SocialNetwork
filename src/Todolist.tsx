import React from 'react';
import Footer from './Footer';
import List from './List';
import Header from './Header';

function TodoList()
{
    return (
        <div className="todoList">
            <Header/>
            <List/>
            <Footer/>
        </div>
    )
};
export default TodoList;