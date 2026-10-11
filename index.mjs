/**
 * @module dsh-plugin-suppress-onboarding
 * Cordis plugin for dsh-TUI (dst) to automatically suppress
 * the "Welcome to dsh-TUI" onboarding splash screen on startup.
 */

import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'

export const name = 'suppress-onboarding'

function getHomeDir() {
  return process.env.USERPROFILE || process.env.HOME || os.homedir()
}

function getDshTuiDir() {
  return path.join(getHomeDir(), '.dsh-tui')
}

export function suppressWelcome() {
  try {
    const tuiDir = getDshTuiDir()
    if (!fs.existsSync(tuiDir)) {
      fs.mkdirSync(tuiDir, { recursive: true })
    }
    const onboardingFile = path.join(tuiDir, 'onboarding.json')
    const state = { completed: true, version: 1 }
    fs.writeFileSync(onboardingFile, `${JSON.stringify(state, null, 2)}\n`, 'utf8')
  } catch {
    // Non-fatal, suppress error
  }
}

export function apply(ctx) {
  // Suppress onboarding splash immediately on plugin load
  suppressWelcome()
}
