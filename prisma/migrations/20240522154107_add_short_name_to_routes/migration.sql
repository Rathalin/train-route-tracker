/*
  Warnings:

  - Added the required column `shortName` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Route" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shortName" TEXT NOT NULL,
    "title" TEXT NOT NULL
);
INSERT INTO "new_Route" ("id", "title") SELECT "id", "title" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
CREATE UNIQUE INDEX "Route_shortName_key" ON "Route"("shortName");
PRAGMA foreign_key_check("Route");
PRAGMA foreign_keys=ON;
