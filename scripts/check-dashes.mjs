#!/usr/bin/env node
/**
 * House rule: no en dashes or em dashes anywhere in copy, code, comments or
 * metadata. Ported from legacy/tools/validate.py and widened to every source file.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const SCAN = [
  'app',
  'components',
  'content',
  'lib',
  'scripts',
  'public',
  'docs',
  '.github',
  'proxy.ts',
  'next.config.ts',
  'tailwind.config.ts',
  'README.md',
]
const EXT = /\.(tsx?|mjs|cjs|js|css|md|txt|json|ya?ml)$/
const DASH = /[\u2013\u2014]/

const offenders = []
function walk(p) {
  let st
  try {
    st = statSync(p)
  } catch {
    return
  }
  if (st.isDirectory()) return readdirSync(p).forEach((f) => walk(join(p, f)))
  if (!EXT.test(p)) return
  readFileSync(p, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      if (DASH.test(line))
        offenders.push(`${relative(ROOT, p)}:${i + 1}: ${line.trim().slice(0, 120)}`)
    })
}
SCAN.forEach((s) => walk(join(ROOT, s)))

if (offenders.length) {
  console.error(
    `✗ ${offenders.length} line(s) contain an en or em dash. Use a comma, colon or full stop.\n`,
  )
  offenders.forEach((o) => console.error('  ' + o))
  process.exit(1)
}
console.log('✓ No en or em dashes in source, copy or metadata')
