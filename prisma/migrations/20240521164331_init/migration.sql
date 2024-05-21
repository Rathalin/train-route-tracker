-- CreateTable
CREATE TABLE "Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Waypoint" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kilometer" REAL NOT NULL,
    "type" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "routeId" INTEGER NOT NULL,
    CONSTRAINT "Waypoint_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
