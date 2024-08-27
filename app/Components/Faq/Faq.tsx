"use client";

import React, { useState } from "react";
import "./Faq.css";
import Image from "next/image";

const Faq: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleButton = (id: number) => {
    //opening the question
    setActiveId(activeId === id ? null : id);
  };

  const closeToggle = () => {
    //closing the answer
    setActiveId(null);
  };

  const question = [
    {
      id: 1,
      question: "What is my eligibility to book a car?",
      answer:
        "You should be 18 years old or above, and you must possess a valid driving license.",
    },
    {
      id: 2,
      question: "Can I book for any period of time?",
      answer:
        "You can book for any period of time, subject to availability and terms.",
    },
    {
      id: 3,
      question: "Can I book a one-way trip?",
      answer:
        "Yes, one-way trips are available, but they may have additional charges.",
    },
    {
      id: 4,
      question: "Is there a home delivery option available?",
      answer:
        "Home delivery is available in selected areas. Please check with customer service.",
    },
    {
      id: 5,
      question: "How can I make the payment?",
      answer:
        "You can make the payment online using credit/debit cards or through net banking.",
    },
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq2">
        {question.map((item) => (
          <div className="faq-question" key={item.id}>
            <div className="icons">
              <Image
                src="icons/open.svg"
                className={activeId === item.id ? "hidden" : "open"}
                alt="open icon"
                height={24}
                width={24}
                onClick={() => toggleButton(item.id)}
              />
              <Image
                src="icons/close.svg"
                className={activeId === item.id ? "close" : "hidden"}
                alt="close icon"
                height={24}
                width={24}
                onClick={closeToggle}
              />
            </div>
            <div className="question-header">{item.question}</div>
            <div
              className={`faq-answer ${
                activeId === item.id ? "show" : "hidden"
              }`}
            >
              {item.answer}
            </div>
            {item.id < question.length && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
