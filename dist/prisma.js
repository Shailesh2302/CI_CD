import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
export function load_database() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error("DATABASE_URL is not configured");
    }
    const adapter = new PrismaPg({ connectionString });
    const prisma = new PrismaClient({ adapter });
    console.log("Database connected");
    return prisma;
}
//# sourceMappingURL=prisma.js.map