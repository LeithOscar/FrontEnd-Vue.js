import {setActivePinia, createPinia} from 'pinia'

import {shallowMount} from '@vue/test-utils';
import CounterView from './CounterView.vue';

describe('CounterView', () => {

        beforeEach(() => {
            // creates a fresh pinia and make it active so it's automatically picked
            // up by any useStore() call without having to pass it to it:
            // `useStore(pinia)`
            setActivePinia(createPinia())
        });

        it('when create instance shold be zero counter', () => {

            const wrapper = shallowMount(CounterView, {});

            expect(wrapper.html()).toContain('<h1>Counter View: 0</h1>');
        });

        it('should be an buttin with "+1" ', () => {

          const wrapper = shallowMount(CounterView, {});

          expect(wrapper.html()).toContain('<b-button variant=\"outline-primary\">+1</b-button>');
      });
})
