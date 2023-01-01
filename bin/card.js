#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const output = readFileSync(join(__dirname, 'output'), 'utf8');
console.log(output);
