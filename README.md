# Aadhaar OCR System

A web application that accepts images of Aadhaar cards (front and back), performs OCR (Optical Character Recognition), and returns the extracted data as a JSON response.

## Features

- Upload Aadhaar front and back images (with validation for size, type, and resolution)
- Parses and displays extracted Aadhaar details (UID, name, DOB, gender, address, pincode, etc.)
- Shows the full API JSON response
- User-friendly UI with error handling and toast notifications

## Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Type Checking:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Lucide React Icons](https://lucide.dev/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Linting:** [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd Frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory (already present in this repo):

   ```
   VITE_API_URL=http://localhost:3000
   ```

   Replace the URL with your backend API endpoint if different.

### Running the Application

Start the development server:

```sh
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

### Building for Production

```sh
npm run build
# or
yarn build
```

### Linting

```sh
npm run lint
# or
yarn lint
```

## Usage

1. Upload the **front** and **back** images of your Aadhaar card.
2. Click the **"PARSE AADHAAR"** button.
3. The extracted data will be displayed in a formatted section and as a raw JSON API response.

## File Structure

- `src/Components/` – UI components (file upload, parsed data display, API response, etc.)
- `src/Context/` – React context for Aadhaar image state
- `src/Hooks/` – Custom hooks (e.g., API handling)
- `src/Services/` – API service functions
- `src/Api/` – API endpoint configuration

## Environment Variables

- `VITE_API_URL` – Backend API base URL (see [.env](.env))

## Notes

- Only image files (JPG, PNG, etc.) above 50KB and with a minimum resolution of 800x600 are accepted.
- The backend API must be running and accessible at the URL specified in `.env`.

## License

MIT

---

**Made with ❤️ using React, Vite, and TypeScript**
