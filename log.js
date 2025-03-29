const fs = require('fs');
const path = require('path');

function logToFile(message) {
    const logMessage = `${new Date().toISOString()}: ${message}\n`;
    const logFilePath = path.join(__dirname, 'application.log');

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error("Błąd przy próbie zapisania logu:", err);
        } else {
            console.log("Log został zapisany.");
        }
    });
}

logToFile("Aplikacja została uruchomiona.");
logToFile("Wystąpił błąd w module X.");
