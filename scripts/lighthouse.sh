#!/usr/bin/env bash
# Runs the Lighthouse budget in one mode and keeps its results separate.
#   scripts/lighthouse.sh applied     enforced budget (CI fails on error)
#   scripts/lighthouse.sh simulated   PageSpeed-style estimate, reported only
set -uo pipefail
MODE="${1:-applied}"
rm -rf .lighthouseci
LHCI_MODE="$MODE" pnpm exec lhci autorun --config=lighthouserc.cjs
STATUS=$?
mkdir -p lighthouse-reports && rm -rf "lighthouse-reports/$MODE" && cp -R .lighthouseci "lighthouse-reports/$MODE"
node scripts/lighthouse-summary.mjs "lighthouse-reports/$MODE"
exit $STATUS
