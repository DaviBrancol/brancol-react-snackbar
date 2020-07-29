import React from "react";
import { SnackbarProps, Position } from "./SnackbarProps";
import cs from "classnames";

function getPositionProperties(pos: Position) {
  if (pos === Position.bottomLeft) return { bottom: "15px", left: "15px" };
  else if (pos === Position.bottomRight)
    return { bottom: "15px", right: "15px" };
  else if (pos === Position.bottomCenter)
    return { bottom: "15px", right: "50%", transform: "translateX(50%)" };
  else if (pos === Position.topLeft) return { top: "15px", left: "15px" };
  else if (pos === Position.topRight) return { top: "15px", right: "15px" };
  else if (pos === Position.topCenter)
    return { top: "15px", right: "50%", transform: "translateX(50%)" };
}

export function Snackbar({
  message,
  style,
  isOpen,
  setIsOpen,
  icon,
  animationDelay,
  displayIcon,
  displayCloseIcon,
  position,
}: SnackbarProps) {
  return (
    <div
      className={cs(
        `brancol_snackbar z-50 fixed px-6 py-4 text-white flex justify-between items-center rounded-lg shadow-md transition-opacity duration-${animationDelay} bg-${style}-500`,
        {
          "opacity-100": isOpen,
          "opacity-0": !isOpen,
          "w-3/12": displayIcon || displayCloseIcon,
          "w-auto max-w-xs": !displayIcon && !displayCloseIcon,
        }
      )}
      style={getPositionProperties(position)}
    >
      <div className="flex justify-start items-center">
        {displayIcon && <i className={`text-xl text-white ${icon}`} />}
        <p
          className={cs("text-md", {
            "ml-4": displayIcon || displayCloseIcon,
            "ml-0": !displayIcon && !displayCloseIcon,
          })}
        >
          {message}
        </p>
      </div>
      {displayCloseIcon && (
        <i
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-white fa fa-times"
        />
      )}
    </div>
  );
}
