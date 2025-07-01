
## Overview

This document defines the coding standards, naming conventions, and best practices for our project. Consistent code style improves readability, maintainability, and team collaboration.

## File Organization & Naming

### General Rules

- Use **kebab-case** for all file and folder names
- Keep names descriptive but concise
- Match naming patterns across HTML, CSS, and JS files

### File Structure Conventions

```
src/pages/page-name.html
src/assets/css/pages/page-name.css
src/assets/js/pages/page-name.js
src/components/component-name/component-name.html
src/components/component-name/component-name.css
src/components/component-name/component-name.js
```

### Image Naming

```
hero-background.jpg
team-member-john-doe.png
icon-email.svg
logo-primary.png
gallery-event-2024-01.jpg
```

## HTML Standards

### Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Site Name</title>
    <meta name="description" content="Page description">
    
    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/base/styles.css">
    <link rel="stylesheet" href="../assets/css/pages/page-name.css">
</head>
<body>
    <!-- Content -->
    
    <!-- JS -->
    <script src="../assets/js/base/script.js"></script>
    <script src="../assets/js/pages/page-name.js"></script>
</body>
</html>
```

### Semantic HTML

- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Proper heading hierarchy: `h1` → `h2` → `h3` (no skipping levels)
- Use `<button>` for interactions, `<a>` for navigation
- Include `alt` attributes for all images
- Use `<form>` elements properly with labels

### Accessibility Requirements

```html
<!-- Proper form labeling -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>

<!-- ARIA labels for complex elements -->
<button aria-label="Close modal" class="close-btn">×</button>

<!-- Skip navigation for screen readers -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Landmark roles when semantic elements aren't enough -->
<div role="banner">Header content</div>
```

### HTML Formatting

- **Indentation**: 2 spaces (no tabs)
- **Line length**: Maximum 100 characters
- **Attribute order**: `class`, `id`, `data-*`, `src`/`href`, `type`, `value`
- **Boolean attributes**: Use minimized form (`required` not `required="required"`)

```html
<!-- Good -->
<input 
    class="form-input" 
    id="user-email" 
    type="email" 
    name="email" 
    placeholder="Enter your email"
    required
>

<!-- Bad -->
<input required="required" placeholder="Enter your email" name="email" type="email" id="user-email" class="form-input">
```

---
## CSS Standards

### Architecture

- **Base styles**: `src/assets/css/base/styles.css` for global styles
- **Page styles**: `src/assets/css/pages/` for page-specific styles
- **Component styles**: `src/components/[name]/[name].css` for component styles

### Naming Conventions

Use **BEM methodology** (Block Element Modifier):

```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__content { }
.card__button { }

/* Modifier */
.card--featured { }
.card__button--primary { }
.card__button--disabled { }
```

### CSS Organization

Structure CSS files in this order:

```css
/* 1. Variables (if using custom properties) */
:root {
    --primary-color: #007bff;
    --font-size-base: 16px;
}

/* 2. Base styles */
.component-name { }

/* 3. Elements */
.component-name__element { }

/* 4. Modifiers */
.component-name--modifier { }

/* 5. State classes */
.component-name.is-active { }
.component-name.is-hidden { }

/* 6. Media queries */
@media (max-width: 768px) {
    .component-name { }
}
```

### CSS Formatting Rules

- **Indentation**: 2 spaces
- **Quotes**: Double quotes for strings
- **Colors**: Use hex codes (#ffffff) or CSS custom properties
- **Units**: Use `rem` for font sizes, `px` for borders, `%` or `vw/vh` for layout

```css
/* Good */
.navigation {
    display: flex;
    background-color: var(--primary-color);
    font-size: 1rem;
    border: 1px solid #cccccc;
    margin-bottom: 2rem;
}

.navigation__item {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #ffffff;
}

