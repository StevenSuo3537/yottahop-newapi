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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from '@tanstack/react-router'
import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { api } from '@/lib/api'

import { PrivacyPolicy } from '../privacy-policy'

let queryClient: QueryClient | undefined

afterEach(() => {
  queryClient?.clear()
})

async function renderPolicy(content: string) {
  vi.spyOn(api, 'get').mockImplementation(async (url) => {
    if (url === '/api/privacy-policy') {
      return { data: { success: true, data: content } }
    }
    return { data: { success: true, data: '' } }
  })
  queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  const router = createRouter({
    routeTree: createRootRoute({ component: PrivacyPolicy }),
    history: createMemoryHistory({ initialEntries: ['/'] }),
  })
  await router.load()
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

describe('privacy policy', () => {
  it('shows Singapore processing and dedicated deployment when no admin policy is configured', async () => {
    await renderPolicy('')

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: /Privacy, with a clear view/,
      })
    ).toBeVisible()
    expect(
      screen.getByText(
        /Chinese models currently offered through our standard service run inference in Singapore/
      )
    ).toBeVisible()
    expect(screen.getByText(/enterprise-private deployment/)).toBeVisible()
    expect(
      screen.getByRole('link', { name: 'Contact YottaHop' })
    ).toHaveAttribute(
      'href',
      'mailto:support@yottahop.com?subject=YottaHop%20Privacy%20Enquiry'
    )
  })

  it('shows an administrator policy instead of the default when one is configured', async () => {
    await renderPolicy('## Custom handling terms\n\nOur specific arrangement.')

    expect(
      await screen.findByRole('heading', { name: 'Custom handling terms' })
    ).toBeVisible()
    expect(
      screen.queryByText(
        /Chinese models currently offered through our standard service/
      )
    ).not.toBeInTheDocument()
  })
})
