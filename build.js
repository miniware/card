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
  borderStyle: 'classic'
}

// Sections
// --------------------

const { basics } = data,
      { profiles } = basics

const intro = [
  chalk.hex("#ffcc00").bold.inverse(`${basics.name}`),
  chalk.hex("#ffcc00").italic(`${basics.summary}`)
].join("\n")

const links = profiles.map( profile => {
  return [
    chalk.gray.italic(`${profile.network}`),
    chalk.white(`${profile.url}`)
  ].join("\n")
}).join("\n\n")

const command = chalk.white('npx miniware')

// Join each section into a single string for boxen
const output = [
  intro,
  links
].join("\n\n")

writeFileSync(
  join(__dirname, 'bin/output'),
  chalk.black( boxen(output, options) )
)
