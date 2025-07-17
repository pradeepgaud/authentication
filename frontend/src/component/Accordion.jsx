import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function FAQAccordion({faqItems }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };  

    // Dynamic data for FAQ items related to Jewelry eCommerce
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2 bg-ivory">
            <div className="space-y-4">
                <div className='text-center text-white'>
                  <h1 className='text-6xl mt-4'>Do you have any question</h1>
                  <p className='text-xl mt-8 '>Our support team ready to help you, please contact with them</p>
                </div>
                {/* Iterate through the faqItems array */}
                {faqItems.map((item) => (
                    <div key={item.id}>
                        <div
                            className="border-b-2 mt-8  border-white flex p-6 text-white bg-[#000000] justify-between items-center py-3 cursor-pointer font-[400] text-[22px] "
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <h3 className="font-[400] text-[22px]">{item.question}</h3>
                            <span className="font-[400] text-[22px]">{openIndex === item.id ? '-' : '+'}</span>
                        </div>

                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: openIndex === item.id ? 'auto' : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="p-4 border-black border-[1px] text-lg text-white">
                                {item.answer}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default FAQAccordion;