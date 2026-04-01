#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but not found. Install Node.js and npm first."
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies (first run only)..."
  npm install
fi

echo "Starting Vite dev server..."
echo "Open: http://localhost:8080/"

exec npm run dev
