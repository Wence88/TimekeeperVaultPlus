# Timekeeper Vault Plus

Welcome to Timekeeper Vault Plus, a web application for managing tasks and schedules. This README file provides an overview of the project structure, technologies used, components, pages, and custom hooks.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Pages](#pages)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [Dependencies](#dependencies)
- [Usage](#usage)

## Introduction

Timekeeper Vault Plus is a web application built with React, designed to help users manage their tasks efficiently. Users can register, log in, and create tasks with descriptions. The application provides features such as task creation, task management, and user authentication.

## Project Structure

The project follows a modular structure with separate directories for pages, components, and context.

- **src/**
  - **components/**: Contains reusable UI components used throughout the application.
  - **context/**: Contains the context provider for user authentication.
  - **Pages/**: Contains the main pages of the application, including Home, Register, and Login.
  - **index.js**: Entry point of the application.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router DOM: Provides declarative routing for React applications.
- Axios: A promise-based HTTP client for making requests to the server.
- ESLint: A linter tool for identifying and reporting patterns in JavaScript code.
- Vite: A next-generation frontend tooling system.

## Pages

1. **Home**: Displays the main dashboard with task management features.
2. **Register**: Allows users to register for a new account.
3. **Login**: Allows users to log in to their accounts.

## Components

1. **HomeLeft**: Sidebar component displaying menu options, task lists, and tags.
2. **HomeCenter**: Main content area displaying today's tasks and an option to add new tasks.
3. **Todo**: Component representing an individual task item.

## Custom Hooks

1. **AuthContextProvider**: Provides authentication context for managing user authentication state.

## Dependencies

- axios: ^1.6.7
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.22.2
- @types/react: ^18.2.56
- @types/react-dom: ^18.2.19
- @vitejs/plugin-react: ^4.2.1
- eslint: ^8.56.0
- eslint-plugin-react: ^7.33.2
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.5
- vite: ^5.1.4

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
4. Access the application in your browser at the specified URL.

For more details on individual components, pages, and hooks, refer to the source code files in the repository.
