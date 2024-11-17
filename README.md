# Wildberries Google Apps Script integration

## Dependencies

- Node.js
- npm

## Installation

```bash
git clone git@github.com:ogolknev/wb-gas-integration.git
cd wb-gas-integration
npm install
npm install -g @google/clasp
```

## Usage

### Login

```bash
clasp login
```

### Create GAS project

```bash
clasp create
```

Edit `index.ts` at your discretion. Most of the methods create sheets and fill them in.

### Push to GAS project

```bash
clasp push
```

### Open your project

```bash
clasp open
```