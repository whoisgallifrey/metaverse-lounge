@echo off
setlocal
title Metaverse Lounge & Collaborative Garden

echo ========================================================
echo   METAVERSE LOUNGE ^& COLLABORATIVE GARDEN
echo ========================================================
echo.

:: Ensure system certificate authorities are trusted
set "NODE_OPTIONS=--use-system-ca"

:: Ensure Node is in PATH if installed in standard directories
where node >nul 2>nul
if %errorlevel% neq 0 (
    if exist "%ProgramFiles%\nodejs\node.exe" (
        set "PATH=%ProgramFiles%\nodejs;%PATH%"
    ) else if exist "%ProgramFiles(x86)%\nodejs\node.exe" (
        set "PATH=%ProgramFiles(x86)%\nodejs;%PATH%"
    ) else (
        echo [ERROR] Node.js is not found in PATH!
        echo Please run install.bat first or install Node.js from https://nodejs.org
        echo.
        pause
        exit /b 1
    )
)

:: Check if node_modules exists
if not exist "node_modules\" (
    echo [NOTICE] node_modules not detected. Installing dependencies first...
    call npm install --no-audit --no-fund
    echo.
)

echo Starting server...
echo Local URL: http://localhost:3000
echo Press Ctrl+C in this window to stop the server.
echo.

node server.js

if %errorlevel% neq 0 (
    echo.
    echo [SERVER TERMINATED WITH ERROR CODE %errorlevel%]
)

echo.
pause
