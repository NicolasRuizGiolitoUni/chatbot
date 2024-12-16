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
   cd chatbot-customization-ui/backend
   ```
2. Install the necessary Node.js packages by running:
   ```bash
   npm install
   ```

#### Frontend Setup

1. Open a new terminal/command prompt and navigate to the **frontend** folder:
   ```bash
   cd chatbot-customization-ui/frontend
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
     Development tools include:
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

#### Frontend

1. In the **frontend** folder, create a file named `.env`.
2. Add the following line:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

---

### Step 4: Run the Project

#### Start the Backend

1. Navigate to the **backend** folder in your terminal:
   ```bash
   cd chatbot-customization-ui/backend
   ```
2. Start the server by running:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

#### Start the Frontend

1. Navigate to the **frontend** folder in a new terminal:
   ```bash
   cd chatbot-customization-ui/frontend
   ```
2. Start the React.js application by running:
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:5173`.

---

## Troubleshooting

1. **Missing Node.js or npm**: If you get an error about `node` or `npm` not being recognized, ensure Node.js is installed and added to your system's PATH during installation.
2. **Port Conflicts**: If `http://localhost:5000` or `http://localhost:3000` is already in use, try stopping other applications using those ports or edit the `.env` files to specify different ports.
3. **API Key Issues**: Make sure you have a valid OpenAI API key. If you don’t have one, sign up at [OpenAI's website](https://platform.openai.com/).

---

## Customization

To customize your chatbot:

1. Edit the `systemPrompt` in the frontend to adjust how the AI interacts with users.
2. Modify the backend files to add custom logic or integrate additional features.

---

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
