
# ZEMACU WEBSITE

### A Modern Website For the Zetech University Mang'u Campus Christian Union, Developed By the Media Department
## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.0 or higher)

# ZEMACU WEBSITE

---
### A Modern Website For the Zetech University Mang'u Campus Christian Union, Developed By the Media Department

---
## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16.0 or higher)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

## 📦 Installation

1. **Clone the repository**
    
   ```bash
    git clone https://github.com/CypherWhisperer/ZEMACU_WEBSITE.git zemacu_website && cd zemacu_website
    ```
    
2. **Install dependencies**
    
    ```bash
    npm install
    ```
    
    or if you prefer Yarn:
    
    ```bash
    yarn install
    ```
    

## 🏃‍♂️ Running the Project

### Development Server

Start the development server with hot reload:

```bash
npm run dev
```

or

```bash
yarn dev
```

The site will be available at `http://localhost:3000`

### Production Build

Build the project for production:

```bash
npm run build
```

or

```bash
yarn build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

or

```bash
yarn preview
```

## 📁 Project Structure

```
.
├── config
├── docs
│   ├── CONTRIBUTING.md              # Constribution stuff
│   ├── DEPLOYMENT.md                # Deployment Documentations
│   └── STYLE_GUIDE.md               # Guide in Development Conventions
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── assets
│   │   ├── css
│   │   │   ├── base
│   │   │   │   └── styles.css
│   │   │   └── pages
│   │   │       ├── home.css
│   │   │       ├── index.css
│   │   │       ├── leaders.css
│   │   │       ├── resources.css
│   │   │       ├── support.css
│   │   │       └── weekly.css
│   │   ├── fonts
│   │   ├── images
│   │   ├── js
│   │   |   ├── base                   # base JS - JS logic shared across pages
│   │   │   │   ├── form.js
│   │   │   │   ├── script.js
│   │   │   │   └── verses.js
│   │       └── pages                  # Page specific JS logic
│   │   │       ├── home.js
│   │   │       ├── index.js
│   │   │       ├── leaders.js
│   │   │       ├── resources.js
│   │   │       ├── support.js
│   │   │       └── weekly.js
│   │   └── videos
│   ├── components                    # for components shared across pages
│   │   ├── ComponentLoader.js        # a class for loading the components
│   │   ├── footer
│   │   │   ├── footer.css
│   │   │   ├── footer.html
│   │   │   └── footer.js
│   │   ├── initComponents.js         # ochestrates the ComponentLoader
│   │   └── nav
│   │       ├── nav.css               # naming convention is key 
│   │       ├── nav.html              # the JS and CSS files are auto-detected 
│   │       └── nav.js                # by the initializing - script initComponents
│   ├── data
│   └── pages                         # The HTML pages go here
│       ├── home.html
│       ├── index.html
│       ├── leaders.html
│       ├── resources.html
│       ├── support.html
│       └── weekly.html
├── tests
└── vite.config.js

```

## 🛠️ Available Scripts

| Script            | Description               |
| ----------------- | ------------------------- |
| `npm run dev`     | Start development server  |
| `npm run build`   | Build for production      |
| `npm run preview` | Preview production build  |
| `npm run clean`   | Cleaning up (rm -rf dist) |
| `npm run test`    | Running Tests             |

## 🎨 Customization

### Vite Configuration

The project uses a custom Vite configuration. You can modify `vite.config.js` to:

- Add plugins
- Configure build options
- Set up aliases
- Customize development server

### Styling

- CSS files are located in `assets/css`
- Assets are automatically optimized during build
- Use modern CSS features with automatic vendor prefixing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder contains the production-ready files.


## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Node.js](https://nodejs.org/) - JavaScript runtime
- Thanks to all contributors who helped make this project better

---

Made with ❤️ for ZEMACU
