import React from "react";

interface SectionTitleProps {
  children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return React.cloneElement(children, {
    className: `${(children.props as { className?: string })?.className || ''} text-3xl lg:text-5xl lg:leading-tight font-bold`
  } as React.HTMLAttributes<HTMLElement>);
};

export default SectionTitle;