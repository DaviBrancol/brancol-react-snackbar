import { ReactNode } from "react";

export interface SnackbarProviderProps {
  defaultPosition: string;
  defaultDisplayDuration: number;
  defaultAnimationDelay: number;
  showIcon: boolean;
  showCloseIcon: boolean;
  children: ReactNode;
  render: Function;
}

export interface SnackbarOptions {
  duration: number;
  animationDelay: number;
  position: Position;
  displayIcon: boolean;
  displayCloseIcon: boolean;
  style: Style;
}

export interface SnackbarProps {
  isOpen: boolean;
  setIsOpen: Function;
  isAnimating: boolean;
  setIsAnimating: Function;
  duration: number;
  setDuration: Function;
  animationDelay: number;
  setAnimationDelay: Function;
  position: Position;
  setPosition: Function;
  message: string;
  setMessage: Function;
  fadeTimeout: ReturnType<typeof setTimeout>;
  setFadeTimeout: Function;
  displayIcon: boolean;
  setDisplayIcon: Function;
  icon: string;
  setIcon: Function;
  displayCloseIcon: boolean;
  setDisplayCloseIcon: Function;
  style: Style;
  setStyle: Function;
}

export enum Position {
  bottomLeft = "bl",
  bottomRight = "br",
  bottomCenter = "bc",
  topLeft = "tl",
  topRight = "tr",
  topCenter = "tc",
}

export function getPosition(pos: string): Position {
  if (pos === "bl") return Position.bottomLeft;
  else if (pos === "br") return Position.bottomRight;
  else if (pos === "bc") return Position.bottomCenter;
  else if (pos === "tl") return Position.topLeft;
  else if (pos === "tr") return Position.topRight;
  else if (pos === "tc") return Position.topCenter;
  else return null;
}

export enum Style {
  success = "success",
  danger = "danger",
  warning = "warning",
}
