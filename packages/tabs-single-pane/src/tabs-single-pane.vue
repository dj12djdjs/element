<script>
// import TabNav from '../../tabs/src/tab-nav';
// import TabPane from '../../tabs/src/tab-pane';
import Tabs from '../../tabs/src/tabs';

export default {
  ...Tabs,
  name: 'ElTabsSinglePane',
  render(h) {
    let {
      type,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch
    } = this;

    const newButton = editable || addable
      ? (
        <span
          class="el-tabs__new-tab"
          on-click={ handleTabAdd }
          tabindex="0"
          on-keydown={ (ev) => { if (ev.keyCode === 13) { handleTabAdd(); }} }
        >
          <i class="el-icon-plus"></i>
        </span>
      )
      : null;

    const navData = {
      props: {
        currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable,
        type,
        panes,
        stretch
      },
      ref: 'nav'
    };

    const header = (
      <div class={['el-tabs__header', `is-${tabPosition}`]}>
        {newButton}
        <tab-nav { ...navData }></tab-nav>
      </div>
    );

    const panels = (
      <div class="el-tabs__content">
        <div style="display:none;">
          {this.$slots.default}
        </div>
        <div>
          {this.$slots.single}
        </div>
      </div>
    );

    return (
      <div class={{
        'el-tabs': true,
        'el-tabs--card': type === 'card',
        [`el-tabs--${tabPosition}`]: true,
        'el-tabs--border-card': type === 'border-card'
      }}>
        { tabPosition !== 'bottom' ? [header, panels] : [panels, header] }
      </div>
    );
  }
};
</script>
