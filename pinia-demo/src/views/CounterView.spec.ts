import { mount } from '@vue/test-utils'
import  CounterView from './CounterView.vue'

describe('CounterView', () => {
  // Inspeccionar las opciones de componentes en bruto
  it('tiene un hook creado', () => {
    
    const wrapper = mount(CounterView)

    expect(wrapper.find('h1').text()).toEqual('Counter View:0')

  })
})