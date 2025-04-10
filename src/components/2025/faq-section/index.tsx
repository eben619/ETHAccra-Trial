import React, { useState } from "react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string): void => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqItems: FaqItem[] = [
    {
      id: "item-1",
      question: "What is ETHAccra?",
      answer: "ETHAccra is a community-led hackathon focused on the Ethereum Community."
    },
    {
      id: "item-2",
      question: "Who can attend ETHAccra?",
      answer: "ETHAccra welcomes a diverse range of attendees, specifically catering to university students, developers aiming to delve into blockchain development, seasoned web3 builders, and individuals equipped with skills in areas such as project management or UI/UX."
    },
    {
      id: "item-3",
      question: "I am new to the Ethereum Community, can I participate?",
      answer: "Absolutely! The hackathon is an inclusive space where technical skills, as well as non-technical expertise, are highly valued, making it accessible to both beginners and experienced professionals alike."
    },
    {
      id: "item-4",
      question: "How much does it costs to attend?",
      answer: "ETHAccra is free for hackers."
    },
    {
      id: "item-5",
      question: "Will ETHAccra Offer travel scholarships to participants?",
      answer: "ETHAccra is free-of-charge for hackers thanks to the support of our sponsors. However, unfortunately the event is not able to cover travel or other expenses for attendees at the moment."
    },
    {
      id: "item-6",
      question: "How many people can be on the team?",
      answer: "You can form teams of up to 5 people. There are no restrictions for team members, so you can team up with hackers of any country or experience level!"
    },
    {
      id: "item-7",
      question: "When does the ETHAccra hackathon start?",
      answer: "ETHAccra is a 3-day hackathon that kicks off on 28th of August with onsite, workshops and exclusive networking events to welcome our hackers.\n\nBuilding time starts officially in the morning, on the 29th of August.\n\nProjects will be submitted in the morning on the 31st of August, with the Closing Ceremony and the Afterparty to follow."
    },
    {
      id: "item-8",
      question: "Can i start working on my hacking project before the event?",
      answer: "No. In the interest of fairness, attendees should not be working on their project or ideas prior to the start of ETHAccra and we do not allow participants to work on pre-existing projects. However you may prepare by being acquainted with all of the tools and technologies that you want to use."
    },
    {
      id: "item-9",
      question: "What are the prizes for the winning teams?",
      answer: "The prizes will be announced closer to the event date."
    },
    {
      id: "item-10",
      question: "Is ETHAccra happening in person? Can I participate remotely?",
      answer: "ETHAccra hackathon will take place in an offline form in order to ensure the best possible networking and cooperation. All team members need to be in the venue during the judging process."
    },
    {
      id: "item-11",
      question: "I have a question that is not listed here. Who can I ask?",
      answer: "You can reach out to the ETHAccra's team on Telegram, X or Email."
    }
  ];

  return (
    <div className="bg-pink-100 p-8 md:p-12 lg:p-16">
      {/* FAQ Heading */}
      <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-pink-400 mb-8 md:mb-12 lg:mb-16 ml-4">
        FAQs
      </h1>

      {/* FAQ Items */}
      <div className="space-y-0">
        {faqItems.map((item) => (
          <div key={item.id} className="border-b border-pink-300">
            <div 
              className="flex justify-between items-center py-6 cursor-pointer"
              onClick={() => toggleItem(item.id)}
            >
              <h3 className="text-xl md:text-2xl font-bold text-black ml-4">
                {item.question}
              </h3>
              <button 
                className="text-3xl text-pink-400 font-bold w-8 h-8 flex items-center justify-center mr-4"
                aria-label="Toggle FAQ item"
              >
                +
              </button>
            </div>
            {openItem === item.id && (
              <div className="px-4 pb-6">
                <p className="text-black">
                  {item.answer.split("\n\n").map((paragraph, i) => (
                    <React.Fragment key={i}>
                      {paragraph}
                      {i < item.answer.split("\n\n").length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                {item.id === "item-11" && (
                  <p className="mt-2">
                    You can reach out to the ETHAccra&apos;s team on
                    {" "}
                    <a className="text-orange-500 underline" href="https://t.me/+7ClMFsYpii05NGQ0" target="_blank" rel="noopener noreferrer">Telegram</a>,
                    {" "}
                    <a className="text-orange-500 underline" href="https://twitter.com/ETHAccra" target="_blank" rel="noopener noreferrer">X</a>
                    {" "}
                    or
                    {" "}
                    <a className="text-orange-500 underline" href="mailto:info@ethaccra.xyz">Email</a>.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;