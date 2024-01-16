import Image from 'next/image'

import backgroundImage from '../public/background-faqs.jpg'



const faqs = [
    [
        {
            question: 'ReplaceAnything 是什么，它是如何工作的？',
            answer:
                'ReplaceAnything 是一个概念或服务，它允许快速高效地替换产品、部件或信息。它利用先进的技术和系统确保可以几乎瞬间进行物理或数字替换。',
        },
        {
            question:
                'ReplaceAnything 可以应用于不同的行业吗？',
            answer:
                '当然可以。ReplaceAnything 很灵活，可以应用于各种行业，如技术、汽车、消费品和医疗保健等。其应用范围从更换机械零件到更新软件，甚至在零售设置中交换商品。',
        },
        {
            question:
                '使用 ReplaceAnything 有什么好处？',
            answer:
                '主要好处包括提高效率、节省时间、成本效益和便利性。它还通过鼓励部件和产品的重用和回收来促进可持续性。',
        },
    ],
    [
        {
            question: 'ReplaceAnything 有什么局限性或挑战吗？',
            answer:
                '一些挑战可能包括建立这样一个系统的初始成本，确保替换部件或产品的兼容性，并保持高质量标准。在某些地区或行业中也可能存在物流挑战。',
        },
        {
            question:
                'ReplaceAnything 如何处理专业机械等复杂替换？',
            answer:
                '对于复杂的替换，ReplaceAnything 可能会使用专家知识、先进的诊断和精确的制造技术的组合。这确保即使是专业或定制的部件也可以准确、高效地被替换。',
        },
        {
            question:
                'ReplaceAnything 对环境友好吗？',
            answer:
                'ReplaceAnything 可以是环保的，特别是如果它包含环保材料和过程，并专注于修理和重复使用物品，而不是丢弃它们。',
        },
    ],
    [
        {
            question: '消费者可以用 ReplaceAnything 替换个人物品吗？',
            answer:
                '是的，消费者可以使用 ReplaceAnything 替换广泛的个人物品，从电子产品到家用电器，这取决于提供商提供的服务。',
        },
        {
            question: 'ReplaceAnything 是否与智能技术集成，以实现自动化替换？',
            answer: '是的，ReplaceAnything 可以与智能技术集成，以自动化替换过程。这可能包括监控磨损并自动订购替换部件的物联网（IoT）设备，或在新版本可用时自动更新自己的软件。',
        },
        {
            question: 'ReplaceAnything 如何确保替换品的质量？',
            answer: 'ReplaceAnything 通常通过与认证的供应商和制造商合作，执行严格的质量控制流程，并可能提供替换项目的保证或保修来确保质量。质量保证是维护此类服务中的信任和可靠性的关键组成部分。',
        },
    ],
]

export default function CnFaq() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden py-20 sm:py-32"
        >
            <Image
                className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
                src={backgroundImage}
                alt=""
                width={1558}
                height={946}
                unoptimized
            />
            <div className="relative bg-background px-8 pt-9 pb-7 w-full mt-4 mb-12">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        丹青-千变万换 常见问题
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        如果您找不到您要找的内容，请发送电子邮件给我们的支持团队，如果您很幸运，有人会回复您。
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
