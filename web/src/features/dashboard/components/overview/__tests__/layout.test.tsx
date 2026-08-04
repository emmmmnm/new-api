/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import assert from 'node:assert/strict'
import { describe, test } from 'node:test'

import { Window } from 'happy-dom'
import { Activity } from 'lucide-react'
import { renderToStaticMarkup } from 'react-dom/server'

import { StatCard } from '../../ui/stat-card'

function renderStatCard(value: string) {
  const window = new Window()
  window.document.body.innerHTML = renderToStaticMarkup(
    <div className='dashboard-overview-editorial'>
      <StatCard
        title='Usage'
        value={value}
        description='Current usage'
        icon={Activity}
        sparkline={[1, 2, 3]}
        sparklineVariant='line'
      />
    </div>
  )
  return window
}

describe('dashboard overview stat card layout', () => {
  test('keeps long numeric values readable without forcing horizontal overflow', () => {
    const longValue = '123456789012345678901234567890'
    const window = renderStatCard(longValue)
    const value = window.document.querySelector(
      '[data-slot="stat-card-value"]'
    ) as HTMLElement | null

    assert.ok(value)
    assert.equal(value.textContent, longValue)
    assert.equal(value.classList.contains('truncate'), false)
    assert.equal(value.classList.contains('tabular-nums'), true)
    window.close()
  })

  test('exposes stable slots for the responsive card and its visualization', () => {
    const window = renderStatCard('42')

    assert.ok(window.document.querySelector('[data-slot="stat-card"]'))
    assert.ok(
      window.document.querySelector('[data-slot="stat-card-sparkline"]')
    )
    window.close()
  })
})
