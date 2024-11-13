"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    // Attempt to extract the field name within backticks
    const match = err.message.match(/\(\`(.*?)\`\)/);
    const extractedMessage = match === null || match === void 0 ? void 0 : match[1]; // Optional chaining to safely access the value
    // If no field name is found, fall back to a generic message
    const fieldName = extractedMessage || "Unknown field";
    // Prepare the error response
    const errorSources = [
        {
            path: "",
            message: `${fieldName} already exists`,
        },
    ];
    return {
        success: false,
        statusCode: 400,
        message: `The ${fieldName} is already in use. Please choose a different one.`,
        errorSources,
    };
};
exports.default = handleDuplicateError;
