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
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'
import { Button } from '@/components/ui/button'

interface CTAProps {
  className?: string
  isAuthenticated?: boolean
}

export function CTA(props: CTAProps) {
  const { t } = useTranslation()

  return (
    <section
      className='home-editorial-section relative overflow-hidden px-6 py-28 md:px-8 md:py-40'
      data-home-section='cta'
    >
      <div aria-hidden className='home-editorial-dots absolute inset-0' />
      <AnimateInView className='relative mx-auto flex max-w-5xl flex-col items-center text-center'>
        <p className='text-muted-foreground font-mono text-[10px] tracking-[0.24em] uppercase md:text-xs'>
          {t('AI Application Infrastructure Foundation')}
        </p>
        <h2 className='mt-7 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] font-semibold tracking-[-0.055em] text-balance'>
          {t('Ready to simplify')}{' '}
          <span className='text-muted-foreground font-normal italic'>
            {t('your AI integration?')}
          </span>
        </h2>
        <p className='text-muted-foreground mt-8 max-w-xl text-sm leading-7 md:text-base'>
          {t(
            'Deploy your own gateway and start routing requests through your configured upstream services.'
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
        </div>
      </AnimateInView>
    </section>
  )
}
