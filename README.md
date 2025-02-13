# Chatbot

This repository contains a modular web app designed to help researchers customize their own chatbot for conducting studies. The project consists of two main folders:

- **backend**: Node.js server-side application
- **frontend**: React.js web application for the UI

The following instructions will guide you through installing and running the project, even if you have no prior coding experience.

---

## Prerequisites

Before you begin, you will need the following installed on your computer:

1. **Node.js** (LTS version recommended)

   - Download from the [official Node.js website](https://nodejs.org/).
   - During installation, make sure to check the option to install `npm` (Node Package Manager).

2. **Git** (optional, but recommended for cloning the repository)

   - Download from the [official Git website](https://git-scm.com/).

3. A **text editor** (optional, but helpful for editing files)

   - [VS Code](https://code.visualstudio.com/) is highly recommended.

4. **React.js** and required libraries

   - React.js will be automatically installed along with the frontend dependencies in Step 2.

---

## Installation Steps

### Step 1: Clone the Repository

If you have Git installed, open a terminal or command prompt and run:

```bash
git clone https://github.com/NicolasRuizGiolitoUni/chatbot.git
```

If you don’t have Git, download the ZIP file of the repository from GitHub and extract it to a folder on your computer.

---

### Step 2: Install Dependencies

#### Backend Setup

1. Open a terminal/command prompt and navigate to the **backend** folder:
   ```bash
   cd chatbot/backend
   ```
2. Install the necessary Node.js packages by running:
   ```bash
   npm install
   ```

#### Frontend Setup

1. Open a new terminal/command prompt and navigate to the **frontend** folder:
   ```bash
   cd chatbot/frontend
   ```
2. Install the required React.js packages and libraries by running:
   ```bash
   npm install
   ```
   The following libraries will be installed:
   - **React**: Core library for building the UI
   - **React DOM**: For rendering React components
   - **React Bootstrap**: For using Bootstrap components in React
   - **Bootstrap**: CSS framework for styling
   - **React Markdown**: To render Markdown content
   - **Vite**: Build tool for modern web apps
   - **ESLint**: For linting and enforcing code quality

---

### Step 3: Configure Environment Variables

#### Backend

1. In the **backend** folder, create a file named `.env`.
2. Add the following lines to the file:
   ```env
   OPENAI_API_KEY=your-openai-api-key
   USE_OPEN_ROUTER=false
   OPENROUTER_API_KEY=your-openrouter-api-key
   ```
   Replace `your-openai-api-key` with your actual OpenAI API key.


### Step 4: Run the Project

#### Start the Backend

1. Navigate to the **backend** folder in your terminal:
   ```bash
   cd chatbot/backend
   ```
2. Start the server by running:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

#### Start the Frontend

1. Navigate to the **frontend** folder in a new terminal:
   ```bash
   cd chatbot/frontend
   ```
2. Start the React.js application by running:
   ```bash
   npm run dev 
   ```
   The application will open in your default browser at `http://localhost:5173`.


