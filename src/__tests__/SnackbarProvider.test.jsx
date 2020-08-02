import React from 'react'
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
    </div>
  )
}

// Mounts the context passing the custom providerOptions
const mountContext = (Component, providerOptions = {}) => {
  return mount(<SnackbarProvider {...providerOptions}>{Component}</SnackbarProvider>)
}

describe('Custom Context Props', () => {
  // Reset fake timers on each test
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should open the snackbar in a custom bottom-left position', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { defaultPosition: 'bl' })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')

    // Expect the following conditions
    expect(Snackbar.props().style).toMatchObject({ left: '15px', bottom: '15px' })
    expect(Snackbar.props().style).not.toMatchObject({ top: '15px' })
  })

  it('should open the snackbar with 3000ms of duration', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { defaultDisplayDuration: 3000 })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Expect the following conditions
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000)
  })

  it('should open the snackbar with a custom animation delay', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { defaultAnimationDelay: 1000 })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')

    // Expect the following conditions
    expect(Snackbar.props().style).toMatchObject({ transitionDuration: `${1000}ms` })
    expect(Snackbar.props().style).not.toMatchObject({ transitionDuration: `${defaults.defaultAnimationDelay}ms` })
  })

  it('should open the snackbar with a custom successColor and successIcon', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { successColor: '#000', successIcon: 'fa fa-eye' })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarIcon = wrapper.find('.snackbarIcon')

    // Expect the following conditions
    expect(Snackbar.props().style).toMatchObject({ backgroundColor: '#000' })
    expect(Snackbar.props().style).not.toMatchObject({ backgroundColor: defaults.successColor })
    expect(SnackbarIcon.props().className).toContain('fa fa-eye')
    expect(SnackbarIcon.props().className).not.toContain(defaults.successIcon)
  })

  it('should open the snackbar with a custom warningColor and warningIcon', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { warningColor: '#000', warningIcon: 'fa fa-eye' })

    // Get the component mock and clicks on the openWarning button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openWarning"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarIcon = wrapper.find('.snackbarIcon')

    // Expect the following conditions
    expect(Snackbar.props().style).toMatchObject({ backgroundColor: '#000' })
    expect(Snackbar.props().style).not.toMatchObject({ backgroundColor: defaults.warningColor })
    expect(SnackbarIcon.props().className).toContain('fa fa-eye')
    expect(SnackbarIcon.props().className).not.toContain(defaults.warningIcon)
  })

  it('should open the snackbar with a custom dangerColor and dangerIcon', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { dangerColor: '#000', dangerIcon: 'fa fa-eye' })

    // Get the component mock and clicks on the openDanger button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openDanger"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarIcon = wrapper.find('.snackbarIcon')

    // Expect the following conditions
    expect(Snackbar.props().style).toMatchObject({ backgroundColor: '#000' })
    expect(Snackbar.props().style).not.toMatchObject({ backgroundColor: defaults.dangerColor })
    expect(SnackbarIcon.props().className).toContain('fa fa-eye')
    expect(SnackbarIcon.props().className).not.toContain(defaults.dangerIcon)
  })

  it('should open the snackbar without the snackbarIcon', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { showIcon: false })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const SnackbarIcon = wrapper.find('.snackbarIcon')

    // Expect the following conditions
    expect(SnackbarIcon.length).toEqual(0)
  })

  it('should open the snackbar without the snackbarCloseIcon', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { showCloseIcon: false })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const SnackbarCloseIcon = wrapper.find('.snackbarCloseIcon')

    // Expect the following conditions
    expect(SnackbarCloseIcon.length).toEqual(0)
  })

  it('should open a custom snackbar without any class', () => {
    // Wrapper with Provider
    const wrapper = mountContext(<ComponentMock />, { render: (props) => <div className="snackbarRender"></div> })

    // Get the component mock and clicks on the openSuccess button.
    const Component = wrapper.find(ComponentMock)
    Component.find('[data-test="openSuccess"]').simulate('click')

    // Get the snackbar test component
    const Snackbar = wrapper.find('.snackbarCustom')
    const SnackbarRender = wrapper.find('.snackbarRender')

    // Expect the following conditions
    expect(Snackbar.length).toEqual(0)
    expect(SnackbarRender.length).not.toEqual(0)
  })
})
