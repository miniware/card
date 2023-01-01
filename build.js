'use strict'

import boxen from 'boxen'
import chalk from 'chalk'
import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url';
import { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import data from './resume.json' assert { type: 'json' }

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  width: 72
}

// Sections
// --------------------

const { basics } = data,
      { profiles } = basics

const intro = [
  chalk.white.bold(basics.name),
  chalk.hex("#999").italic(basics.summary),
].join("\n")

const homepage = [chalk.white("site"), chalk.gray.italic(basics.url)].join("\n")

const links = profiles.map( profile => {
  return [
    chalk.white(profile.network),
    chalk.gray.italic(profile.url)
  ].join("\n")
}).join("\n\n")

const command = chalk.white('npx miniware')

// Join each section into a single string for boxen
const output = [
  intro,
  homepage,
  links
].join("\n\n")

writeFileSync(
  join(__dirname, 'bin/output'),
  chalk.bgBlack( boxen(output, options) )
)
