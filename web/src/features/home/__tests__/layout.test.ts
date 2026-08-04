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

import { homeLayoutClasses } from '../layout.ts'

describe('editorial homepage layout', () => {
  test('keeps the hero viewport-led while preserving mobile padding', () => {
    const classes = homeLayoutClasses.hero.split(' ')

    assert.ok(classes.includes('min-h-[calc(100svh-1rem)]'))
    assert.ok(classes.includes('px-6'))
    assert.ok(classes.includes('overflow-hidden'))
  })

  test('moves the feature index from one column to a three-column desktop grid', () => {
    const classes = homeLayoutClasses.featureGrid.split(' ')

    assert.ok(classes.includes('grid'))
    assert.ok(classes.includes('md:grid-cols-2'))
    assert.ok(classes.includes('lg:grid-cols-3'))
  })

  test('stacks workflow content until the terminal has enough desktop width', () => {
    const classes = homeLayoutClasses.workflowGrid.split(' ')

    assert.ok(classes.includes('grid'))
    assert.equal(
      classes.some((className) => className.startsWith('md:grid-cols-')),
      false
    )
    assert.ok(
      classes.includes('lg:grid-cols-[minmax(0,0.78fr)_minmax(30rem,1.22fr)]')
    )
  })
})
