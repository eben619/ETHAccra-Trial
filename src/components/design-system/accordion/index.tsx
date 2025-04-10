import React, {
  Children,
  FC,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import styles from "./acccordion.style.module.scss";
import clsx from "clsx";
import { SvgClose, SvgOpen } from "./icons";

/* Accordion Context */
const AccordionContext = createContext<TAccordionContext>({});

/* Accordion types */
type AccordionType = "2023" | "2024";

type TAccordionHeader = {
  children: React.ReactNode;
};

type TAccordionContent = {
  children: React.ReactNode;
};

type TAccordionItem = {
  value: string;
  children: (React.ReactElement<TAccordionHeader> &
    React.ReactElement<TAccordionContent>)[];
};

type TAccordionRoot = {
  defaultValue: string;
  accordionType?: AccordionType;
  children: React.ReactElement<TAccordionItem>[];
};

interface AccordionComponent extends FC<TAccordionRoot> {
  AccordionHeader: FC<TAccordionHeader>;
  AccordionContent: FC<TAccordionContent>;
  AccordionItem: FC<TAccordionItem>;
}

interface TAccordionContext {
  value?: string;
  accordionType?: AccordionType;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
}


/* Accordion Components */

const AccordionHeader = ({ children }: TAccordionHeader) => {
  return <>{children}</>;
};

const AccordionContent = ({ children }: TAccordionContent) => {
  return <>{children}</>;
};

const AccordionItem = ({ value, children }: TAccordionItem) => {
  const {
    accordionType,
    value: contextValue,
    setValue,
  } = useContext<TAccordionContext>(AccordionContext);
  const contentHeight = useRef<HTMLDivElement>();

  const openAccordion = () => {
    const newState = {
      accordionType,
      value: "",
    };

    if (value === contextValue) {
      setValue && setValue({ ...newState, value: "" });
      return;
    }
    setValue && setValue({ ...newState, value });
  };

  return (
    <div className={styles.accordionWrapper} data-variant={accordionType}>
      {Children.map(
        children[0] as React.ReactElement<TAccordionHeader>,
        (child: React.ReactElement<TAccordionHeader>, index: number) => (
          <button
            className={styles.accordionHeader}
            onClick={openAccordion}
            data-variant={accordionType}
          >
            <>{child.props.children}</>

            <div
              role="button"
              className={styles.accordionIcon}
              data-variant={accordionType}
            >
              {contextValue === value ? (
                <SvgClose variant={accordionType} />
              ) : (
                <SvgOpen variant={accordionType} />
              )}
            </div>
          </button>
        )
      )}

      {Children.map(
        children[1] as React.ReactElement<TAccordionContent>,
        (child: React.ReactElement<TAccordionContent>, index: number) => (
          <div
            ref={contentHeight as React.MutableRefObject<HTMLDivElement>}
            className={clsx(styles.accordionContent, {
              [`h-${contentHeight.current?.scrollHeight} ${styles.active}`]:
                contextValue === value,
              [styles.inActive]: contextValue !== value,
            })}
            data-variant={accordionType}
          >
            {child.props.children}
          </div>
        )
      )}
    </div>
  );
};

const AccordionRoot: AccordionComponent = ({
  children,
  accordionType,
  defaultValue,
}: TAccordionRoot) => {
  const [accordionData, setAccordionData] = useState({
    value: defaultValue || "",
    accordionType: accordionType || "2024",
  });

  return (
    <AccordionContext.Provider
      value={{ ...accordionData, setValue: setAccordionData }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

AccordionRoot.AccordionContent = AccordionContent;
AccordionRoot.AccordionHeader = AccordionHeader;
AccordionRoot.AccordionItem = AccordionItem;

export default AccordionRoot;
