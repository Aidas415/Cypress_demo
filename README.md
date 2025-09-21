# 🚀 Cypress Demo Project

[![Cypress Tests](https://github.com/Aidas415/Cypress_demo/actions/workflows/node.js.yml/badge.svg)](https://github.com/Aidas415/Cypress_demo/actions/workflows/node.js.yml)

This is a demo project created for learning Cypress and CI/CD integration with GitHub Actions.  
It includes UI-based end-to-end tests for sample components and workflows.

## 🧩 Project Structure

> 📌 Icon meanings

- 📁 –  folder
- 📄 – file
- 🔬 – Cypress test file 

```
├── 📁 .github
│   └── 📁 workflows
│       └── 📄 node.js.yml
├── 📁 cypress 
│   ├── 📁 downloads
│   │   └── 📄 downloads.htm
│   ├── 📁 e2e
│   │   ├── 📁 demo_config
│   │   │   └── automation_config.cy.js
│   │   ├── 🔬 autotests.cy.js
│   │   ├── 🔬 hw_todo_list.cy.js
│   │   ├── 🔬 spec.cy.js
│   │   └── 🔬 strucutingtests.cy.js
│   ├── 📁 fixtures  
│   │   └── 📄 example.json
│   └── 📁 support
│       ├── 📄 commands.js
│       └── 📄 e2e.js
├── 📄 .gitignore
├── 📄 README.md
├── 📄 cypress.config.js
├── 📄 demo.html
├── 📄 package-lock.json
└── 📄 package.json
```



## 🧪 This project includes a few sample Cypress test cases:

- `cy.js` – contains 3 working test cases
- Other `cy.js` files – contain structural templates only

## 🏁 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

## ▶️ Running Tests Locally

- Run tests:
npx cypress open

- Run tests in headless mode:
npx cypress run

## ⚙️ GitHub Actions

Tests are automatically triggered on every push or pull request.
Workflow file: .github/workflows/node.js.yml

## ⚠️ Notes

This project is for educational purposes.
Some test files are placeholders and do not contain active test cases.

## 👤 Author

Created by Aidas.
Feel free to fork or adapt for your own learning.
