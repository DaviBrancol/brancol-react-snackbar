import React, { createContext, useState } from 'react'
import { SnackbarProviderProps, SnackbarProps, Style, Position, getPosition } from './SnackbarProps'
import { Snackbar } from './Snackbar'

// MARK: Import the default values
import { defaults } from './SnackbarDefault'

// Context used by the hook useSnackbar() and HoC withSnackbar()
export const SnackbarContext = createContext<SnackbarProps>(null)

export default function SnackbarProvider({
  defaultPosition = defaults.defaultPosition,
  defaultDisplayDuration = defaults.defaultDisplayDuration,
  defaultAnimationDelay = defaults.defaultAnimationDelay,
  successColor = defaults.successColor,
  warningColor = defaults.warningColor,
  dangerColor = defaults.dangerColor,
  showIcon = defaults.showIcon,
  showCloseIcon = defaults.showCloseIcon,
  render = defaults.render,
  children = defaults.children,
}: SnackbarProviderProps) {
  const pos: Position = getPosition(defaultPosition)
  // MARK: Snackbar animation properties

  // State - Boolean: Indicates if the snackbar isOpen
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // State - Boolean: Indicates if the snackbar isAnimating
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  // State - Integer: Amount of time (ms) the snackbar will be displayed
  const [duration, setDuration] = useState<number>(defaultDisplayDuration)
  // State - Integer: Amount of time (ms) the snackbar will take to animate from fadein - fadeout.
  const [animationDelay, setAnimationDelay] = useState<number>(defaultAnimationDelay)
  // State - Position<Enum>: Position that the snackbar will be displayed
  const [position, setPosition] = useState<Position>(pos)

  // MARK: Snackbar display properties

  // State - String: Current message displayed
  const [message, setMessage] = useState<string>('')
  // State - Object: Timeout object storage for future cancel
  const [fadeTimeout, setFadeTimeout] = useState<ReturnType<typeof setTimeout>>(null)
  // State - Boolean: Indicates it the snackbar will display the icon
  const [displayIcon, setDisplayIcon] = useState<boolean>(showIcon)
  // State - Boolean: Indicates it the snackbar will display the close icon
  const [displayCloseIcon, setDisplayCloseIcon] = useState<boolean>(showCloseIcon)
  // State - Object<Style>: Choose the style of the snackbar
  const [style, setStyle] = useState<Style>(null)

  // MARK: Render Return
  // Return the value object with states and the div message class.
  const contextProps: SnackbarProps = {
    successColor,
    warningColor,
    dangerColor,
    isOpen,
    setIsOpen,
    isAnimating,
    setIsAnimating,
    duration,
    setDuration,
    animationDelay,
    setAnimationDelay,
    position,
    setPosition,
    message,
    setMessage,
    fadeTimeout,
    setFadeTimeout,
    displayIcon,
    setDisplayIcon,
    displayCloseIcon,
    setDisplayCloseIcon,
    style,
    setStyle,
  }
  return (
    <SnackbarContext.Provider value={contextProps}>
      {children}
      {render ? render(contextProps) : <Snackbar {...contextProps} />}
    </SnackbarContext.Provider>
  )
}
