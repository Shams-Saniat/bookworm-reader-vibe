# BookWorm 📚

A modern React-based book management application where users can browse books, view details, and maintain their reading lists.

## Features

- **Browse Books**: View a collection of books with ratings, categories, and tags
- **Book Details**: Click on any book to see detailed information
- **Reading Lists**: Mark books as read and maintain a personal reading list
- **Wishlist**: Add books to your wishlist for future reading
- **Responsive Design**: Built with Tailwind CSS and DaisyUI for a beautiful, responsive interface
- **Toast Notifications**: Get feedback when adding books to your lists

## Tech Stack

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **React Tabs** - Tab component for organizing content
- **React Toastify** - Toast notifications
- **LocalStorage** - Persistent data storage

## Project Structure

```
src/
├── components/
│   ├── Banner/
│   │   └── Banner.jsx
│   ├── Book/
│   │   └── Book.jsx
│   ├── BookDetail/
│   │   └── BookDetail.jsx
│   ├── Books/
│   │   └── Books.jsx
│   ├── Dashboard/
│   │   └── Dashboard.jsx
│   ├── Home/
│   │   └── Home.jsx
│   ├── ListedBooks/
│   │   └── ListedBooks.jsx
│   ├── NavBar/
│   │   └── NavBar.jsx
│   ├── Footer/
│   │   └── Footer.jsx
│   ├── ErrorPage/
│   │   └── ErrorPage.jsx
│   └── Root/
│       └── Root.jsx
├── utility/
│   └── addToDB.js
├── assets/
│   └── books.jpg
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bookworm
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` (or another port if 5173 is busy).

## Usage

### Browsing Books
- The home page displays all available books
- Each book card shows the cover, title, author, category, tags, and rating

### Viewing Book Details
- Click on any book card to navigate to its detail page
- The detail page shows comprehensive information about the book

### Managing Reading List
- Click "Mark as Read" on a book's detail page to add it to your reading list
- Navigate to "Listed Books" to view all books you've marked as read
- Books are organized in tabs: "Read List" and "Wishlist"

### Navigation
- **Home**: Browse all books
- **Listed Books**: View your reading lists
- **Pages to Read**: Track your reading progress
- **Dashboard**: View statistics (coming soon)

## Key Components

### Banner
Hero section on the home page with a call-to-action button.

### Books
Displays a grid of all available books fetched from `booksData.json`.

### Book
Individual book card component showing book information.

### BookDetail
Detailed view of a single book with options to mark as read or add to wishlist.

### ListedBooks
Tabbed interface showing read books and wishlist items.

### NavBar
Main navigation component with responsive mobile menu.

## Data Persistence

The application uses `localStorage` to persist user data:
- **read-list**: Stores IDs of books marked as read
- Data persists across browser sessions

## Future Enhancements

- Complete wishlist functionality
- Implement "Pages to Read" feature
- Add book search and filtering
- User authentication
- Book reviews and comments
- Dashboard with reading statistics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Deployment

This project is deployed to Netlify. Here is a link: https://illustrious-kulfi-e65d00.netlify.app/
