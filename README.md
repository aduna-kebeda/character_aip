# AI Chat Project

This project is an interactive AI chat application that utilizes the Gemini API for dynamic conversational exchanges. The application is built with a Next.js frontend and a Python backend.

## Project Structure

```
ai-chat-project
├── backend          # Python backend for handling API requests
│   ├── app.py      # Main entry point for the backend application
│   ├── requirements.txt  # Python dependencies
│   └── .env        # Environment variables for the backend
├── frontend         # Next.js frontend for the user interface
│   ├── public       # Static assets (images, favicon, etc.)
│   ├── src          # Source code for the frontend
│   │   ├── pages    # Next.js pages
│   │   │   ├── _app.tsx  # Custom App component
│   │   │   ├── index.tsx  # Main landing page
│   │   ├── components  # React components
│   │   │   └── ChatComponent.tsx  # Chat interface component
│   │   ├── styles     # CSS styles
│   │   │   └── globals.css  # Global styles
│   │   └── utils      # Utility functions
│   │       └── api.ts  # API call functions
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   ├── tsconfig.json  # TypeScript configuration
│   ├── package.json    # npm configuration
│   └── .env.local      # Frontend environment variables
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` directory.
2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Create a `.env` file and add your Gemini API keys and other configuration settings.

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the required npm packages:
   ```
   npm install
   ```
3. Create a `.env.local` file and add your API endpoint and other configuration settings.

### Running the Application

- Start the backend server:
  ```
  python app.py
  ```
- Start the frontend development server:
  ```
  npm run dev
  ```

## Usage

- Open your browser and navigate to `http://localhost:3000` to access the chat application.
- Interact with the AI character through the chat interface.

## Contributing

Feel free to submit issues or pull requests to improve the project. 

## License

This project is licensed under the MIT License.