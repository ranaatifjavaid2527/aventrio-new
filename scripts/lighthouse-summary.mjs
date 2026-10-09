#!/usr/bin/env node
/** Prints the median Lighthouse scores per page for one results folder. */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dir = process.argv[2] ?? '.lighthouseci'
const runs = {}
for (const f of readdirSync(dir).filter((f) => f.startsWith('lhr-') && f.endsWith('.json'))) {
  const d = JSON.parse(readFileSync(join(dir, f), 'utf8'))
  const page = new URL(d.finalDisplayedUrl).pathname
  ;(runs[page] ??= []).push(d)
}
const median = (xs) => xs.sort((a, b) => a - b)[Math.floor(xs.length / 2)]
const mode = Object.values(runs)[0]?.[0]?.configSettings.throttlingMethod
console.log(
  `\nLighthouse (${mode === 'devtools' ? 'applied throttling' : 'simulated throttling'}), median of runs, mobile`,
)
console.log('page        perf  a11y  bp   seo   LCP      CLS    TBT')
for (const [page, list] of Object.entries(runs).sort()) {
  const s = (k) => Math.round(median(list.map((d) => d.categories[k].score)) * 100)
  const a = (k) => median(list.map((d) => d.audits[k].numericValue))
  console.log(
    `${page.padEnd(11)} ${String(s('performance')).padEnd(5)} ${String(s('accessibility')).padEnd(5)} ${String(s('best-practices')).padEnd(4)} ${String(s('seo')).padEnd(5)} ${String(Math.round(a('largest-contentful-paint'))).padStart(5)}ms  ${a('cumulative-layout-shift').toFixed(3)}  ${Math.round(a('total-blocking-time'))}ms`,
  )
}
