-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "direction" TEXT NOT NULL DEFAULT 'asc'
);
INSERT INTO "new_Route" ("id", "shortName", "title") SELECT "id", "shortName", "title" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
CREATE UNIQUE INDEX "Route_shortName_key" ON "Route"("shortName");
PRAGMA foreign_key_check("Route");
PRAGMA foreign_keys=ON;
