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
import { useTranslation } from 'react-i18next'

const copy = {
  en: {
    eyebrow: 'YOTTAHOP · PRIVACY',
    title: 'Privacy, with a clear view of where your data goes.',
    intro:
      'YottaHop provides a gateway to AI models. This page explains the information we handle, where model requests are processed, and the options available when data residency matters to your organisation.',
    updated: 'Last updated: 13 September 2026',
    summary: [
      {
        label: 'Chinese models',
        text: 'Inference currently takes place in Singapore. Your request data is sent there to generate a response.',
      },
      {
        label: 'International models',
        text: 'We work with Australian cloud partners to offer model access, commercial pricing and local technical support. Processing location depends on the selected model and provider.',
      },
      {
        label: 'Dedicated options',
        text: 'For suitable open-source models, we can help arrange deployment in Australia or within your enterprise environment.',
      },
    ],
    sections: [
      {
        title: 'Information we handle',
        paragraphs: [
          'When you use our services, we may handle account and contact details, billing and usage information, support correspondence, and the prompts, files or other content you submit to an AI model through our gateway. Model responses pass back through the gateway to you.',
          'Please avoid including personal or sensitive information in model requests unless it is necessary for your use case and you have the authority to provide it.',
        ],
      },
      {
        title: 'How we use information',
        paragraphs: [
          'We use account, billing and usage information to provide access, administer accounts, calculate charges, support customers and protect the service. We route model requests and responses only to deliver the service you ask for.',
          'Our gateway does not store your model request content for unrelated purposes, such as marketing, resale or training our own models. Operational records, such as usage and billing metadata, may be retained to run the service and meet applicable obligations. If diagnostic logging is enabled, request content may appear in logs for troubleshooting. A model or infrastructure provider may handle request content under its own service terms; we will help you understand the applicable arrangement before you select a deployment.',
        ],
      },
      {
        title: 'Where model requests are processed',
        paragraphs: [
          'Chinese models currently offered through our standard service run inference in Singapore. Using one of these models means the content of your request is transmitted to Singapore for processing, even if you access YottaHop from Australia.',
          'For international models, we work with Australian cloud partners and pass on competitive pricing alongside hands-on technical support. An Australian commercial partner does not, by itself, mean every request is processed or stored in Australia. The location depends on the model, infrastructure and configuration selected for your account. Ask us for the specific location and provider terms before sending regulated or location-restricted data.',
        ],
      },
      {
        title: 'Our suppliers and security commitments',
        paragraphs: [
          'We work to put appropriate data security and handling terms in place with the suppliers that process requests for us, including terms addressing the permitted use and protection of customer data. We also use reasonable technical and organisational measures to protect information handled by our gateway.',
          'No deployment choice should be assumed to satisfy a particular regulatory or contractual requirement without reviewing the selected provider, location and terms with us.',
        ],
      },
      {
        title: 'Australian and private deployment options',
        paragraphs: [
          'If your organisation needs Australian data residency for an open-source model, or wants an enterprise-private deployment, contact us. We can help scope and implement a suitable dedicated arrangement. Availability, controls and pricing depend on the model and your requirements; these options are not the default for every model.',
        ],
      },
      {
        title: 'Access, correction and questions',
        paragraphs: [
          'You can contact us to ask about the personal information we hold about you, request a correction, or raise a privacy concern. We will respond in accordance with applicable law. If a concern remains unresolved, you may be able to contact the Office of the Australian Information Commissioner.',
          'We may update this page when our services or handling practices change. The date above shows when this version was last updated.',
        ],
      },
    ],
    contactTitle: 'Talk to us about your data requirements',
    contactText:
      'Tell us which models you plan to use and where your data must remain. We can explain the available processing locations and dedicated deployment options.',
    contactLink: 'Contact YottaHop',
  },
  zh: {
    eyebrow: 'YOTTAHOP · 隐私',
    title: '清楚说明您的数据会去哪里。',
    intro:
      'YottaHop 提供 AI 模型接入网关。本页说明我们处理哪些信息、模型请求在哪里处理，以及有数据驻留要求时可选择的部署方式。',
    updated: '最后更新：2026 年 9 月 13 日',
    summary: [
      {
        label: '中国模型',
        text: '目前在新加坡进行推理。为生成响应，您的请求数据需要传输至新加坡。',
      },
      {
        label: '海外模型',
        text: '我们与澳洲本地云服务合作伙伴合作，提供模型接入、商业价格和本地技术支持。实际处理地点取决于所选模型和供应商。',
      },
      {
        label: '专属部署',
        text: '对于合适的开源模型，我们可以协助在澳洲本地或您的企业环境中部署。',
      },
    ],
    sections: [
      {
        title: '我们处理的信息',
        paragraphs: [
          '使用服务时，我们可能处理账户和联系信息、账单与使用量信息、客服沟通内容，以及您通过网关提交给 AI 模型的提示词、文件或其他内容。模型响应也会经网关返回给您。',
          '除非业务确有需要且您有权提供，请避免在模型请求中加入个人或敏感信息。',
        ],
      },
      {
        title: '信息的使用方式',
        paragraphs: [
          '我们使用账户、账单和使用量信息提供接入、管理账户、计算费用、支持客户和保护服务。模型请求和响应仅为交付您所请求的服务而路由。',
          '我们的网关不会为了营销、转售或训练自有模型等无关用途存储您的模型请求内容。为运营服务及履行适用义务，我们可能保留使用量和账单等运营元数据。如启用诊断日志，请求内容可能会出现在用于排查问题的日志中。模型或基础设施供应商可能依据其服务条款处理请求内容；在您选择部署方案前，我们可以协助说明具体安排。',
        ],
      },
      {
        title: '模型请求在哪里处理',
        paragraphs: [
          '标准服务中的中国模型目前在新加坡进行推理。使用这些模型意味着请求内容会被传输至新加坡处理，即使您从澳洲访问 YottaHop 也是如此。',
          '对于海外模型，我们与澳洲本地云服务合作伙伴合作，以提供更有竞争力的价格和贴近客户的技术支持。但澳洲本地商业合作关系并不代表所有请求一定在澳洲处理或存储。具体地点取决于您账户所选的模型、基础设施和配置。如需处理受监管或受地域限制的数据，请先向我们确认具体地点和供应商条款。',
        ],
      },
      {
        title: '供应商与安全承诺',
        paragraphs: [
          '我们正与处理客户请求的供应商落实适当的数据安全和处理条款，涵盖客户数据的允许用途与保护要求。我们也采取合理的技术及组织措施保护网关处理的信息。',
          '任何部署方式是否满足特定法规或合同要求，都应结合所选供应商、处理地点和协议条款进行评估。',
        ],
      },
      {
        title: '澳洲本地及企业私有化部署',
        paragraphs: [
          '如果您的组织要求开源模型在澳洲本地处理数据，或希望企业私有化部署，请联系我们。我们可以协助规划和实施合适的专属方案。可用性、控制措施及价格取决于模型和具体需求；这些并非所有模型的默认部署方式。',
        ],
      },
      {
        title: '查阅、更正及咨询',
        paragraphs: [
          '您可以联系我们查询我们持有的您的个人信息、申请更正或提出隐私方面的疑虑。我们会按照适用法律处理。如问题仍未解决，您可能可以联系澳大利亚信息专员办公室。',
          '服务或数据处理方式发生变化时，我们可能更新本页。上方日期为本版本的最后更新时间。',
        ],
      },
    ],
    contactTitle: '和我们讨论您的数据要求',
    contactText:
      '告诉我们您计划使用的模型，以及数据必须保留在哪里。我们可以说明可用的处理地点和专属部署方案。',
    contactLink: '联系 YottaHop',
  },
} as const

