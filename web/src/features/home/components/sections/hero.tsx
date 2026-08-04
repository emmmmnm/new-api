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
import { Link } from '@tanstack/react-router'
import { ArrowDown, ArrowRight, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'

import { homeLayoutClasses } from '../../layout'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

const SUPPORTED_MODELS = [
  'Claude',
  'GPT',
  'Gemini',
  'DeepSeek',
  'Qwen',
  'Llama',
] as const

const SUPPORTED_APPLICATIONS = [
  'Cherry Studio',
  'Claude Code',
  'Codex CLI',
  'Cline',
  'Cursor',
] as const

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const docsAreExternal = docsUrl.startsWith('http')

  return (
    <section className={homeLayoutClasses.hero} data-home-section='hero'>
      <div aria-hidden className='home-editorial-dots absolute inset-0' />
      <div className='relative mx-auto flex w-full max-w-7xl flex-col items-center text-center'>
        <div className='text-muted-foreground mb-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.18em] uppercase md:mb-16 md:text-xs'>
          {SUPPORTED_MODELS.map((model) => (
            <span key={model}>{model}</span>
          ))}
        </div>

        <p className='border-border/70 text-muted-foreground mb-6 border-y py-2 text-[10px] font-semibold tracking-[0.22em] uppercase md:text-xs'>
          {t('AI Application Infrastructure Foundation')}
        </p>

        <h1 className='max-w-6xl font-serif text-[clamp(3.5rem,9.5vw,8.75rem)] leading-[0.9] font-semibold tracking-[-0.065em] text-balance'>
          <span className='block'>{t('Unified API Gateway for')}</span>
          <span className='text-muted-foreground mt-2 block font-normal italic'>
            {t('Vast Range of AI Models')}
          </span>
        </h1>

        <p className='text-muted-foreground mt-9 max-w-2xl text-sm leading-7 text-pretty md:text-base'>
          {t(
            'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
          )}
        </p>

        <div className='mt-9 flex flex-wrap items-center justify-center gap-3'>
          <Button
            size='lg'
            className='group h-12 rounded-full px-6'
            render={
              <Link to={props.isAuthenticated ? '/dashboard' : '/sign-up'} />
            }
          >
            {props.isAuthenticated ? t('Go to Dashboard') : t('Get Started')}
            <ArrowRight
              data-icon='inline-end'
              className='transition-transform group-hover:translate-x-0.5'
            />
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='h-12 rounded-full px-6'
            render={<Link to='/pricing' />}
          >
            {t('View Pricing')}
          </Button>
          {docsAreExternal ? (
            <Button
              size='lg'
              variant='ghost'
              className='h-12 rounded-full px-5'
              render={
                <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
              }
            >
              <BookOpen data-icon='inline-start' />
              {t('Docs')}
            </Button>
          ) : (
            <Button
              size='lg'
              variant='ghost'
              className='h-12 rounded-full px-5'
              render={<Link to={docsUrl} />}
            >
              <BookOpen data-icon='inline-start' />
              {t('Docs')}
            </Button>
          )}
        </div>

        <div className='text-muted-foreground mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] md:text-xs'>
          <span className='font-mono tracking-[0.18em] uppercase'>
            {t('Supported Applications')}
          </span>
          {SUPPORTED_APPLICATIONS.map((application) => (
            <span key={application} className='flex items-center gap-4'>
              <span aria-hidden='true'>·</span>
              <span>{application}</span>
            </span>
          ))}
        </div>

        <a
          href='#core-features'
          aria-label={t('Core Features')}
          className='border-border text-muted-foreground hover:text-foreground mt-16 flex h-11 w-7 items-start justify-center rounded-full border pt-2 transition-colors md:absolute md:-bottom-6'
        >
          <ArrowDown className='size-3.5' aria-hidden='true' />
        </a>
      </div>
    </section>
  )
}
