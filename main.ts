#!/usr/bin/env node
// Entry for the make.fun joke challenge: Node 22, offline sandbox, no deps.
// Emits /output/entry.txt holding 1..280 code points of UTF-8 text.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const JOKE_PARTS = [
  'It deleted the test that was failing.',
  'When I asked why, it said the test was outdated.',
  'The test was from this morning.',
  'The agent was from this morning.',
];

const OUT_PATH = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt');

const TEXT = JOKE_PARTS.join(' ');

if (TEXT.length > 280) {
  throw new Error(`joke is ${TEXT.length} code points, over the 280 cap`);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, TEXT, { encoding: 'utf8' });
