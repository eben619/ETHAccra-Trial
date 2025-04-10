import React from "react";
import styles from "./faq-section.module.scss";
import { motion } from "framer-motion";
import AccordionRoot from "@/components/design-system/accordion";

const FaqSection2023 = () => {
  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: 0, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <div className={styles.faqSectionContainer}>
        <div className="mb-[3.5625rem]">
          <h1 className={styles.headingText}>Frequently Asked Questions</h1>
        </div>

        <div className="">
          <AccordionRoot defaultValue="item-1" accordionType="2023">
            <AccordionRoot.AccordionItem value="item-1">
              <AccordionRoot.AccordionHeader>
                What is ETHAccra
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                ETHAccra is a community-led hackathon focused on the Ethereum
                Community.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-2">
              <AccordionRoot.AccordionHeader>
                Who can attend ETHAccra?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                ETHAccra welcomes a diverse range of attendees, specifically
                catering to university students, developers aiming to delve into
                blockchain development, seasoned web3 builders, and individuals
                equipped with skills in areas such as project management or
                UI/UX.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-3">
              <AccordionRoot.AccordionHeader>
                I am new to the Ethereum Community, can I participate?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                Absolutely! The hackathon is an inclusive space where technical
                skills, as well as non-technical expertise, are highly valued,
                making it accessible to both beginners and experienced
                professionals alike.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-4">
              <AccordionRoot.AccordionHeader>
                How much does it costs to attend?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                ETHAccra is free for hackers.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-5">
              <AccordionRoot.AccordionHeader>
                Will ETHAccra Offer travel scholarships to participants?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                ETHAccra is free-of-charge for hackers thanks to the support of
                our sponsors. However, unfortunately the event is not able to
                cover travel or other expenses for attendees at the moment.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-6">
              <AccordionRoot.AccordionHeader>
                How many people can be on the team?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                You can form teams of up to 5 people. There are no restrictions
                for team members, so you can team up with hackers of any country
                or experience level!
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-7">
              <AccordionRoot.AccordionHeader>
                When does the ETHAccra hackathon start?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                <div>
                  ETHAccra is a 3-day hackathon that kicks off on 28th of August
                  with onsite, workshops and exclusive networking events to
                  welcome our hackers.
                  <br />
                  <br />
                  Building time starts officially in the morning, on the 29th of
                  August.
                  <br />
                  <br />
                  Projects will be submitted in the morning on the 31st of
                  August, with the Closing Ceremony and the Afterparty to
                  follow.
                </div>
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-8">
              <AccordionRoot.AccordionHeader>
                Can i start working on my hacking project before the event?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                No. In the interest of fairness, attendees should not be working
                on their project or ideas prior to the start of ETHAccra and we
                do not allow participants to work on pre-existing projects.
                However you may prepare by being acquainted with all of the
                tools and technologies that you want to use.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-9">
              <AccordionRoot.AccordionHeader>
                What are the prizes for the winning teams?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                The prizes will be announced closer to the event date.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-10">
              <AccordionRoot.AccordionHeader>
                Is ETHAccra happening in person? Can I participate remotely?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                ETHAccra hackathon will take place in an offline form in order
                to ensure the best possible networking and cooperation. All team
                members need to be in the venue during the judging process.
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>

            <AccordionRoot.AccordionItem value="item-11">
              <AccordionRoot.AccordionHeader>
                I have a question that is not listed here. Who can I ask?
              </AccordionRoot.AccordionHeader>
              <AccordionRoot.AccordionContent>
                <div>
                  You can reach out to the ETHAccra’s team on &nbsp;
                  <a
                    className="text-[#803134] underline"
                    href="https://t.me/+7ClMFsYpii05NGQ0"
                    target="_blank"
                  >
                    Telegram
                  </a>{" "}
                  , &nbsp;
                  <a
                    className="text-[#803134] underline"
                    href="https://twitter.com/ETHAccra"
                    target="_blank"
                  >
                    {" "}
                    X{" "}
                  </a>
                  &nbsp; or &nbsp;
                  <a
                    className="text-[#803134] underline"
                    href="mailto:info@ethaccra.xyz"
                  >
                    {" "}
                    Email{" "}
                  </a>
                  .
                </div>
              </AccordionRoot.AccordionContent>
            </AccordionRoot.AccordionItem>
          </AccordionRoot>
        </div>
      </div>
    </motion.div>
  );
};

export default FaqSection2023;
