"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load environment variables from .env file
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
// Configuration object with default values
const config = {
    environment: process.env.NODE_ENV || "development",
    serverPort: process.env.PORT || "3000",
    databaseUrl: process.env.DATABASE_URL || "mongodb://localhost:27017/myapp",
    bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || "10", 10),
    defaultPassword: process.env.DEFAULT_PASS || "changeit",
    jwt: {
        accessSecret: process.env.JWT_ACCESS_SECRET || "your_access_secret",
        refreshSecret: process.env.JWT_REFRESH_SECRET || "your_refresh_secret",
        accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "1h",
        refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    },
    resetPasswordLink: process.env.RESET_PASS_UI_LINK || "http://localhost:3000/reset-password",
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || "your_cloud_name",
        apiKey: process.env.CLOUDINARY_API_KEY || "your_api_key",
        apiSecret: process.env.CLOUDINARY_API_SECRET || "your_api_secret",
    },
    superAdminPassword: process.env.SUPER_ADMIN_PASSWORD || "superadmindefault",
};
exports.default = config;
