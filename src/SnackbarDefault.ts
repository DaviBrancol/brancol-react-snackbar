import { SnackbarProviderProps } from './SnackbarProps'

export const defaults: SnackbarProviderProps = {
  defaultPosition: 'tr',
  defaultDisplayDuration: 5000,
  defaultAnimationDelay: 500,
  successColor: '#28c960',
  warningColor: '#f49716',
  dangerColor: '#fc5050',
  successIcon: 'fa fa-check-circle',
  warningIcon: 'fa fa-exclamation-triangle',
  dangerIcon: 'fa fa-exclamation-circle',
  showIcon: true,
  showCloseIcon: true,
  render: null,
  children: null,
}