export function PrivacyContent() {
  const { i18n } = useTranslation()
  const content = i18n.language.toLowerCase().startsWith('zh')
    ? copy.zh
    : copy.en

  return (
    <div className='mx-auto max-w-5xl pt-12 pb-20 md:pt-20'>
      <header className='border-border max-w-3xl border-b pb-10'>
        <p className='text-primary text-xs font-bold tracking-[0.18em] uppercase'>
          {content.eyebrow}
        </p>
        <h1 className='mt-5 text-4xl font-semibold tracking-tight text-balance md:text-5xl'>
          {content.title}
        </h1>
        <p className='text-muted-foreground mt-6 text-lg leading-8'>
          {content.intro}
        </p>
        <p className='text-muted-foreground mt-6 text-sm'>{content.updated}</p>
      </header>

      <section
        aria-label={
          i18n.language.toLowerCase().startsWith('zh')
            ? '处理地点摘要'
            : 'Processing locations at a glance'
        }
        className='grid gap-4 py-10 md:grid-cols-3'
      >
        {content.summary.map((item) => (
          <div
            key={item.label}
            className='bg-card border-border rounded-xl border p-6 shadow-sm'
          >
            <h2 className='text-base font-semibold'>{item.label}</h2>
            <p className='text-muted-foreground mt-3 text-sm leading-6'>
              {item.text}
            </p>
          </div>
        ))}
      </section>

      <div className='mx-auto max-w-3xl space-y-12 py-6'>
        {content.sections.map((section) => (
          <section key={section.title} className='border-border border-t pt-8'>
            <h2 className='text-2xl font-semibold tracking-tight'>
              {section.title}
            </h2>
            <div className='text-muted-foreground mt-4 space-y-4 leading-7'>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className='bg-muted/60 border-border mx-auto mt-14 max-w-3xl rounded-2xl border p-7 md:p-9'>
        <h2 className='text-xl font-semibold'>{content.contactTitle}</h2>
        <p className='text-muted-foreground mt-3 leading-7'>
          {content.contactText}
        </p>
        <a
          className='text-primary mt-5 inline-flex font-semibold underline underline-offset-4'
          href='mailto:support@yottahop.com?subject=YottaHop%20Privacy%20Enquiry'
        >
          {content.contactLink}
        </a>
      </aside>
    </div>
  )
}
