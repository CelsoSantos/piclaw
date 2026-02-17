# Copilot instructions (skeleton)

This is a starter template for repositories created inside Pibox.

## Agent: Pi Coding Agent

This workspace uses [pi](https://github.com/badlogic/pi-mono) as its coding agent.

- Pi reads `AGENTS.md` files from the current directory and parent directories for project context
- Global skills are in `~/.pi/agent/skills/` (schedule, send-message, etc.)
- Project skills are in `.pi/skills/` (setup, debug, etc.)
- Settings in `.pi/settings.json` (project) and `~/.pi/agent/settings.json` (global)

## Mandatory: use the Makefile

Use `make` targets for build/lint/test/format/dev flows whenever available.

## Environment

- You have `bun` and `brew` available to install tooling
- Use `sudo apt` for system packages if needed
- Prefer bun over npm/yarn for JS/TS package management
