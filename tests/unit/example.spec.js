import { shallowMount } from '@vue/test-utils'
import Enrollment from '@/views/Enrollment'

describe('Enrollment.vue', () => {
  it('enrollment method', () => {
    const wrapper = shallowMount(Enrollment, {
    });

    let x = wrapper.vm;
    let result = x.enroll({
      'name': 'Redacción II',
      'code': 'ESP102',
      'teacher': 'Pepe Miguel'
    }, 1);
    
    expect(result).toMatch(1);
  })
})