import React from 'react'
import Accordion from "../component/Accordion.jsx"

function Faq() {
  const faqData = [
    {
        id: 1,
        question: 'What types of jewelry do you sell?',
        answer: 'We offer a wide variety of jewelry including rings, necklaces, bracelets, earrings, and watches. Our collection includes both gold and silver pieces, as well as diamond and gemstone jewelry.'
    },
    {
        id: 2,
        question: 'How do I choose the right ring size?',
        answer: 'To find your perfect ring size, you can use our online ring size guide, or visit any of our stores to get a free size measurement from our experts.'
    },
    {
        id: 3,
        question: 'Do you offer customization services?',
        answer: 'Yes, we offer customization for many of our jewelry pieces. You can add engraving, choose different gemstones, or even design your own custom piece with the help of our jewelry experts.'
    },
    {
        id: 4,
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and online bank transfers.'
    },
    {
        id: 5,
        question: 'Is it safe to buy jewelry online?',
        answer: 'Yes, our website uses SSL encryption to secure your personal and payment information. We also provide a 30-day return policy for all jewelry purchases.'
    },
    {
        id: 6,
        question: 'How do I care for my jewelry?',
        answer: 'To keep your jewelry looking like new, we recommend keeping it away from harsh chemicals, cleaning it with a soft cloth, and storing it in a safe place, like a jewelry box.'
    },
    {
        id: 7,
        question: 'Do you offer free shipping?',
        answer: 'Yes, we offer free shipping on all orders over $50 within the country. International shipping rates vary depending on the location.'
    },
    {
        id: 8,
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for most items, excluding personalized or custom-made jewelry. Please check our return policy for more details.'
    },
    {
        id: 9,
        question: 'How can I track my order?',
        answer: 'Once your order has been shipped, we will send you a tracking number via email. You can use this tracking number on our website to check the status of your delivery.'
    }
];
  return (
    <div className='bg-black'>
     <Accordion faqItems ={faqData} />
    </div>
  )
}

export default Faq
