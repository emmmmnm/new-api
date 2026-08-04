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
export const homeLayoutClasses = {
  hero: 'relative flex min-h-[calc(100svh-1rem)] items-center overflow-hidden px-6 pt-28 pb-20 md:px-8 md:pt-32 md:pb-24',
  featureGrid: 'grid border-t border-border/60 md:grid-cols-2 lg:grid-cols-3',
  workflowGrid:
    'grid items-start gap-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(30rem,1.22fr)] lg:gap-20',
} as const
