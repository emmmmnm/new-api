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
import {
  Braces,
  DollarSign,
  Gauge,
  Globe,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'

import { homeLayoutClasses } from '../../layout'

const PROMISES = [
  { title: 'Secure & Reliable', icon: ShieldCheck },
  { title: 'Multi-protocol Compatible', icon: Braces },
  { title: 'Transparent Billing', icon: Scale },
  { title: 'Lightning Fast', icon: Zap },
] as const

const FEATURES = [
  {
    title: 'Lightning Fast',
    label: 'High Performance',
    description:
      'Optimized network architecture ensures millisecond response times',
    icon: Gauge,
  },
  {
    title: 'Secure & Reliable',
    label: 'Secure & Reliable',
    description:
      'Enterprise-grade security with comprehensive permission management',
    icon: ShieldCheck,
  },
  {
    title: 'Global Coverage',
    label: 'Global Coverage',
    description: 'Multi-region deployment for stable global access',
    icon: Globe,
  },
  {
    title: 'Developer Friendly',
    label: 'Developer Friendly',
    description: 'Compatible API routes for common AI application workflows',
    icon: Braces,
  },
  {
    title: 'Transparent Billing',
    label: 'Transparent Billing',
    description: 'Pay-as-you-go with real-time usage monitoring',
    icon: DollarSign,
  },
  {
    title: 'Open Source',
    label: 'Team Collaboration',
    description: 'Community driven, self-hosted, and extensible',
    icon: HeartHandshake,
  },
] as const

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  return (
    <section
      id='core-features'
      className='home-editorial-section border-border/60 border-t px-6 py-28 md:px-8 md:py-36'
      data-home-section='features'
    >
      <div className='mx-auto max-w-7xl'>
        <AnimateInView className='mx-auto max-w-4xl text-center'>
          <p className='text-muted-foreground font-mono text-[10px] tracking-[0.24em] uppercase md:text-xs'>
            {t('Core Features')}
          </p>
          <h2 className='mt-6 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance'>
            {t('Built for developers,')}{' '}
            <span className='text-muted-foreground font-normal italic'>
              {t('designed for scale')}
            </span>
          </h2>
          <div className='text-muted-foreground mx-auto mt-10 flex max-w-2xl flex-col gap-5 text-sm leading-7 text-pretty md:text-base'>
            <p>
              {t(
                'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
              )}
            </p>
            <p>
              {t(
                'Enterprise-grade security with comprehensive permission management'
              )}
              <span aria-hidden='true'> · </span>
              {t('Pay-as-you-go with real-time usage monitoring')}
            </p>
          </div>
        </AnimateInView>

        <div className='border-border/60 mt-16 grid border-y sm:grid-cols-2 lg:grid-cols-4'>
          {PROMISES.map((promise, index) => {
            const Icon = promise.icon
            return (
              <div
                key={promise.title}
                className='border-border/60 flex items-center justify-center gap-3 border-b px-4 py-5 text-center text-xs font-semibold last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0 sm:[&:nth-child(n+3)]:border-b-0 sm:[&:nth-child(odd)]:border-r'
              >
                <Icon className='size-4' strokeWidth={1.6} aria-hidden='true' />
                <span>{t(promise.title)}</span>
                <span className='text-muted-foreground font-mono text-[9px]'>
                  0{index + 1}
                </span>
              </div>
            )
          })}
        </div>

        <div className='mt-28 md:mt-36'>
          <div className='mb-12 max-w-2xl'>
            <p className='text-muted-foreground font-mono text-[10px] tracking-[0.24em] uppercase md:text-xs'>
              {t('Core Features')}
            </p>
            <h3 className='mt-5 font-serif text-4xl leading-tight font-semibold tracking-tight md:text-6xl'>
              {t('Powerful API Management Platform')}
            </h3>
          </div>

          <div className={homeLayoutClasses.featureGrid}>
            {FEATURES.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimateInView
                  key={feature.title}
                  delay={index * 70}
                  className='border-border/60 group border-b p-7 md:min-h-64 md:border-r md:p-9 lg:[&:nth-child(3n)]:border-r-0'
                >
                  <div className='flex items-start justify-between gap-6'>
                    <span className='text-muted-foreground font-mono text-xs'>
                      0{index + 1}
                    </span>
                    <Icon
                      className='text-muted-foreground size-5 transition-transform duration-300 group-hover:-translate-y-1'
                      strokeWidth={1.4}
                      aria-hidden='true'
                    />
                  </div>
                  <p className='text-muted-foreground mt-12 font-mono text-[10px] tracking-[0.18em] uppercase'>
                    {t(feature.label)}
                  </p>
                  <h4 className='mt-3 font-serif text-2xl font-semibold'>
                    {t(feature.title)}
                  </h4>
                  <p className='text-muted-foreground mt-4 max-w-sm text-sm leading-6'>
                    {t(feature.description)}
                  </p>
                </AnimateInView>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
