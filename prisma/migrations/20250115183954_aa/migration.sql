-- CreateTable
CREATE TABLE "Linked" (
    "id" SERIAL NOT NULL,
    "gen" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Linked_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "YT" (
    "id" SERIAL NOT NULL,
    "gen" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "YT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Linked" ADD CONSTRAINT "Linked_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "YT" ADD CONSTRAINT "YT_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
