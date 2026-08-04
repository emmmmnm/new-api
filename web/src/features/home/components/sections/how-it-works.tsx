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
import { BarChart3, Settings, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'

import { homeLayoutClasses } from '../../layout'
import { HeroTerminalDemo } from '../hero-terminal-demo'

const STEPS = [
  {
    title: 'Configure',
    description:
      'Add your API keys, set up channels and configure access permissions',
    icon: Settings,
  },
  {
    title: 'Connect',
    description:
      'Connect through OpenAI, Claude, Gemini, and other compatible API routes',
    icon: Zap,
  },
  {
    title: 'Monitor',
    description: 'Track usage, costs and performance with real-time analytics',
    icon: BarChart3,
  },
] as const

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section
      className='home-editorial-section border-border/60 border-b px-6 py-28 md:px-8 md:py-36'
      data-home-section='workflow'
    >
      <div className='mx-auto max-w-7xl'>
        <div className={homeLayoutClasses.workflowGrid}>
          <AnimateInView>
            <p className='text-muted-foreground font-mono text-[10px] tracking-[0.24em] uppercase md:text-xs'>
              {t('How It Works')}
            </p>
            <h2 className='mt-6 font-serif text-[clamp(2.75rem,5vw,5rem)] leading-[0.98] font-semibold tracking-[-0.04em]'>
              {t('Three steps to get started')}
            </h2>
            <p className='text-muted-foreground mt-7 max-w-xl text-sm leading-7 md:text-base'>
              {t(
                'Deploy your own gateway and start routing requests through your configured upstream services.'
              )}
            </p>

            <ol className='border-border/60 mt-12 border-t'>
              {STEPS.map((step, index) => {
                const Icon = step.icon
                return (
                  <li
                    key={step.title}
                    className='border-border/60 grid grid-cols-[2rem_1fr_auto] gap-4 border-b py-6'
                  >
                    <span className='text-muted-foreground font-mono text-xs'>
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className='font-serif text-xl font-semibold'>
                        {t(step.title)}
                      </h3>
                      <p className='text-muted-foreground mt-2 text-sm leading-6'>
                        {t(step.description)}
                      </p>
                    </div>
                    <Icon
                      className='text-muted-foreground size-5'
                      strokeWidth={1.4}
                      aria-hidden='true'
                    />
                  </li>
                )
              })}
            </ol>
          </AnimateInView>

          <AnimateInView animation='scale-in' delay={120}>
            <div className='border-border/60 bg-muted/30 border p-3 shadow-[0_30px_80px_-50px_color-mix(in_oklab,var(--foreground)_35%,transparent)] md:p-5'>
              <HeroTerminalDemo />
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}
