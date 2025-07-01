
## Overview

This document provides step-by-step instructions for deploying our project to different environments. Follow these procedures carefully to ensure consistent and reliable deployments.

## Prerequisites

### Required Tools

- Node.js (version specified in package.json)
- npm (comes with Node.js)
- Git

---
## Environment Configuration

### Development Environment

```bash
# Local development setup
git clone https://github.com/Wenels/ZEMACU_WEBSITE.git zemacu_website
cd zemacu_website
npm install
npm run dev
```

**Environment Variables** (create `.env.local`):

```env
NODE_ENV=development
API_BASE_URL=http://localhost:3000/api
DEBUG=true
```

---
## Build Process

### Local Build

```bash
# Install dependencies
npm install

# Run tests (if configured)
npm test

# Create production build
npm run build

# Preview production build locally
npm run preview
```

### Build Output

After running `npm run build`, the following structure is created:

```
dist/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── fonts/
│   └── videos/
└── [other-pages].html
```

### Build Verification Checklist

- [ ] All HTML pages generated correctly
- [ ] CSS and JS files are minified
- [ ] Images are optimized
- [ ] All asset paths are correct
- [ ] No console errors in browser
- [ ] Mobile responsiveness maintained
- [ ] All components load properly

---

_Last updated: [July 1st 2025]_ _For deployment issues, contact: [Team Lead/cypherwhisperer@gmail.com]_

