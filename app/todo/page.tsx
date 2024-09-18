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

    // Fetch todos from API
    useEffect(() => {
        fetch('http://localhost/api/todos') // Laravel API endpoint
            .then((response) => response.json())
            .then((data) => {
                if (data.todos && Array.isArray(data.todos)) {
                    setTodos(data.todos); // Set todos if data.todos is an array
                } else {
                    console.error('API response format is incorrect.');
                }
            })
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    // Add new todo
    const addTodo = () => {
        fetch('http://localhost/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTodo }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.todos && Array.isArray(data.todos)) {
                    setTodos(data.todos); // Set todos if data.todos is an array
                }
            })
            .catch((error) => console.error('Error adding todo:', error));

        setNewTodo(''); // Clear input field
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">ToDo List</h1>
            <div className="flex mb-6">
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="New Todo"
                    className="border border-gray-300 rounded-lg p-2 mr-2 w-80"
                />
                <button
                    onClick={addTodo}
                    className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
                >
                    Add Todo
                </button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200 border-b border-gray-300">
                    <tr>
                        <th className="py-2 px-4 text-left text-gray-700">ID</th>
                        <th className="py-2 px-4 text-left text-gray-700">Title</th>
                        <th className="py-2 px-4 text-left text-gray-700">Created At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.length > 0 ? (
                        todos.map((todo) => (
                            <tr key={todo.id} className="border-b border-gray-200">
                                <td className="py-2 px-4 text-gray-600">{todo.id}</td>
                                <td className="py-2 px-4 text-gray-800">{todo.title}</td>
                                <td className="py-2 px-4 text-gray-600">{todo.created_at}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="py-2 px-4 text-gray-600 text-center">
                                No todos available.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
