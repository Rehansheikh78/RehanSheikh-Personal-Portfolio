# My Portfolio

This is a React and Vite portfolio with a Spring Boot backend. The contact form sends directly from the frontend to Web3Forms. The Java backend remains a separate service with a health endpoint for future backend features.

## Set up Web3Forms

Create a form at [Web3Forms](https://web3forms.com/), verify the inbox where you want to receive messages, and copy the access key it provides. The free plan includes 250 submissions per month. The access key is designed to be used in frontend code, so it is public in the built website.

Put the key in `frontend/.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Restart the Vite development server after changing `.env`.

## Run locally

```powershell
cd frontend
npm install
npm run dev
```

## Run the Java backend

Use Java 17 or newer. In a separate terminal:

```powershell
cd backend
Copy-Item .env.example .env
```

The backend needs no email credentials. In a separate terminal, start its health endpoint:

```powershell
.\mvnw.cmd spring-boot:run
```

It exposes `GET /health`. Contact form submissions do not go through this backend because Web3Forms' free plan is intended for browser submissions.

## Run the backend with Docker

From the `backend` folder:

```powershell
docker build -t portfolio-backend .
docker run --env-file .env -p 8081:8081 portfolio-backend
```

## Deploy to Vercel and Render

On Vercel, add `VITE_WEB3FORMS_ACCESS_KEY` in the project's Environment Variables and redeploy the frontend. On Render, create a Docker web service using `backend/Dockerfile`; no email or CORS environment variables are required. Render provides `PORT` automatically. The Render backend is only needed for `/health` and future Java API features; the contact form works without it. Render Free services can sleep after inactivity and take a little time to wake on the next request.
