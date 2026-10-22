'use client'

import { useEffect } from 'react'

/** Form fields stay usable: people can still select, copy and paste what they type. */
const editable = (t: EventTarget | null) =>
  t instanceof Element && Boolean(t.closest('input, textarea, select, [contenteditable="true"]'))

const BLOCKED_KEYS = new Set(['c', 'x', 'a', 's', 'p', 'u'])

/**
 * Discourages copying page content: blocks copy, cut, drag and the copy, select
 * all, save, print and view source shortcuts. Selection is also turned off in
 * globals.css. This is a deterrent only; it cannot stop screenshots or someone
 * reading the page source, and search engines still read the full text.
 */
export function CopyGuard() {
  useEffect(() => {
    const block = (e: Event) => {
      if (!editable(e.target)) e.preventDefault()
    }
    const onKey = (e: KeyboardEvent) => {
      if (editable(e.target)) return
      const key = e.key.toLowerCase()
      if ((e.metaKey || e.ctrlKey) && BLOCKED_KEYS.has(key)) e.preventDefault()
      if (e.ctrlKey && e.shiftKey && (key === 'c' || key === 'i')) e.preventDefault()
    }
    const events = ['copy', 'cut', 'dragstart', 'selectstart', 'contextmenu'] as const
    for (const name of events) document.addEventListener(name, block)
    document.addEventListener('keydown', onKey)
    return () => {
      for (const name of events) document.removeEventListener(name, block)
      document.removeEventListener('keydown', onKey)
    }
  }, [])
  return null
}
