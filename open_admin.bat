@echo off
title MessHub Admin Portal Launcher
echo ===================================================
echo     Opening MessHub Admin Panel for Sanket...
echo ===================================================

:: Check MariaDB on 3307
netstat -ano | findstr ":3307" >nul
if %errorlevel% neq 0 (
    echo Starting MariaDB Database Server...
    start "" /b "C:\xampp\mysql\bin\mysqld.exe" --defaults-file="%~dp0mariadb_custom.ini" --console
    timeout /t 2 >nul
)

:: Check Node.js on 1000
netstat -ano | findstr ":1000" >nul
if %errorlevel% neq 0 (
    echo Starting MessHub Backend Server...
    cd /d "%~dp0MessHub_Project\MessHub_backend"
    start "" /b node index.js
    timeout /t 2 >nul
)

:: Open browser straight into Admin Dabba Tracking
echo Opening Admin Dashboard...
start http://localhost:1000/admin/quick-access?key=sanket9021

exit
