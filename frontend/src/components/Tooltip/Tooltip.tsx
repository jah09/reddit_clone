import React, { useState, useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
interface TooltipProps {
  content: string;
  children: React.ReactNode;
  place?: "top" | "right" | "bottom" | "left" | "bottom-end";
  className?: string;
  style?: React.CSSProperties;
}
const Tooltip = ({
  content,
  children,
  place = "bottom",
  className,
  style,
}: TooltipProps) => {
  const [tooltipId] = useState(
    `tooltip-${Math.random().toString(36).substr(2, 9)}`,
  );
  const ref = useRef(null);

  return (
    <>
      <span data-tooltip-id={tooltipId} ref={ref}>
        {children}
      </span>
      <ReactTooltip
        id={tooltipId}
        place={place}
        className={className}
        style={style}
        // anchorSelect={ref} // Ensure the tooltip is attached to the child
      >
        {content}
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
