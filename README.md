# Task Tracker Web App

A simple and modern task tracker web application built with **React**, **Redux**, and **Vite**. This app allows users to add, filter, update, and delete tasks with a clean and responsive user interface.

## Features

- **Add Tasks:** Quickly add new tasks to your list.
- **Task List:** View all your tasks in a structured list format.
- **Filter Tasks:** Filter tasks by All, Completed, or Pending using the sidebar.
- **Update Tasks:** Mark tasks as completed.
- **Delete Tasks:** Remove tasks you no longer need.
- **Persistent State:** State management with Redux for predictable updates.
- **Responsive Design:** Clean and modern UI that works on all devices.

## Tech Stack

- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules) (for component styling)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ipsitaamukherjee/task-tracker-web-app.git
   cd task-tracker-web-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  components/
    layout/         # Layout components (Sidebar, Footer, etc.)
    task/           # Task-related components (TaskList, TaskCard, AddTaskForm)
  context/          # React context for task filtering
  redux/            # Redux store and reducers
  App.jsx           # Main app component
  main.jsx          # Entry point
public/
  favicon.svg       # App icon
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).