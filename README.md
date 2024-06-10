# ContactForm Application

This is a simple React application for a contact form that allows users to submit their contact information and queries. Upon submission, users are redirected to a confirmation page.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styles](#styles)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ContactForm
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Project Structure

```
ContactForm/
├── dist/
├── node_modules/
├── public/
│   ├── assets/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Buttons/
│   │   ├── ContactBody/
│   │   ├── FormInBody/
│   │   │   ├── FormInBody.jsx
│   │   │   ├── FormInBody.module.css
│   │   ├── Navigation/
│   │   ├── Submission/
│   │       ├── SubmissionConfirmation.jsx
│   │       ├── SubmissionConfirmation.module.css
│   ├── images/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Components

### 1. `FormInBody`

- **Path:** `src/components/FormInBody/FormInBody.jsx`
- **Description:** This component contains the contact form where users input their name, email, and query.
- **Styles:** `src/components/FormInBody/FormInBody.module.css`

### 2. `SubmissionConfirmation`

- **Path:** `src/components/Submission/SubmissionConfirmation.jsx`
- **Description:** This component displays a confirmation message after the form is successfully submitted.
- **Styles:** `src/components/Submission/SubmissionConfirmation.module.css`

### 3. `Navbar`

- **Path:** `src/components/Navigation/Navbar.jsx`
- **Description:** This component displays the navigation bar.

### 4. `ContactHeader`

- **Path:** `src/components/ContactBody/ContactHeader.jsx`
- **Description:** This component displays the header for the contact section.

## Styles

- **Global Styles:** `src/index.css`
- **Component-specific Styles:** Located within each component's directory.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
