import Image from 'next/image'

import backgroundImage from '../public/background-faqs.jpg'





const faqs = [
    [
        {
            question: 'What exactly does "Replace you Anything in seconds" mean?',
            answer:
                '"Replace you Anything in seconds" refers to a concept or technology that enables the rapid replacement or updating of items or information. It emphasizes the ability to make changes or substitutions almost instantaneously.',
        },
        {
            question:
                'In which areas can the "Replace you Anything in seconds" concept be applied?',
            answer:
                'This concept can be applied in various fields, such as quickly changing parts in machinery, instantly updating software, or rapidly replacing everyday items. It’s particularly relevant in sectors that prioritize efficiency and speed, like manufacturing, IT, and consumer goods.',
        },
        {
            question:
                'How is "Replace you Anything in seconds" implemented in practice?',
            answer:
                'Implementing this concept typically relies on advanced technologies like automation, efficient logistics systems, or rapid data processing methods. It may involve sophisticated algorithms, high-speed machinery, or innovative materials and processes.',
        },
    ],
    [
        {
            question: 'What impact does "Replace you Anything in seconds" have on everyday life?',
            answer:
                'This concept can significantly enhance efficiency and convenience, reducing waiting times and improving the quality of both life and work. It can lead to faster services, more efficient workflows, and a general increase in productivity.',
        },
        {
            question:
                'What are some potential challenges or risks associated with the "Replace you Anything in seconds" concept?',
            answer:
                'Potential challenges include dependence on precise and advanced technology, the cost of maintenance, and safety risks in certain scenarios. There might also be issues related to data security and privacy, especially when the concept is applied in digital and information technologies.',
        },
        {
            question:
                'How does "Replace you Anything in seconds" contribute to sustainability?',
            answer:
                'The concept could contribute to sustainability by reducing waste through efficient use and reuse of resources. However, it also needs to be managed carefully to avoid increased consumption and waste generation.',
        },
    ],
    [
        {
            question: 'Can "Replace you Anything in seconds" be applied in personal settings, like homes?',
            answer:
                'Yes, this concept can be applied in personal settings. For instance, smart home technologies could allow for instant customization of environments, or kitchen appliances could be designed to rapidly adapt to different cooking needs.',
        },
        {
            question: 'Are there any ethical considerations related to "Replace you Anything in seconds"?',
            answer: 'Ethical considerations might include the impact on employment, as automation and rapid replacement technologies could replace human labor in some sectors. There’s also the need to ensure equitable access to such technologies across different socio-economic groups.',
        },
    ],
]

export default function Faq() {
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
                        Frequently asked questions
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700">
                        If you can’t find what you’re looking for, email our support team
                        and if you’re lucky someone will get back to you.
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
