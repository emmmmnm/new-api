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
import { renderToStaticMarkup } from 'react-dom/server'

import { SidebarProvider } from '@/components/ui/sidebar'

import { Header } from '../header'

describe('authenticated editorial shell', () => {
  test('keeps the application header on the paper-surface hierarchy', () => {
    const window = new Window()
    window.document.body.innerHTML = renderToStaticMarkup(
      <SidebarProvider>
        <Header>
          <span>Application</span>
        </Header>
      </SidebarProvider>
    )

    const header = window.document.querySelector('header')
    assert.ok(header)
    assert.equal(header.classList.contains('bg-background/95'), true)
    assert.equal(header.classList.contains('border-b'), true)
    assert.equal(header.classList.contains('backdrop-blur'), true)
    window.close()
  })
})
