# React E-Commerce App

A fully functional e-commerce web application built using React, Redux Toolkit, and TypeScript. The application includes product listing, search, filtering, pagination, authentication, and cart management features.

## Live Demo

🔗 https://react-ecommerce-app-theta-ten.vercel.app/

## Features

- Product Search
- Category Filtering
- Pagination (10 products per page)
- Add to Cart functionality
- Login & Signup (with localStorage)
- Protected Routes (Cart accessible only after login)
- Fast performance using Vite
- Fully deployed on Vercel

## Tech Stack

- React.js
- TypeScript
- Redux Toolkit
- Vite
- CSS
- Vercel (Deployment)

## Project Structure

```
src/
│
├── components/      # Reusable UI components
├── pages/           # Home, Login, Signup, Cart
├── redux/           # Redux store & slices
├── services/        # API handling (local JSON)
├── data/            # Static product data
├── App.tsx
└── main.tsx

## Installation & Setup

Clone the repository:

git clone https://github.com/KaviyaaKannan/react-ecommerce-app.git
cd react-ecommerce-app

Install dependencies:

npm install

Run the app:

npm run dev

Build for production:

npm run build

## Authentication

* Signup stores user data in localStorage
* Login validates credentials from stored users
* Cart page is protected using React Router


## API Handling

* Used static JSON (`products.json`) instead of backend
* Ensures compatibility with Vercel deployment


## Deployment

Deployed using Vercel:

https://react-ecommerce-app-theta-ten.vercel.app/
```
