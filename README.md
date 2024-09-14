# React Todo App

This is a simple and responsive Todo List application built using React and Tailwind CSS. The app allows users to add, mark as complete, and delete tasks. It also displays the current date and time at the top of the page.

## Features

- **Add Tasks**: Users can add tasks to the list by entering text in the input field.
- **Mark Complete**: Users can mark tasks as complete, which applies a strikethrough effect.
- **Delete Tasks**: Individual tasks can be deleted, and there's an option to delete all tasks at once.
- **Date and Time**: The current date and time are displayed and updated in real-time.
- **Responsive Design**: The app is fully responsive, making it suitable for both desktop and mobile users.

## Project Structure

The main components used in this project are:

1. **Todo**: The main component that holds the state for tasks and renders the list of todos.
2. **TodoForm**: A form component for adding new tasks.
3. **TodoItem**: A component for rendering individual tasks with options to delete or mark as done.
4. **TodoTime**: Displays the current date and time.

## Usage

- **Add a task**: Enter a task in the input field and click the green check button or press Enter.
- **Mark a task as complete**: Click the green check icon next to a task to mark it as done.
- **Delete a task**: Click the red delete icon to remove a task from the list.
- **Delete all tasks**: If there are tasks, a "Delete All" button will appear at the bottom to clear the entire list.