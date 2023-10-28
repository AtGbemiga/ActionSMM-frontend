"use client";
import React, { useState } from "react";
import styles from "./fAQ.module.css";

interface FaqItemProps {
  title: string;
  content: string;
}

interface Item extends FaqItemProps {
  isOpen: boolean;
}

const FaqItem: React.FC<
  FaqItemProps & { isOpen: boolean; onClick: () => void }
> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`${styles.faqItem}`}>
      <div
        className={`d-flex align-items-center ${styles.faqTitle}`}
        onClick={onClick}
      >
        <h4 className="me-auto p-0 m-0">{title}</h4>
        {isOpen ? (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
        ) : (
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </span>
        )}
      </div>
      {isOpen && (
        <div className={`${styles.faqContent}`}>
          <h5>{content}</h5>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    {
      title: "What is ActionSMM?",
      content:
        "ActionSMM is a social media service that offers a variety of plans. You can get performance stats alongside other plan features without a single commercial – all for one low monthly price. \n\n There's always something new to implement!",
      isOpen: false,
    },
    {
      title: "What do I benefit?(doubted question)",
      content: "Content for Item 4",
      isOpen: false,
    },
    {
      title: "How do I cancel?",
      content:
        "ActionSMM is flexible. There are no pesky contracts and no commitments. You can easily cancel your plan online in two clicks. There are no cancellation fees – start or stop your plan anytime.",
      isOpen: false,
    },
  ]);

  const toggleItem = (index: number) => {
    const newItems = items.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false,
    }));
    setItems(newItems);
  };

  return (
    <div className="faq">
      <h3 className="text-center pt-4 pb-3">Frequently Asked Questions</h3>
      {items.map((item, index) => (
        <FaqItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
