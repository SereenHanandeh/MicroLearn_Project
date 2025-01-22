
# **React Video App**

A simple React application for video browsing, registration, and interaction, including features like liking, saving, and sharing videos. Users can register, log in, and interact with videos using an intuitive UI.

---

## **Features**

- **User Authentication:**
  - User registration with email and password validation.
  - Login with local storage integration.
  - Error and success alerts for feedback.

- **Video Interaction:**
  - Like videos (restricted to one like per user per video).
  - Save videos for later viewing.
  - Share video functionality.

- **Search and Filter:**
  - Search videos by title.
  - Filter videos by category.

- **Responsive Design:**
  - Fully responsive UI using CSS and media queries.

---

## **Technologies Used**

- **Frontend:**
  - React.js
  - React Router
  - Context API (for alerts and global state)

- **Styling:**
  - CSS (custom design)
  - Media queries for responsiveness

- **Local Storage:**
  - For storing user data and video interaction state.

- **Icons:**
  - React Icons (for interactive buttons like like, save, and share).

---

## **Installation and Setup**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/react-video-app.git
   cd react-video-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Application:**
   ```bash
   npm start
   ```

4. **Build the Application:**
   ```bash
   npm run build
   ```

---

## **Folder Structure**

```plaintext
src/
├── assets/
│   ├── data.json          # Video data
│   ├── login.css          # Login page styling
│   ├── register.css       # Register page styling
│   └── video.css          # Video card styling
├── components/
│   ├── VideoCard.jsx      # Component for rendering video cards
├── context/
│   └── AlertContext.jsx   # Context for managing alerts
├── pages/
│   ├── Home.jsx           # Home page
│   ├── Login.jsx          # Login page
│   ├── Register.jsx       # Registration page
│   └── Search.jsx         # Search and filter page
├── App.js                 # Main App component
└── index.js               # Entry point
```

---

## **Usage**

1. Register a new user using the **Register** page.
2. Log in using your credentials on the **Login** page.
3. Interact with videos:
   - Like videos (one like per user per video).
   - Save videos for later.
   - Share videos.
4. Use the **Search** page to filter and find videos by title or category.

---

## **Customization**

- **Video Data:**  
  Update or replace `data.json` in the `assets` folder with your own video data.

- **Styling:**  
  Modify CSS files in the `assets` folder to customize the look and feel.

---

## **License**

This project is open-source and available under the [MIT License](LICENSE).
