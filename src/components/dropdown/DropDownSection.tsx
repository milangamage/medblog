import React, { useState } from 'react';
import { DROPDOWN_QUESTIONS } from '@/constants/DrodownQuestions';
import DropDownItem from './DrowDownItems';


export default function DropDownSection() {
    const [openId, setOpenId] = useState<number>(1);

    const handleToggle = (id: number) => {
        setOpenId(prevId => (prevId === id ? -1 : id));
    };

    return (
        <section className="padding-container px-44">
            <h2 className="ms-5 font-sans font-normal text-[42px] leading-[76px]">
                FAQ
            </h2>
            <div>
                {DROPDOWN_QUESTIONS.map((item) => (
                    <DropDownItem
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openId === item.id}
                        onToggle={() => handleToggle(item.id)}
                    />
                ))}
            </div>
        </section>
    );
}
