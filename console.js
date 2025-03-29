function logInfo(message) {
    console.log(`INFO: ${message}`);
}

function logWarning(message) {
    console.warn(`WARNING: ${message}`);
}

function logError(message) {
    console.error(`ERROR: ${message}`);
}

logInfo("Aplikacja została uruchomiona");
logWarning("Użycie pamięci jest wysokie");
logError("Nie można znaleźć pliku konfiguracyjnego");
