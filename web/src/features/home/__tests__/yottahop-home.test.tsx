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
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { api } from '@/lib/api'
import { useSystemConfigStore } from '@/stores/system-config-store'

import { Home } from '../index'

let queryClient: QueryClient

beforeEach(() => {
  localStorage.removeItem('home_page_content')
  useSystemConfigStore.setState(useSystemConfigStore.getInitialState(), true)
  queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  vi.spyOn(api, 'get').mockImplementation(async (url) => {
    if (url === '/api/home_page_content') {
      return { data: { success: true, data: '' } }
    }
    if (url === '/api/notice') {
      return { data: { success: true, data: '' } }
    }
    if (url === '/api/status') {
      return {
        data: {
          success: true,
          data: {
            api_info_enabled: false,
            announcements_enabled: false,
            faq_enabled: false,
          },
        },
      }
    }
    throw new Error(`Unexpected home page request: ${url}`)
  })
})

afterEach(() => {
  queryClient.clear()
  localStorage.removeItem('home_page_content')
  useSystemConfigStore.setState(useSystemConfigStore.getInitialState(), true)
})

async function renderHome() {
  const router = createRouter({
    routeTree: createRootRoute({ component: Home }),
    history: createMemoryHistory({ initialEntries: ['/'] }),
  })
  await router.load()
  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

describe('YottaHop home', () => {
  it('keeps the existing hero and footer around the new sections when default content loads', async () => {
    await renderHome()

    const hero = await screen.findByRole('heading', {
      level: 1,
      name: /Unified API Gateway for/,
    })
    const models = screen.getByRole('heading', {
      name: 'Model ecosystem',
    })
    const footer = screen.getByRole('contentinfo')

    expect(hero.compareDocumentPosition(models)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    )
    expect(models.compareDocumentPosition(footer)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING
    )
    expect(
      screen.getByRole('heading', {
        name: 'From choice to scale, in one connected workflow.',
      })
    ).toBeVisible()
    expect(
      screen.getByRole('heading', {
        name: 'Less supplier complexity. More room to build.',
      })
    ).toBeVisible()
    expect(
      screen.getByRole('heading', { name: 'Start with a Token Evaluation.' })
    ).toBeVisible()
    expect(
      screen.getByRole('heading', { name: 'Good questions, clear answers.' })
    ).toBeVisible()
    expect(
      screen.getByRole('button', { name: /Request an evaluation/ })
    ).toHaveAttribute(
      'href',
      'mailto:support@yottahop.com?subject=YottaHop%20Token%20Evaluation'
    )
  })

  it('shows the seven requested model brands in the ecosystem strip', async () => {
    await renderHome()

    const ecosystem = await screen.findByRole('region', {
      name: 'Model ecosystem',
    })
    const models = within(ecosystem).getAllByRole('listitem')

    const names = [
      'GLM',
      'Claude',
      'DeepSeek',
      'Qwen',
      'Kimi',
      'MiniMax',
      'Gemini',
    ]
    names.forEach((name, index) => {
      expect(models[index]).toHaveAccessibleName(name)
    })
    expect(within(ecosystem).queryByText('OpenAI')).not.toBeInTheDocument()
  })

  it('reveals the data-processing answer when its FAQ question is activated', async () => {
    const user = userEvent.setup()
    await renderHome()
    await screen.findByRole('heading', {
      name: 'Good questions, clear answers.',
    })

    const question = screen.getByRole('button', {
      name: 'Where is our data processed?',
    })
    expect(question).toHaveAttribute('aria-expanded', 'false')

    await user.click(question)

    await waitFor(() =>
      expect(question).toHaveAttribute('aria-expanded', 'true')
    )
    expect(
      screen.getByText(
        /Processing location, retention and data-handling terms depend/
      )
    ).toBeVisible()
  })
})
