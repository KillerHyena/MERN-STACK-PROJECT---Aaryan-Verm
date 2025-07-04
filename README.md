```markdown
# ✅ To-Do List Web App – MERN Stack Project

A full-stack To-Do List application built with the **MERN** stack (MongoDB, Express.js, React.js, Node.js). This project allows users to create, read, update, and delete tasks with a clean and responsive UI, featuring separate deployments for client and server.

---

## 🚀 Features

- 📝 Add new tasks
- ✅ Mark tasks as completed
- 🔁 Edit existing tasks
- ❌ Delete tasks
- 🔄 Real-time UI updates
- 🌐 Fully responsive design

---

## 🧱 Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Frontend  | React.js, CSS  |
| Backend   | Node.js, Express.js |
| Database  | MongoDB (Mongoose) |
| Deployment| Netlify (Frontend), Render (Backend) |
| API Test  | Postman        |
| Version Control | Git & GitHub |

---

## 📁 Folder Structure

```

project-root/
├── client/                      # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoList.js
│   │   │   ├── TodoItem.js
│   │   │   └── Header.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   ├── .env.local              # REACT\_APP\_API\_URL=<backend-url>
│   ├── package.json
│   └── netlify.toml
│
└── server/                     # Node.js Backend
├── config/
│   └── db.js
├── models/
│   └── Todo.js
├── routes/
│   └── todos.js
├── .env                    # MONGODB\_URI, PORT
├── package.json
└── index.js

````

---

## ⚙️ Setup Instructions

### 🖥️ Backend (Render)

1. Go to the `/server` folder.
2. Install dependencies:
   ```bash
   npm install
````

3. Create a `.env` file:

   ```env
   MONGODB_URI=<your_mongodb_uri>
   PORT=5000
   ```
4. Run the backend locally:

   ```bash
   npm start
   ```
5. Deploy to [Render](https://render.com):

   * Set Build Command: `npm install`
   * Start Command: `npm start`
   * Environment Variables: `MONGODB_URI`, `PORT`

---

### 🌐 Frontend (Netlify)

1. Go to the `/client` folder.
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create `.env.local` file:

   ```env
   REACT_APP_API_URL=https://your-backend-url.onrender.com
   ```
4. Run the frontend locally:

   ```bash
   npm start
   ```
5. Deploy to [Netlify](https://www.netlify.com/):

   * Build Command: `npm run build`
   * Publish Directory: `client/build`
   * Environment Variable: `REACT_APP_API_URL`

---

## 🔗 Deployment Links

* 🔵 Frontend (Netlify): [View Live](https://your-netlify-link.netlify.app)
* 🟢 Backend (Render): [API Docs](https://your-render-backend.onrender.com/api/todos)

---

## 🎥 Demo Video

* 📹 [Watch Demo on Google Drive/YouTube](https://link-to-demo)

---

## 🤝 Credits

This project was built as part of the **Devtown Full Stack Bootcamp** to demonstrate real-world MERN stack skills and deployment capabilities.

---