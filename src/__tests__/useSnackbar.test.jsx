import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import SnackbarProvider, { useSnackbar } from '../'
import { mount } from 'enzyme'
import { defaults } from '../SnackbarDefault'

const ComponentMock = () => {
  const { showSuccess, showWarning, showDanger } = useSnackbar()

  return (
    <div className="xxxxx">
      <button data-test="openSuccess" onClick={() => showSuccess('Success Message')}>
        Show Success
      </button>
      <button data-test="openWarning" onClick={() => showWarning('Warning Message')}>
        Show Warning
      </button>
      <button data-test="openDanger" onClick={() => showDanger('Danger Message')}>
        Show Danger
      </button>
      <button data-test="openCustom" onClick={() => showSuccess('Custom Call', { duration: 1000, animationDelay: 200, position: 'br', displayIcon: false, displayCloseIcon: false })}>
        Show Custom Call
      </button>
    </div>
  )
}

// Mounts the context passing the custom providerOptions
const mountContext = (Component, providerOptions = {}) => {
  return mount(<SnackbarProvider {...providerOptions}>{Component}</SnackbarProvider>)
}

describe('useSnackbar()', () => {
  // Reset fake timers on each test
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should return the show functions from the useSnackbar()', () => {
    // Necessary wrap the hook in the context
    const wrapper = ({ children }) => <SnackbarProvider>{children}</SnackbarProvider>
    const { result } = renderHook(() => useSnackbar(), { wrapper })
    const { showSuccess, showWarning, showDanger } = result.current
    expect(showSuccess).toBeInstanceOf(Function)
    expect(showWarning).toBeInstanceOf(Function)
    expect(showDanger).toBeInstanceOf(Function)
  })

  it('should open the snackbar with the default success properties', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />)
    const defaultProperties = { backgroundColor: defaults.successColor, right: '15px', top: '15px', transitionDuration: `${defaults.defaultAnimationDelay}ms` }

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarMessage = wrapper.find('.snackbarMessage')
    const SnackbarIcon = wrapper.find('.snackbarIcon')
    const SnackbarCloseIcon = wrapper.find('.snackbarCloseIcon')

    // Expect the attributes from the Sidebar to be equal to the success default
    expect(SnackbarMessage.text()).toEqual('Success Message')
    expect(SnackbarIcon.props().className).toContain('fa fa-check-circle')
    expect(SnackbarCloseIcon.props().className).toContain('fa fa-times')
    expect(Snackbar.props().style).toMatchObject(defaultProperties)
  })

  it('should open the snackbar with the default warning properties', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />)
    const defaultProperties = { backgroundColor: defaults.warningColor, right: '15px', top: '15px', transitionDuration: `${defaults.defaultAnimationDelay}ms` }

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openWarning"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarMessage = wrapper.find('.snackbarMessage')
    const SnackbarIcon = wrapper.find('.snackbarIcon')
    const SnackbarCloseIcon = wrapper.find('.snackbarCloseIcon')

    // Expect the attributes from the Sidebar to be equal to the success default
    expect(SnackbarMessage.text()).toEqual('Warning Message')
    expect(SnackbarIcon.props().className).toContain('fa fa-exclamation-triangle')
    expect(SnackbarCloseIcon.props().className).toContain('fa fa-times')
    expect(Snackbar.props().style).toMatchObject(defaultProperties)
  })

  it('should open the snackbar with the default danger properties', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />)
    const defaultProperties = { backgroundColor: defaults.dangerColor, right: '15px', top: '15px', transitionDuration: `${defaults.defaultAnimationDelay}ms` }

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openDanger"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarMessage = wrapper.find('.snackbarMessage')
    const SnackbarIcon = wrapper.find('.snackbarIcon')
    const SnackbarCloseIcon = wrapper.find('.snackbarCloseIcon')

    // Expect the attributes from the Sidebar to be equal to the success default
    expect(SnackbarMessage.text()).toEqual('Danger Message')
    expect(SnackbarIcon.props().className).toContain('fa fa-exclamation-circle')
    expect(SnackbarCloseIcon.props().className).toContain('fa fa-times')
    expect(Snackbar.props().style).toMatchObject(defaultProperties)
  })

  it('should open the snackbar with custom properties for that execution', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />)

    // Get the component mock and clicks on the openCustom button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openCustom"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarMessage = wrapper.find('.snackbarMessage')

    // Expect the timeout to have been called
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)

    // Expect the attributes from the Sidebar to be equal to the success default
    expect(SnackbarMessage.text()).toEqual('Custom Call')
    expect(Snackbar.props().style).toMatchObject({ transitionDuration: '200ms' })
    expect(Snackbar.props().style).toMatchObject({ bottom: '15px', right: '15px' })
  })
})
