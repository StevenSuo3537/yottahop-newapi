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
import { Check, ExternalLink, Mail, Minus } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { getLobeIcon } from '@/lib/lobe-icon'

import '@/styles/yottahop-home.css'

const evaluationEmail =
  'mailto:support@yottahop.com?subject=YottaHop%20Token%20Evaluation'

const modelFamilies = [
  { name: 'GLM', icon: 'Zhipu.Color' },
  { name: 'Claude', icon: 'Claude.Color' },
  { name: 'DeepSeek', icon: 'DeepSeek.Color' },
  { name: 'Qwen', icon: 'Qwen.Color' },
  { name: 'Kimi', icon: 'Kimi.Color' },
  { name: 'MiniMax', icon: 'Minimax.Color' },
  { name: 'Gemini', icon: 'Gemini.Color' },
] as const

const journey = [
  {
    number: '01',
    title: 'Choose',
    detail: 'Models and price points',
    text: 'Shortlist the right models for each use case.',
  },
  {
    number: '02',
    title: 'Connect',
    detail: 'One API and account',
    text: 'Integrate once, then expand your options.',
  },
  {
    number: '03',
    title: 'Compare',
    detail: 'Quality, latency and cost',
    text: 'Evaluate trade-offs before you scale.',
  },
  {
    number: '04',
    title: 'Control',
    detail: 'Budgets, routing and keys',
    text: 'Keep usage visible and governed.',
  },
  {
    number: '05',
    title: 'Scale',
    detail: 'Volume pricing and support',
    text: 'Move from testing to production.',
  },
] as const

const comparison = [
  {
    label: 'Supplier relationships',
    direct: 'Separate accounts and agreements',
    yottahop: 'One commercial account',
  },
  {
    label: 'Integration',
    direct: 'Multiple APIs to maintain',
    yottahop: 'One API across model options',
  },
  {
    label: 'Billing',
    direct: 'Fragmented invoices and usage data',
    yottahop: 'Consolidated billing and visibility',
  },
  {
    label: 'Operations',
    direct: 'Manual provider changes',
    yottahop: 'Routing controls and fallback options',
  },
] as const

const questions = [
  {
    question: 'Which models can we access?',
    answer:
      'YottaHop can help evaluate international and Chinese model families. The models available to your organisation depend on the selected provider, deployment and commercial arrangement. We will confirm the current list during your evaluation.',
  },
  {
    question: 'Do we need separate accounts with every model provider?',
    answer:
      'The platform is designed around one YottaHop commercial account and API. Dedicated arrangements may differ, so we will confirm the account structure that fits your requirements.',
  },
  {
    question: 'Can we track spend by team or project?',
    answer:
      'Usage visibility, API keys and limits are part of the platform controls described in our capability brief. The level of reporting and configuration depends on the selected deployment.',
  },
  {
    question: 'Where is our data processed?',
    answer:
      'Processing location, retention and data-handling terms depend on the underlying model provider and deployment option. Tell us your requirements during the evaluation so we can identify suitable options.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Request a Token Evaluation. We will review your use case, model requirements and expected usage, then discuss test access and a suitable commercial setup.',
  },
] as const

export function YottaHopSections() {
  const { t } = useTranslation()

  return (
    <div className='yh-home'>
      <section className='yh-models' aria-labelledby='yh-models-title'>
        <div className='yh-ecosystem-inner'>
          <h2 id='yh-models-title'>{t('Model ecosystem')}</h2>
          <ul className='yh-ecosystem-list' role='list'>
            {modelFamilies.map((model) => (
              <li key={model.name} aria-label={model.name}>
                <span className='yh-ecosystem-icon' aria-hidden='true'>
                  {getLobeIcon(model.icon, 36)}
                </span>
                <span>{model.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className='yh-journey yh-section'
        id='yh-how-it-works'
        aria-labelledby='yh-journey-title'
      >
        <div className='yh-container'>
          <p className='yh-kicker'>02 / {t('HOW IT WORKS')}</p>
          <div className='yh-section-heading yh-section-heading-tight'>
            <h2 id='yh-journey-title'>
              {t('From choice to scale, in one connected workflow.')}
            </h2>
            <p>
              {t(
                'A practical way to evaluate, connect and govern AI model usage as your needs grow.'
              )}
            </p>
          </div>
          <ol className='yh-journey-grid'>
            {journey.map((step) => (
              <li key={step.number}>
                <span className='yh-step-number'>{step.number}</span>
                <div className='yh-step-line' aria-hidden='true' />
                <h3>{t(step.title)}</h3>
                <strong>{t(step.detail)}</strong>
                <p>{t(step.text)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className='yh-comparison yh-section'
        aria-labelledby='yh-comparison-title'
      >
        <div className='yh-container'>
          <div className='yh-section-heading'>
            <div>
              <p className='yh-kicker'>03 / {t('WHY YOTTAHOP')}</p>
              <h2 id='yh-comparison-title'>
                {t('Less supplier complexity. More room to build.')}
              </h2>
            </div>
            <p>
              {t(
                'Keep your team focused on the AI experience, not a growing stack of provider accounts and invoices.'
              )}
            </p>
          </div>
          <div
            className='yh-comparison-table'
            role='table'
            aria-label={t('Compare direct provider management with YottaHop')}
          >
            <div className='yh-comparison-row yh-comparison-head' role='row'>
              <span role='columnheader'>{t('What matters')}</span>
              <span role='columnheader'>
                {t('Managing providers directly')}
              </span>
              <span role='columnheader'>
                <span className='yh-table-logo'>Y</span>
                {t('With YottaHop')}
              </span>
            </div>
            {comparison.map((row) => (
              <div className='yh-comparison-row' role='row' key={row.label}>
                <strong role='rowheader'>{t(row.label)}</strong>
                <span role='cell'>
                  <Minus aria-hidden='true' />
                  {t(row.direct)}
                </span>
                <span role='cell'>
                  <Check aria-hidden='true' />
                  {t(row.yottahop)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className='yh-evaluation yh-section'
        aria-labelledby='yh-evaluation-title'
      >
        <div className='yh-container yh-evaluation-inner'>
          <div>
            <p className='yh-kicker'>04 / {t('NEXT STEP')}</p>
            <h2 id='yh-evaluation-title'>
              {t('Start with a Token Evaluation.')}
            </h2>
            <p>
              {t(
                'Tell us your use case, preferred models and expected usage. We will help you compare options and discuss test access.'
              )}
            </p>
          </div>
          <Button
            size='lg'
            className='yh-button-light'
            render={<a href={evaluationEmail} />}
          >
            <Mail aria-hidden='true' />
            {t('Request an evaluation')}
            <ExternalLink aria-hidden='true' />
          </Button>
        </div>
      </section>

      <section className='yh-faq yh-section' aria-labelledby='yh-faq-title'>
        <div className='yh-container yh-faq-grid'>
          <div>
            <p className='yh-kicker'>05 / {t('FAQ')}</p>
            <h2 id='yh-faq-title'>{t('Good questions, clear answers.')}</h2>
            <p>
              {t('The essentials before you start evaluating models with us.')}
            </p>
          </div>
          <Accordion className='yh-faq-list'>
            {questions.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`}>
                <AccordionTrigger>{t(item.question)}</AccordionTrigger>
                <AccordionContent>{t(item.answer)}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}
