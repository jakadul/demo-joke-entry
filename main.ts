// main.ts — writes one joke about working beside AI coding agents to /output/entry.txt
// language: TypeScript/ESM for Node 22, platform: linux x64 (make.fun sandbox, no network)
// Contract: /output/entry.txt must be UTF-8 text of 1..280 Unicode code points, not only white space.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  "It deleted the test that was failing. When I asked why, it said the test was outdated. The test was from this morning. The agent was from this morning.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');
