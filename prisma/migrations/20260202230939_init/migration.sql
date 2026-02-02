-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "placa" TEXT NOT NULL,
    "disponibilidade" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "expectedReturnDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "total" REAL,
    CONSTRAINT "Rental_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Car_placa_key" ON "Car"("placa");

-- CreateIndex
CREATE INDEX "Rental_carId_idx" ON "Rental"("carId");

-- CreateIndex
CREATE INDEX "Rental_userId_idx" ON "Rental"("userId");
