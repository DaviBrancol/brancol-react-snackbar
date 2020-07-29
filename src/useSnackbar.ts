import { useContext } from "react";
import { SnackbarContext } from "./SnackbarProvider";
import { SnackbarProps, SnackbarOptions, Style } from "./SnackbarProps";

export function useSnackbar() {
  const context = useContext<SnackbarProps>(SnackbarContext);
  if (!context) {
    throw new Error(`useSnackbar must be used within a SnackbarProvider`);
  }

  function configure(options: SnackbarOptions) {
    context.setDuration((current: number) => options.duration || current);
    context.setDisplayIcon(
      (current: boolean) => options.displayIcon || current
    );
    context.setStyle((current: Style) => options.style || current);
  }

  function openSnackbar(
    message: string,
    icon: string = null,
    options: SnackbarOptions
  ) {
    configure(options);
    context.setMessage(message);
    context.setIcon(icon);
    context.setIsOpen(true);
    context.setFadeTimeout(
      setTimeout(() => {
        close();
      }, context.duration)
    );
  }

  function open(
    message: string,
    icon: string = null,
    options: SnackbarOptions
  ) {
    if (context.isOpen) {
      clearTimeout(context.fadeTimeout);
      close();
      setTimeout(() => {
        openSnackbar(message, icon, options);
      }, context.animationDelay);
    } else {
      openSnackbar(message, icon, options);
    }
  }

  function close() {
    clearTimeout(context.fadeTimeout);
    context.setIsOpen(false);
  }

  function showSuccess(message: string, options: SnackbarOptions) {
    open(message, "fa fa-check-circle", { ...options, style: Style.success });
  }

  function showWarning(message: string, options: SnackbarOptions) {
    open(message, "fa fa-exclamation-triangle", {
      ...options,
      style: Style.warning,
    });
  }

  function showDanger(message: string, options: SnackbarOptions) {
    open(message, "fa fa-exclamation-circle", {
      ...options,
      style: Style.danger,
    });
  }

  function show(
    message: string,
    icon: string = null,
    options: SnackbarOptions
  ) {
    open(message, icon, { ...options });
  }

  return { showSuccess, showWarning, showDanger, show };
}
