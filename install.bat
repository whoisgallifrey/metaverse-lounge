@echo off
setlocal
title Metaverse Lounge - Installer

echo ========================================================
echo   METAVERSE LOUNGE ^& COLLABORATIVE GARDEN - INSTALLER
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
        echo [ERROR] Node.js is not installed or not in PATH!
        echo Please install Node.js from https://nodejs.org or via winget install OpenJS.NodeJS.LTS
        echo.
        pause
        exit /b 1
    )
)

echo [OK] Node.js detected:
node -v
echo [OK] npm detected:
call npm -v
echo.

echo Installing dependencies from package.json...
call npm install --no-audit --no-fund

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   Installation completed successfully!
    echo   You can now launch the project using run.bat
    echo ========================================================
) else (
    echo.
    echo [ERROR] npm install encountered an error.
)

echo.
pause
