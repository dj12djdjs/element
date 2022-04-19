import { createTest, destroyVM } from '../util';
import TabsSinglePane from 'packages/tabs-single-pane';

describe('TabsSinglePane', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TabsSinglePane, true);
    expect(vm.$el).to.exist;
  });
});

