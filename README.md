# 🌦️ Weather App

A responsive, component-driven application designed to fetch and display real-time global weather data using the OpenWeatherMap API.

## Live Demo

🌐 **[View Live Demo](https://weather-app-theta-rose-55.vercel.app)**

Try the Weather App now! Search for any city to see real-time weather data.

## 🚀 Overview

The Weather App is a robust demonstration of modern front-end development principles. It provides a user-friendly interface for checking current weather conditions worldwide. This project showcases proficiency in component composition, asynchronous data handling, and state management using React Hooks.

## ✨ Core Features

*   **Real-time Data Retrieval:** Seamlessly searches and retrieves current weather conditions for any specified city globally.
*   **Data Visualization:** Displays temperature accurately in Fahrenheit, rounded to two decimal places, alongside comprehensive metrics (humidity, wind speed, "feels like").
*   **User Experience (UX):** Implements visual feedback for loading states and provides clear, user-friendly error messages for API failures or invalid inputs.
*   **Responsiveness:** Built with a mobile-first approach, ensuring optimal viewing and functionality across all device types.
*   **Security:** Utilizes environment variables (`.env`) to securely manage and protect the external API key.

## 🏗️ Architecture & Design

The application adheres to a clean, component-based architecture, ensuring high separation of concerns and maintainability.

*   **Component Composition:** Logic and UI are segmented into dedicated components (`SearchBar`, `WeatherDisplay`, `WeatherDetails`), promoting reusability and modularity.
*   **State Management:** React Hooks (`useState`) are used to manage local component state and global data flow efficiently.
*   **Data Flow:** API interaction and state updates are centralized within the root component (`App.js`), ensuring predictable and controlled data flow.

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend Framework** | React 18 |
| **State Management** | React Hooks (`useState`) |
| **API Handling** | Fetch API with `async/await` |
| **External API** | OpenWeatherMap Current Weather API |
| **Styling** | CSS3 |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

## 🔮 Future Scope & Enhancements

To further enhance the application's functionality and complexity, future iterations could include:

*   **Dynamic Theming:** Implementing conditional styling that updates the UI's color palette and background based on the current weather condition (e.g., dark mode for night, bright colors for sunny days).
*   **Forecast Integration:** Integrating a 5-day/3-hour forecast API endpoint to provide predictive weather data.
*   **Geolocation:** Adding functionality to automatically detect and display the user's current location without manual input.

## ⚙️ Installation & Setup

### Prerequisites

*   Node.js (v14 or higher)
*   npm or yarn package manager
*   OpenWeatherMap API key (Free tier is sufficient)

### Setup Steps

1.  **Clone the repository:**
    ```bash
    git clone [repository-url]
    cd weather-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure API Key:** Create a `.env` file in the root directory and populate it with your key:
    ```
    # .env
    REACT_APP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
    ```
4.  **Run the application:**
    ```bash
    npm start
    # or
    yarn start
    ```