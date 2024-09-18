'use client';
import { useState, useEffect } from 'react';

interface Todo {
    id: number;
    title: string;
    created_at: string;
    updated_at: string;
}

export default function TodoPage() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    // APIからToDoを取得
    useEffect(() => {
        fetch('http://localhost/api/todos') // LaravelのAPIエンドポイント
            .then((response) => response.json())
            .then((data) => {
                if (data.todos && Array.isArray(data.todos)) {
                    setTodos(data.todos); // data.todosに配列が格納されている
                } else {
                    console.error('APIからのデータ形式が異なります。');
                }
            })
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    // 新しいToDoを追加
    const addTodo = () => {
        fetch('http://localhost/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTodo}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.todos && Array.isArray(data.todos)) {
                    setTodos(data.todos); // data.todosに配列が格納されている
                }
            })
            .catch((error) => console.error('Error adding todo:', error));

        setNewTodo(''); // 入力フィールドをクリア
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>ToDo List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="New Todo"
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                    ))
                ) : (
                    <p>No todos available.</p>
                )}
            </ul>
        </div>
    );
}
