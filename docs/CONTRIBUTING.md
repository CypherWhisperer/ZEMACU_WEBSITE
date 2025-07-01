
## Overview

This document outlines our team collaboration practices, workflows, and guidelines for contributing to this project. Please read this thoroughly before making your first contribution.

## Git Workflow

### Branching Strategy

- **master**: Production-ready code only
- **develop**: Integration branch for features
- **feature/[feature-name]**: Individual feature development
- **hotfix/[issue-name]**: Critical production fixes

### Branch Naming Convention

```
feature/user-authentication
bugfix/nav-mobile-overflow
hotfix/form-submission-error
docs/update-readme
```

### Commit Message Format

```
type(scope): brief description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Examples**:

```
feat(nav): add mobile hamburger menu
fix(contact): resolve form validation issue
docs(readme): update installation instructions
style(home): adjust hero section spacing
```

---
## Pull Request Process

### Before Creating a PR

1. Ensure your branch is up to date with `develop`
2. Run local tests: `npm test`
3. Check code formatting and linting
4. Test your changes across different browsers/devices

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/CSS changes
- [ ] Refactoring

## Testing
- [ ] Tested locally
- [ ] Cross-browser tested
- [ ] Mobile responsive checked

## Files Changed
- List key files modified
- Highlight any breaking changes

## Screenshots (if applicable)
Before/after screenshots for UI changes
```

### Review Requirements

- **Minimum reviewers**: 1 (2 for critical features)
- **Required checks**: All automated tests must pass
- **Approval needed**: At least one team member approval
- **Self-review**: Review your own code before requesting review

## Code Review Guidelines

### For Authors

- Keep PRs focused and reasonably sized
- Provide clear descriptions and context
- Respond to feedback promptly and professionally
- Update documentation if needed

### For Reviewers

Check for:

- **Functionality**: Does the code work as intended?
- **Style**: Follows our style guide (see STYLE_GUIDE.md)
- **Structure**: Proper file organization and naming
- **Performance**: No unnecessary resource loading
- **Accessibility**: Semantic HTML, proper ARIA labels
- **Mobile**: Responsive design considerations

---
## File Organization Standards

### When Adding New Pages

1. Create HTML file in `src/pages/`
2. Add page-specific CSS in `src/assets/css/pages/[page-name].css`
3. Add page-specific JS in `src/assets/js/pages/[page-name].js`
4. Update navigation in `src/components/nav/` if needed

### When Adding New Components

1. Create component folder in `src/components/[component-name]/`
2. Include: `[component-name].html`, `[component-name].css`, `[component-name].js`
3. Follow existing component patterns in `ComponentLoader.js`, and `initComponent.js`

### Asset Management

- **Images**: Place in `src/assets/images/` with descriptive names
- **Fonts**: Add to `src/assets/fonts/`
- **Videos**: Place in `src/assets/videos/`
- **Shared CSS**: Use `src/assets/css/base/styles.css`
- **Shared JS**: Use `src/assets/js/base/` for cross-page functionality

---
## Communication

### Channels

