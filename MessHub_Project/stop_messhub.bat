@echo off
title Stop MessHub Services
echo Stopping MessHub Node.js and MariaDB processes...
taskkill /f /im node.exe >nul 2>&1
echo Done! MessHub server has been stopped.
pause

