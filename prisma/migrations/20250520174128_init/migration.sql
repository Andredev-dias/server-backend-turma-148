-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "List" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "image" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
