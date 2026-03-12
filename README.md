# OLX Parser Node.js

![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Status](https://img.shields.io/badge/status-active-success)
![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/olx-parser-node)
![Forks](https://img.shields.io/github/forks/YOUR_USERNAME/olx-parser-node)
![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/olx-parser-node)

A simple **OLX Ukraine scraper** built with **Node.js**.  
The script fetches ads from the OLX API and saves them into an Excel file.

---

## 📦 Features

- Fetch ads from OLX API
- Parse ad details
- Export results to Excel
- Random delay between requests
- Clean project structure

---

## 📁 Project Structure

```
olx-parser-node/
│
├─ .gitignore           # Ignore node_modules, Excel files, and secrets
├─ package.json         # Project configuration and dependencies
├─ README.md            # This documentation
├─ src/                 # Source code
│   ├─ index.js         # Entry point
│   ├─ fetcher.js       # Functions for HTTP requests to OLX
│   ├─ parser.js        # Functions to extract and parse data
│   └─ excel.js         # Functions for Excel creation and saving
└─ output/              # Folder for saving Excel files (ignored in GitHub)
```

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/yuriiwd-it/olx-parser-node.git

cd olx-parser-node

npm install

npm start
```

### After running, an Excel file output/olx_offers.xlsx will be created containing the ads data.

## 📄 Parsed Data

The script extracts the following fields for each ad:

Ad ID

Title

URL

Description

Price, currency, negotiable

City and region

Created date

Photo links

Seller name

Business account flag

## 📝 Notes

The script adds a 3–6 second random delay between requests to avoid overloading the API.

Excel files are saved locally in output/ and are not pushed to GitHub.

Dependencies used: axios and exceljs — both are free and open-source.

## 📜 License

MIT