'use client'

import { useSyncExternalStore } from 'react'
import { analyticsEnabled } from './analytics'
import { keys, storage } from './storage'

export type Consent = 'unset' | 'accepted' | 'declined'

const listeners = new Set<() => void>()
let reopened = false

function read(): Consent {
  const v = storage.get(keys.consent)
  return v === 'accepted' || v === 'declined' ? v : 'unset'
}

function emit() {
  listeners.forEach((l) => l())
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}

export function setConsent(value: Exclude<Consent, 'unset'>) {
  storage.set(keys.consent, value)
  reopened = false
  emit()
}

/** Footer "Cookie preferences" link. */
export function reopenConsent() {
  reopened = true
  emit()
}

export function useConsent(): Consent {
  return useSyncExternalStore(subscribe, read, () => 'unset')
}

/** The banner exists only when an analytics tool is configured. */
export function useBannerOpen(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => analyticsEnabled && (reopened || read() === 'unset'),
    () => false,
  )
}
