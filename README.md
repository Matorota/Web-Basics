# React Blog Site Template

Modern blog site built with React, TypeScript, and Tailwind CSS featuring search functionality, pagination, and responsive design.

## Features

- Search functionality
- Pagination
- Responsive design
- Clean white design
- Component-based architecture

## Components Structure

### Main Components

- `App.tsx` - Main application component with search and pagination logic
- `Header.tsx` - Site navigation and branding
- `BlogPost.tsx` - Individual blog post component
- `SearchBar.tsx` - Search input with real-time filtering
- `Pagination.tsx` - Dynamic pagination with page numbers
- `Sidebar.tsx` - Theme switcher and tags
- `Footer.tsx` - Site footer with links and information

### CSS Architecture

The project includes CSS examples demonstrating:

#### CSS Selectors

- **Descendant selectors** (`article p`) - Selects ALL `<p>` elements inside `<article>` at any level
- **Child selectors** (`article > div`) - Selects ONLY DIRECT children `<div>` elements of `<article>`
- **Class selectors** (`.blog-post`) - Selects elements by class attribute
- **Child selectors** (`article > div`) - Selects ONLY DIRECT children `<div>` elements of `<article>`
- **Class selectors** (`.blog-post`) - Selects elements by class attribute
- **ID selectors** (`#main-header`) - Selects elements by unique ID attribute

#### 2. Inheritance Examples

```css
.blog-container {
  font-family: "Inter", sans-serif;
  color: #374151;
  line-height: 1.6;
}

/* These elements inherit properties from parent */
.blog-container h1 {
  font-family: inherit; /* Inherits from .blog-container */
  color: inherit; /* Inherits from .blog-container */
}
```

#### 3. Cascade with !important

```css
.search-input:focus {
  border-color: #3b82f6 !important; /* Overrides other border-color rules */
}

.pagination-button.active {
  background-color: #3b82f6 !important; /* Overrides hover and default states */
}
```

## How to Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Key Features Explanation

### Search Functionality

- Real-time search through blog posts
- Searches in title, excerpt, and tags
- Automatically resets to first page when searching
- Shows "No posts found" message when no results

### Pagination

- Shows 3 posts per page
- Dynamic page numbers with ellipsis for large page counts
- Previous/Next navigation
- Responsive pagination controls

### Responsive Design

- Mobile-first CSS approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid layout
- Optimized search bar for different screen sizes

### CSS Selectors Demonstration

**Descendant vs Child Selectors:**

- `article p` - finds ALL paragraph elements anywhere inside article
- `article > p` - finds ONLY paragraph elements that are direct children of article

**Inheritance:**

- `inherit` keyword allows elements to use parent's CSS values
- Removing `inherit` will use browser default values instead

**Cascade with !important:**

- `!important` overrides all other CSS rules regardless of specificity
- Removing `!important` may cause other rules to take precedence

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool
- **Custom CSS** - Advanced selectors and responsive design

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── BlogPost.tsx
│   ├── SearchBar.tsx
│   ├── Pagination.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
├── styles/
│   └── blog-styles.css
├── constants.tsx
├── App.tsx
└── main.tsx
```
