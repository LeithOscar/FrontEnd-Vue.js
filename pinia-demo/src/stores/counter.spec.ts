import {setActivePinia, createPinia} from 'pinia'
import { useCounterStore } from './counter';


describe('CounterView', () => {

    describe('Counter Store', () => {
        beforeEach(() => {
            // creates a fresh pinia and make it active so it's automatically picked
            // up by any useStore() call without having to pass it to it:
            // `useStore(pinia)`
            setActivePinia(createPinia())
        });

        it('increments', () => {
          const counter = useCounterStore()
          expect(counter.counter).toBe(0)
          counter.incrementBy(5)
          expect(counter.counter).toBe(5)
        });

        it('decrements', () => {
          const counter = useCounterStore()
          expect(counter.counter).toBe(0)
          counter.incrementBy(5)
          counter.decrementBy(3)
          expect(counter.counter).toBe(2)
        })
    })
})
