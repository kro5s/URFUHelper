import React, {useState} from "react";

interface QuestionProps {
    question: string;
    answer: string;
    className?: string;
    dark?: boolean
}

const Question: React.FC<QuestionProps> = ({question, answer, className, dark}) => {
    const [opened, setOpened] = useState(false);

    const handleAnswerOpen = () => {
        setOpened(!opened)
    }

    return (
        <div onClick={handleAnswerOpen}
             className={`text-left cursor-pointer pb-6 border-b ${dark ? "border-primary-black/[0.2]" : "border-white/[0.2]"} ${className ? className : ''}`}>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-xl">{question}</span>
                <svg className={opened ? "-rotate-180 transition" : 'transition'} width="15" height="8"
                     viewBox="0 0 15 8"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.545952 0.0480448C0.0986585 0.175201 -0.131664 0.696236 0.0786304 1.10562C0.148729 1.24518 6.69457 7.70847 6.87816 7.82012C7.01836 7.90696 7.34548 8 7.49903 8C7.65258 8 7.97971 7.90696 8.1199 7.82012C8.30349 7.70847 14.8493 1.24518 14.9194 1.10562C15.0696 0.810987 15.0062 0.457427 14.7592 0.231027C14.4888 -0.0201852 15.103 -0.00157741 7.48568 0.00152397C1.59075 0.00152397 0.686149 0.00772684 0.545952 0.0480448Z"
                        fill={dark ? "#303030" : "white"}/>
                </svg>
            </div>
            {
                opened && <p className="mt-4">{answer}</p>
            }
        </div>
    );
}

export default Question;