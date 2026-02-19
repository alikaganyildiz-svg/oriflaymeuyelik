'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="flex justify-between items-center w-full py-4 px-2 text-left hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-md font-medium text-gray-900">{question}</span>
                {isOpen ? <ChevronUp size={20} className="text-secondary" /> : <ChevronDown size={20} className="text-gray-400" />}
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-2 pb-4' : 'max-h-0 opacity-0'
                    }`}
            >
                <p className="text-sm text-gray-600 px-2 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Oriflame üyeliği ücretli mi?",
            answer: "Hayır, Oriflame üyeliği tamamen ücretsizdir. Formu doldurduğunuz an kaydınız alınır ve herhangi bir giriş aidatı ödemezsiniz."
        },
        {
            question: "Her ay sipariş verme zorunluluğu var mı?",
            answer: "Hayır, Oriflame'de satış kotası veya zorunlu sipariş yoktur. Kendi ihtiyaçlarınız için indirimli alışveriş yapabilir veya satış yaparak kazanç sağlayabilirsiniz."
        },


        {
            question: "Ürün iadesi yapabilir miyim?",
            answer: "Evet, Oriflame müşteri memnuniyeti garantisi sunar. Kullandığınız ürünler cildinize yaramazsa ürünü iade edebilirsiniz. Renkli kozmetik ve parfümlerde ambalaj açıldığında ürün iadesi kabul edilmemektedir."
        },
        {
            question: "Oriflame ayrıcalıklı müşteri olmanın avantajları nelerdir?",
            answer: "Kayıt olduğunuz an ayrıcalıklı müşteri olarak sisteme dahil olursunuz. Ayrıcalıklı müşterilerin avantajları, sipariş verdiklerinde %15 indirim kazanırsınız. 1000TL üzeri ilk siparişinizde ücretsiz kargo hakkı kazanırsınız ayrıca fatura tutarınızın %15'i kadar para iadesini Oriflame cüzdanınıza iade alırsınız."
        }

    ];

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

export default FAQ;