.navigation__item:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Bad */
.navigation{display:flex;background:#007bff;font-size:16px;border:1px solid #ccc;margin-bottom:32px}
```

### Responsive Design

- **Desktop-first approach**: Base styles for Desktop, then scale down.
- **Breakpoints**:
    - Small: `max-width: 576px`
    - Medium: `max-width: 768px`
    - Large: `max-width: 992px`
    - Extra Large: `max-width: 1200px`

```css
/* Desktop first */
.hero {
    padding: 6rem 3rem;
}

/* Tablet and below */
@media (max-width: 768px) {
    .hero {
        padding: 4rem 2rem;
        text-align: left;
    }
}

/* Mobile and below */
@media (max-width: 576px) {
    .hero {
        padding: 2rem 1rem;
        text-align: center;
    }
}
```

---
## JavaScript Standards

### File Organization

- **Base JS**: `src/assets/js/base/` for shared functionality
- **Page JS**: `src/assets/js/pages/` for page-specific logic
- **Component JS**: `src/components/[name]/[name].js` for component behavior - 'behavior' NOT functionality

### Naming Conventions

- **Variables/Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Classes**: PascalCase
- **Files**: kebab-case

```javascript
// Variables and functions
const userEmail = 'user@example.com';
const apiEndpoint = 'https://api.example.com';

function validateForm() { }
function handleSubmission() { }

// Constants
const API_BASE_URL = 'https://api.example.com';
const MAX_UPLOAD_SIZE = 5000000;

// Classes
class ComponentLoader { }
class FormValidator { }
```

### Code Structure

```javascript
// 1. Imports/Dependencies (if using modules)
import { ComponentLoader } from './ComponentLoader.js';

// 2. Constants
const ANIMATION_DURATION = 300;
const API_ENDPOINTS = {
    users: '/api/users',
    posts: '/api/posts'
};

// 3. Variables
let currentUser = null;
let isLoading = false;

// 4. Functions
function initializePage() {
    setupEventListeners();
    loadInitialData();
}

function setupEventListeners() {
    // Event listener setup
}

// 5. Event Listeners
document.addEventListener('DOMContentLoaded', initializePage);

// 6. Initialization
initializePage();
```

### Function Guidelines

- **Pure functions** when possible
- **Single responsibility** principle
- **Descriptive names** that explain what the function does
- **Comments** for complex logic

```javascript
// Good
function validateEmailAddress(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingSpinner(element) {
    element.classList.add('is-loading');
    element.setAttribute('aria-busy', 'true');
}

// Bad
function validate(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

function show(el) {
    el.classList.add('loading');
}
```

### Event Handling

```javascript
// Use event delegation for dynamic content
document.addEventListener('click', function(event) {
    if (event.target.matches('.btn-submit')) {
        handleFormSubmission(event);
    }
    
    if (event.target.matches('.modal-close')) {
        closeModal(event);
    }
});

// Specific element listeners
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
}
```

### Error Handling

```javascript
// Always handle potential errors
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Failed to fetch user data:', error);
        showErrorMessage('Unable to load user information');
        return null;
    }
}
```

---
## Component Development

### Component Structure

Each component should be self-contained:

```
src/components/modal/
├── modal.html     # Component template
├── modal.css      # Component styles
└── modal.js       # Component behavior
```

### Component HTML Template

```html
<!-- modal.html -->
<div class="modal" id="modal" role="dialog" aria-hidden="true">
    <div class="modal__backdrop"></div>
    <div class="modal__content">
        <header class="modal__header">
            <h2 class="modal__title" id="modal-title">Modal Title</h2>
            <button class="modal__close" aria-label="Close modal">×</button>
        </header>
        <div class="modal__body" id="modal-body">
            <!-- Dynamic content -->
        </div>
        <footer class="modal__footer">
            <button class="btn btn--secondary modal__cancel">Cancel</button>
            <button class="btn btn--primary modal__confirm">Confirm</button>
        </footer>
    </div>
</div>
```

### Component JavaScript Pattern

```javascript
// modal.js
class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.backdrop = this.modal.querySelector('.modal__backdrop');
        this.closeBtn = this.modal.querySelector('.modal__close');
        this.cancelBtn = this.modal.querySelector('.modal__cancel');
        
        this.bindEvents();
    }
    
    bindEvents() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.cancelBtn.addEventListener('click', () => this.close());
        this.backdrop.addEventListener('click', () => this.close());
    }
    
    open(title, content) {
        this.modal.querySelector('.modal__title').textContent = title;
        this.modal.querySelector('.modal__body').innerHTML = content;
        this.modal.classList.add('is-open');
        this.modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }
    
    close() {
        this.modal.classList.remove('is-open');
        this.modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }
}

