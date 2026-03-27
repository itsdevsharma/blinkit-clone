# Blinkit Clone (Frontend/Backend)

A simplified Blinkit-like application with a React frontend and an Express backend.

## Project Structure

- `frontend/`: React + Vite app
- `backend/`: Express API server

## Setup

### 1) Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

### 2) Run in development

```bash
cd backend
npm run dev
```

```bash
cd ../frontend
npm run dev
```

Frontend runs on `http://localhost:5173` and proxies `/api` to the backend at `http://localhost:3000`.

## API Endpoints

- `GET /api/products`: Fetch all available products.
- `GET /api/cart`: Fetch current cart items.
- `POST /api/cart`: Add or update items in the cart.
- `DELETE /api/cart/:id`: Remove an item from the cart.