- **General Discussion**: [**Discord/General**](https://discord.gg/DRZpMM9T)
- **Technical Questions**: [**Discord/Technical_Questions**](https://discord.gg/DRZpMM9T)
- **Project Ideas**: [**Discord/Ideas**](https://discord.gg/DRZpMM9T)
- **Bug Reports**: GitHub Issues
- **Feature Requests**: GitHub Issues with `enhancement` label

### Issue Management

- Use descriptive titles
- Include steps to reproduce for bugs
- Label appropriately: `bug`, `enhancement`, `documentation`, `help wanted`
- Assign to appropriate team member
- Link related PRs

### Meeting Schedule

- **Daily Standups**: [N/A for now]
- **Weekly Planning**: [N/A for now]
- **Code Review Sessions**: [N/A for now]

---

## Development Environment

### Setup Requirements

1. Node.js (version specified in package.json)
2. npm (comes with Node.js)
3. Local development server (Vite)

### Getting Started

```bash
git clone https://github.com/Wenels/ZEMACU_WEBSITE.git zemacu_website
cd zemacu_website
npm install
npm run dev
```

### Testing

```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
```

## Quality Standards

### Before Pushing Code

- [ ] Code follows style guide
- [ ] No console.log statements in production code
- [ ] Images optimized for web
- [ ] CSS is organized and commented
- [ ] JavaScript is documented
- [ ] HTML is semantic and accessible

### Definition of Done

- [ ] Feature works as specified
- [ ] Code reviewed and approved
- [ ] Tests pass
- [ ] Documentation updated
- [ ] Cross-browser compatible
- [ ] Mobile responsive
- [ ] Accessibility checked

## Troubleshooting

### Common Issues

- **Merge conflicts**: Always pull latest changes before creating feature branch
- **Build failures**: Check package versions and dependencies
- **Component not loading**: Verify naming conventions match ComponentLoader expectations

### Getting Help

1. Check existing documentation
2. Search GitHub issues
3. Ask in team communication channel [**Discord**](https://discord.gg/DRZpMM9T)
4. Schedule pairing session if needed

---
## Team Roles

### Project Lead

- Final approval on architectural decisions
- Manages releases and deployments
- Resolves conflicts and blockers

### Developers

- Implement features and fixes
- Participate in code reviews
- Maintain code quality standards

### Reviewers

- All team members participate in reviews
- Rotate review responsibilities
- Provide constructive feedback

---

## Step-by-Step Workflow for New Contributors

### 🚀 First-Time Setup (Do this once)

#### 1. Fork the Repository

- Go to [ZEMACU_WEBSITE repository](https://github.com/Wenels/ZEMACU_WEBSITE) on GitHub
- Click the "Fork" button in the top-right corner
- This creates your own copy of the repository under your GitHub account

#### 2. Clone Your Fork

```bash
# Clone your fork to your local machine
git clone https://github.com/YOUR_USERNAME/ZEMACU_WEBSITE.git zemacu_website
cd zemacu_website

# Add the original repository as 'upstream' remote
git remote add upstream https://github.com/Wenels/ZEMACU_WEBSITE.git

# Verify your remotes
git remote -v
# Should show:
# origin    https://github.com/YOUR_USERNAME/ZEMACU_WEBSITE.git (fetch)
# origin    https://github.com/YOUR_USERNAME/ZEMACU_WEBSITE.git (push)
# upstream  https://github.com/Wenels/ZEMACU_WEBSITE.git (fetch)
# upstream  https://github.com/Wenels/ZEMACU_WEBSITE.git (push)
```

#### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173 (or shown URL)
# You should see the ZEMACU website running locally
```

### 🔄 For Each New Feature/Fix (Repeat this process)

#### 1. Sync Your Fork with Latest Changes

```bash
# Make sure you're on the master branch
git checkout master

# Fetch latest changes from upstream
git fetch upstream

# Merge upstream changes into your master branch
git merge upstream/master

# Push updated master to your fork
git push origin master
```

#### 2. Create a Feature Branch

```bash
# Create and switch to new branch from develop
git checkout develop
git pull upstream develop  # Get latest develop changes
git checkout -b feature/your-feature-name

# Examples:
# git checkout -b feature/contact-form-validation
# git checkout -b bugfix/nav-mobile-menu
# git checkout -b docs/update-readme
# git checkout -b feature/prayer-request-form
```

#### 3. Make Your Changes

Follow our file organization standards:

**Adding a new page:**

```bash
# 1. Create HTML file
touch src/pages/new-page.html

# 2. Create page-specific CSS
touch src/assets/css/pages/new-page.css

# 3. Create page-specific JS
touch src/assets/js/pages/new-page.js

# 4. Update navigation in src/components/nav/ if needed
```

**Adding a new component:**

```bash
# 1. Create component folder
mkdir src/components/new-component

# 2. Create component files (naming is crucial!)
touch src/components/new-component/new-component.html
touch src/components/new-component/new-component.css
touch src/components/new-component/new-component.js
```

#### 4. Test Your Changes

```bash
# Run development server
npm run dev

# Test checklist:
# ✅ Page loads without errors
# ✅ All components initialize properly
# ✅ Mobile responsiveness works
# ✅ Navigation functions correctly
# ✅ Forms submit properly (if applicable)
# ✅ Cross-browser compatibility

# If tests are configured, run them
npm test
```

#### 5. Commit Your Changes

```bash
# Stage your changes
git add .

# Or stage specific files
git add src/pages/contact.html src/assets/css/pages/contact.css

# Commit with proper message format
git commit -m "feat(contact): add contact form validation

- Add email validation for contact form
- Include phone number format checking
- Display user-friendly error messages"

# More commit examples:
# git commit -m "fix(nav): resolve mobile menu overlay issue"
# git commit -m "docs(readme): update installation instructions"
# git commit -m "style(home): adjust hero section spacing"
```

#### 6. Push to Your Fork

```bash
# Push your feature branch to your fork
git push origin feature/your-feature-name

# If this is your first push of this branch:
git push -u origin feature/your-feature-name
```

#### 7. Create a Pull Request

1. Go to your fork on GitHub (`https://github.com/YOUR_USERNAME/ZEMACU_WEBSITE`)
2. Click "Compare & pull request" button (appears after pushing)
3. **Important**: Make sure you're creating PR against the `develop` branch, not `master`
4. Fill out the PR template:

```markdown
## Description
Add contact form validation with email and phone number checking

## Type of Change
- [x] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Style/CSS changes
- [ ] Refactoring

## Testing
- [x] Tested locally
- [x] Cross-browser tested (Chrome, Firefox, Safari)
- [x] Mobile responsive checked
- [x] Form validation works correctly

## Files Changed
- src/pages/contact.html - Added validation attributes
- src/assets/js/pages/contact.js - Added validation logic
- src/assets/css/pages/contact.css - Added error styling

## Screenshots (if applicable)
[Add before/after screenshots for UI changes]
```

5. Click "Create pull request"
6. Wait for code review and address any feedback

#### 8. Address Review Feedback

If reviewers request changes:

```bash
# Make the requested changes
# Stage and commit them
git add .
git commit -m "fix(contact): address review feedback

- Update error message styling
- Fix email regex pattern
- Add missing ARIA labels"

# Push the changes (they'll automatically appear in your PR)
git push origin feature/your-feature-name
```

#### 9. After PR is Merged

```bash
# Switch back to develop branch
git checkout develop

# Pull the latest changes (including your merged PR)
git pull upstream develop

# Push updated develop to your fork
git push origin develop

# Delete your feature branch (cleanup)
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

### 🛠️ Common Workflow Commands

```bash
# Quick status check
git status
git branch  # See which branch you're on

# See your commit history
git log --oneline

# Undo last commit (if not pushed yet)
git reset --soft HEAD~1

# Discard changes to a file
git checkout -- filename

# Stash changes temporarily
git stash
git stash pop  # Restore stashed changes
```

### ⚠️ Common Gotchas for New Contributors

1. **Always work on feature branches** - Never commit directly to `master` or `develop`
2. **Sync before starting** - Always pull latest changes before creating a new branch
3. **Follow naming conventions** - Component files must match folder names exactly
4. **Test locally first** - Run `npm run dev` and test your changes before pushing
5. **Small, focused PRs** - Don't mix multiple features in one PR
6. **Read the style guide** - Follow our coding standards in STYLE_GUIDE.md

### 🆘 When Things Go Wrong

**Merge Conflicts:**

```bash
# Pull latest changes and try to merge
git pull upstream develop

# If conflicts occur, fix them in your editor
# Look for markers like <<<<<<< and >>>>>>>
# Edit files to resolve conflicts
git add .
git commit -m "resolve merge conflicts"
```

**Accidentally committed to wrong branch:**

```bash
# If you committed to master instead of feature branch
git checkout master
git reset --soft HEAD~1  # Undo last commit, keep changes
git checkout -b feature/correct-branch-name
git add .
git commit -m "your commit message"
```

**Need help:**

- Check our [Discord channel](https://discord.gg/DRZpMM9T)
- Look at existing PRs for examples
- Ask questions in GitHub issues
- Contact team lead: CypherWhisperer@gmail.com

### 📝 Quick Reference

```bash
# Setup (once)
git clone https://github.com/YOUR_USERNAME/ZEMACU_WEBSITE.git
git remote add upstream https://github.com/Wenels/ZEMACU_WEBSITE.git

# For each feature
git checkout develop
git pull upstream develop
git checkout -b feature/my-feature
# ... make changes ...
git add .
git commit -m "feat(scope): description"
git push origin feature/my-feature
# ... create PR on GitHub ...

# After PR merged
git checkout develop
git pull upstream develop
git branch -d feature/my-feature
```

---

_Last updated: [July 1st, 2025]_ _For questions about this document, contact: [Team Lead/CypherWhisperer@gmail.com]_
