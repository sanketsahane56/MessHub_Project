@echo off
title MessHub Project Launcher
echo ===================================================
echo             Starting MessHub Project...
echo ===================================================

cd /d "%~dp0"

echo [1/3] Checking MySQL / MariaDB on Port 3307...
netstat -ano | findstr ":3307" >nul
if %errorlevel% neq 0 (
    echo Starting MariaDB Server...
    start "" /b "C:\xampp\mysql\bin\mysqld.exe" --defaults-file="%~dp0mariadb_custom.ini" --console
    timeout /t 3 >nul
) else (
    echo MariaDB is already running on port 3307.
)

echo [2/3] Starting MessHub Node.js Application...
cd /d "%~dp0MessHub_backend"

echo [3/3] Opening browser at http://localhost:1000...
start http://localhost:1000

echo ===================================================
echo   MessHub is live at: http://localhost:1000
echo   Admin Dashboard:    http://localhost:1000/admin/
echo ===================================================
echo Press Ctrl+C to stop the Node.js server.
echo.

node index.js
pause

