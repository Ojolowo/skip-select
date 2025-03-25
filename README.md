# Skip Selector

## Project Overview

The Skip Selector project is a web application designed to replicate the functionality of a waste management service. The application allows users to view & select skip sizes.

## Technologies Used

- **React**.
- **TypeScript**
- **Vite**:
- **Tailwind CSS**
- **Lucide React**.

## Project Structure

The project is organized into several key directories and files:

- **`src/app/view`**: Contains the main view of the application, `SkipSelect`.
- **`src/app/shared`**: Includes shared components like `AppLoader` and `Button`.
- **`src/index.css`**: Includes global styles and Tailwind CSS configurations.
- **`vite.config.ts`**: Configuration file for Vite, including plugin setup and path aliases.

## Key Features

- **AppLoader Component**: Provides a flexible loading and error handling UI. It displays a loading spinner when data is being fetched and an error message with a retry button if an error occurs. This component enhances user experience by providing visual feedback during asynchronous operations.
- **Skip Selection**: Fetches & displays available skip sizes from an API.
- **Responsive Design**: Utilizes Tailwind CSS to ensure the application is accessible and visually appealing on various devices.

## Design Decisions

- **Component-Based Architecture**: Leveraging React's component model to create reusable and maintainable UI elements.
- **State Management**: Using React hooks (`useState`, `useEffect`) for managing component state and side effects.
- **Error Handling**: Implementing error states and logging to improve user experience and debugging capabilities.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000`.

## Environment Variables

The application uses environment variables for configuration. Create a `.env.local` file in the root directory with the following variables:

```env
VITE_APP_API_URL=your_api_url
```

### Required Variables:
- **`VITE_APP_API_URL`**: The base URL for the API endpoints. Example: `https://app.wewantwaste.co.uk/api`

### Setup Instructions:
1. Copy `.env.example` to create `.env.local`
2. Fill in the required values in `.env.local`
3. The `.env.local` file is gitignored and should never be committed to the repository

Note: All environment variables must be prefixed with `VITE_` to be accessible in the application.
