# my-cv (Abdullah Mushtaq portfolio) - Windows dev launcher
# Installs dependencies, then starts the Vite dev server.
$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Definition

function Info($m) { Write-Host "[my-cv] $m" -ForegroundColor Cyan }
function Fail($m) { Write-Host "[error] $m" -ForegroundColor Red; exit 1 }

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) { Fail "npm not found. Install Node.js and re-run." }

Write-Host "Starting my-cv portfolio" -ForegroundColor White

Set-Location $Root
if (-not (Test-Path (Join-Path $Root "node_modules"))) {
    Info "Installing dependencies"
    npm install
}

Info "Starting Vite dev server on http://localhost:5173"
npm run dev
