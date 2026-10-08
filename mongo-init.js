db = db.getSiblingDB("admin"); db.auth("admin", "admin123"); db.createUser({user: "appuser", pwd: "app123", roles: [{role: "readWrite", db: "university_bus_booking"}]});
