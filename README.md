# Student Bus Booking System — Week 1

A React + Express + MongoDB university bus booking system with the **Transportation Management Module** implemented for the five-week lab evaluation.

## Week 1 deliverable

The admin workflow is now covered end-to-end:

1. **Admin login** — existing JWT authentication and admin authorization middleware.
2. **Bus management** — add, list, view, edit, and deactivate buses; store registration, operator, seat count, and layout.
3. **Route management** — create and list source → destination routes with optional via stop and duration.
4. **Trip scheduling** — select a bus and route, set departure/arrival, fare, and status.
5. **Seat engine** — auto-number seats from the selected bus and maintain available / held / booked / blocked per-trip state.

## Important files

- `backend/models/Bus.js` — bus lifecycle and capacity model.
- `backend/models/Route.js` — source/destination route model.
- `backend/models/Trip.js` — schedule, fare, status, and seat-array model.
- `backend/controllers/busController.js` + `backend/routes/busRoutes.js` — admin bus APIs.
- `backend/controllers/routeController.js` — route APIs updated for source/destination.
- `backend/controllers/tripController.js` — scheduling and seat configuration APIs.
- `frontend/src/App.js` — functional admin preview UI and demo flow.
- `frontend/src/App.css` — responsive TransitOps admin console styling.

## Run the preview

The frontend includes a self-contained demo mode so the Week 1 flow can be evaluated without MongoDB:

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:3000`. Use the left navigation or the dashboard buttons to run:

> Add bus → Create route → Schedule trip → Seat engine

The preview starts with sample fleet data and saves changes in the current browser session.

## Run the full stack

1. Copy `backend/.env.example` to `backend/.env` and set `JWT_SECRET`.
2. Start MongoDB and the API:

```bash
cd backend
npm install
npm start
```

3. Start the React frontend in another terminal:

```bash
cd frontend
npm install
npm start
```

The API listens on port `5000`. New endpoints:

- `GET /api/buses`
- `POST /api/buses` (admin)
- `PUT /api/buses/:id` (admin)
- `PATCH /api/buses/:id/deactivate` (admin)
- `GET/POST/PUT /api/routes`
- `GET/POST/PUT /api/trips`
- `PATCH /api/trips/:id/seats` (admin)

## Lab demo verification

Use an admin JWT in the `Authorization: Bearer <token>` header for protected write operations. For the UI demo, the preview starts in admin mode and provides sample records so the evaluator can verify the workflow immediately.

## Notes for GitHub

This archive is the modified **WEB-II** project. The currently selected GitHub repository in the task is `WasikAhmed00/flowfreeze`, which is an unrelated Python fraud-analysis repository; it was not overwritten. Push this `WEB-II-main` folder to the intended student bus-booking repository, or create a new repository for this project before pushing.