// Export for use in other files
window.Modal = Modal;
```

---
## Comments & Documentation

### HTML Comments

```html
<!-- Main navigation component -->
<nav class="navigation" role="navigation">
    <!-- Primary navigation items -->
    <ul class="navigation__list">
        <!-- ... -->
    </ul>
</nav>

<!-- TODO: Add mobile menu toggle -->
<!-- FIXME: Navigation overlap issue on tablet -->
```

### CSS Comments

```css
/* ==========================================================================
   Navigation Component
   ========================================================================== */

.navigation {
    /* Base navigation styles */
    display: flex;
    background-color: var(--color-primary);
}

.navigation__item {
    /* Individual navigation item */
    padding: 1rem;
    
    /* Hover states */
    &:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
}

/* Mobile navigation overrides */
@media (max-width: 768px) {
    .navigation {
        /* Stack items vertically on mobile */
        flex-direction: column;
    }
}
```

### JavaScript Comments

```javascript
/**
 * Validates form input and displays error messages
 * @param {HTMLFormElement} form - The form element to validate
 * @param {Object} rules - Validation rules object
 * @returns {boolean} True if form is valid, false otherwise
 */
function validateForm(form, rules) {
    // Clear previous error messages
    clearErrors(form);
    
    let isValid = true;
    
    // Loop through each form field
    for (const field of form.elements) {
        // Skip buttons and disabled fields
        if (field.type === 'button' || field.disabled) {
            continue;
        }
        
        // Validate based on field type and rules
        if (!validateField(field, rules[field.name])) {
            isValid = false;
        }
    }
    
    return isValid;
}
```

## Performance Guidelines

### CSS Performance

- Minimize use of expensive properties (`box-shadow`, `border-radius` on large elements)
- Avoid deep nesting (max 3 levels)
- Use efficient selectors (avoid universal `*` selector)
- Optimize images and use appropriate formats

### JavaScript Performance

- Minimize DOM queries (cache element references)
- Use event delegation for dynamic content
- Debounce scroll/resize event handlers
- Load non-critical scripts asynchronously

```javascript
// Cache DOM elements
const formElements = {
    form: document.getElementById('contact-form'),
    nameInput: document.getElementById('name'),
    emailInput: document.getElementById('email'),
    submitBtn: document.getElementById('submit-btn')
};

// Debounce example
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedSearch = debounce(performSearch, 300);
```

## Common Patterns

### Form Handling

```javascript
function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    if (!validateFormData(data)) {
        return;
    }
    
    submitForm(data);
}
```

### Loading States

```css
.btn {
    position: relative;
}

.btn.is-loading {
    color: transparent;
    pointer-events: none;
}

.btn.is-loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}
```

### Error Handling

```javascript
function showErrorMessage(message, element = null) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    
    if (element) {
        element.parentNode.insertBefore(errorDiv, element.nextSibling);
    } else {
        document.body.appendChild(errorDiv);
    }
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}
```

## Browser Support

### Progressive Enhancement

- Base functionality works without JavaScript
- Enhanced features layer on top
- Graceful degradation for older browsers

### Feature Detection

```javascript
// Check for feature support before using
if ('IntersectionObserver' in window) {
    // Use Intersection Observer
} else {
    // Fallback implementation
}

if (CSS.supports('display', 'grid')) {
    // Use CSS Grid
} else {
    // Fallback layout
}
```

## Tools & Validation

### Code Validation

- **HTML**: Use W3C HTML Validator
- **CSS**: Use W3C CSS Validator
- **JavaScript**: Use ESLint (if configured)
- **Accessibility**: Use WAVE or axe browser extensions

### Testing Checklist

- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Performance (PageSpeed Insights)
- [ ] Code validation passes

---

_Last updated: [July 1st, 2025]_ _For questions about this guide, contact: [Team Lead/CypherWhisperer@gmail.com]_ 
