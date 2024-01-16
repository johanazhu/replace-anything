import Image from 'next/image'

import backgroundImage from '../public/background-faqs.jpg'





const faqs = [
    [
        {
            question: 'What is ReplaceAnything and how does it work?',
            answer:
                'ReplaceAnything is a concept or service that allows for the quick and efficient replacement of products, parts, or information. It utilizes advanced technology and systems to ensure that replacements can be made almost instantaneously, either physically or digitally.',
        },
        {
            question:
                'Can ReplaceAnything be used in different industries?',
            answer:
                'Absolutely. ReplaceAnything is versatile and can be applied across various industries, such as technology, automotive, consumer goods, and healthcare. Its applications range from replacing parts in machinery to updating software or even exchanging goods in retail settings.',
        },
        {
            question:
                'What are the benefits of using ReplaceAnything?',
            answer:
                'The main benefits include increased efficiency, time-saving, cost-effectiveness, and convenience. It also promotes sustainability by encouraging the reuse and recycling of parts and products.',
        },
    ],
    [
        {
            question: 'Are there any limitations or challenges with ReplaceAnything?',
            answer:
                'Some challenges might include the initial cost of setting up such a system, ensuring compatibility of replacement parts or products, and maintaining high-quality standards. There may also be logistical challenges in certain regions or industries.',
        },
        {
            question:
                'How does ReplaceAnything handle complex replacements, like in specialized machinery?',
            answer:
                'For complex replacements, ReplaceAnything might use a combination of expert knowledge, advanced diagnostics, and precise manufacturing techniques. This ensures that even specialized or custom parts can be accurately and efficiently replaced.',
        },
        {
            question:
                'Is ReplaceAnything environmentally friendly?',
            answer:
                'ReplaceAnything can be environmentally friendly, especially if it incorporates eco-friendly materials and processes, and focuses on repairing and reusing items instead of disposing of them.',
        },
    ],
    [
        {
            question: 'Can consumers use ReplaceAnything for personal items?',
            answer:
                'Yes, consumers can use ReplaceAnything for a wide range of personal items, from electronics to household appliances, depending on the services offered by the provider.',
        },
        {
            question: 'Does ReplaceAnything integrate with smart technology for automated replacements?',
            answer: 'Yes, ReplaceAnything can integrate with smart technology to automate the replacement process. This could include IoT (Internet of Things) devices that monitor wear and tear and automatically order replacements, or software that updates itself when a new version becomes available.',
        },
        {
            question: 'How does ReplaceAnything ensure the quality of replacements?',
            answer: 'ReplaceAnything typically ensures quality by partnering with certified suppliers and manufacturers, employing rigorous quality control processes, and possibly offering guarantees or warranties on replacement items. Quality assurance is a key component to maintain trust and reliability in such services.',
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
