function sanitizeObject(obj) {
  if (!obj || typeof obj !== "object") {
    return;
  }

  for (const key of Object.keys(obj)) {
    // Remove MongoDB operators and dot notation
    if (key.startsWith("$") || key.includes(".")) {
      delete obj[key];
      continue;
    }

    if (obj[key] && typeof obj[key] === "object") {
      sanitizeObject(obj[key]);
    }
  }
}

const mongoSanitizeMiddleware = (req, res, next) => {
  sanitizeObject(req.body);
  sanitizeObject(req.params);

  // IMPORTANT:
  // Do not do: req.query = ...
  // Express 5 makes req.query read-only.

  if (req.query && typeof req.query === "object") {
    sanitizeObject(req.query);
  }

  next();
};

module.exports = mongoSanitizeMiddleware;