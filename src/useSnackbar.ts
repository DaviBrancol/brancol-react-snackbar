import { useContext } from 'react'
import { SnackbarContext } from './SnackbarProvider'
import { SnackbarProps, SnackbarOptions, Style, getPosition } from './SnackbarProps'

export function useSnackbar() {
  const context = useContext<SnackbarProps>(SnackbarContext)
  if (!context) {
    throw new Error(`useSnackbar must be used within a SnackbarProvider`)
  }

  function configure(opt: SnackbarOptions) {
    context.setDuration(opt && opt.duration ? opt.duration : context.duration)
    context.setAnimationDelay(opt && opt.animationDelay ? opt.animationDelay : context.animationDelay)
    context.setPosition(opt && opt.position ? getPosition(opt.position) : context.position)
    context.setDisplayIcon(opt && opt.displayIcon ? opt.displayIcon : context.displayIcon)
    context.setDisplayCloseIcon(opt && opt.displayCloseIcon ? opt.displayCloseIcon : context.displayCloseIcon)
    context.setStyle(opt.style)
  }

  function openSnackbar(message: string, options: SnackbarOptions) {
    configure(options)
    context.setMessage(message)
    context.setIsOpen(true)
    context.setFadeTimeout(
      setTimeout(
        () => {
          close()
        },
        options && options.duration ? options.duration : context.duration
      )
    )
  }

  function open(message: string, options: SnackbarOptions) {
    if (context.isOpen) {
      close()
      setTimeout(() => {
        openSnackbar(message, options)
      }, context.animationDelay)
    } else {
      openSnackbar(message, options)
    }
  }

  function close() {
    clearTimeout(context.fadeTimeout)
    context.setIsOpen(false)
  }

  function showSuccess(message: string, options: SnackbarOptions) {
    open(message, { ...options, style: Style.success })
  }

  function showWarning(message: string, options: SnackbarOptions) {
    open(message, { ...options, style: Style.warning })
  }

  function showDanger(message: string, options: SnackbarOptions) {
    open(message, { ...options, style: Style.danger })
  }

  return { showSuccess, showWarning, showDanger }
}
