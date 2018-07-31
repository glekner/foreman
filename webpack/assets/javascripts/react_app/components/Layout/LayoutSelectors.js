import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';
import { navigateTo, changeActive } from '../../../foreman_navigation';

const menuItemsSelector = state => state.layout.items;
const activeMenuSelector = state => state.layout.activeMenu;
const path = window.location.pathname;

export const patternflyMenuItemsSelector = createSelector(
  menuItemsSelector,
  activeMenuSelector,
  (items, activeMenu) => patternflyItems(items, path, activeMenu),
);

const patternflyItems = (data, activePath, activeMenu) => {
  const items = [];
  if (isEmpty(data)) return [];

  data.forEach((item) => {
    let activeFlag = false;
    const childrenArray = [];
    item.children.forEach((child) => {
      if (isEmpty(activeMenu) && child.url === activePath) { // activeMenu after Full page reload
        activeFlag = true;
        changeActive(item.name);
      }

      const childObject = {
        title: isEmpty(child.name) === true ? child.name : __(child.name),
        isDivider: child.type === 'divider' && !isEmpty(child.name),
        className: child.className,
        onClick: isEmpty(child.onClick) ? () => navigateTo(child.url)
          : () => child.onClick(),
      };
      childrenArray.push(childObject);
    });
    const itemObject = {
      title: __(item.name),
      initialActive: activeFlag || item.active,
      iconClass: item.icon,
      subItems: childrenArray,
      className: (mobileView.indexOf(item.name) > -1) ? 'visible-xs-block' : '',
    };
    items.push(itemObject);
  });
  return items;
};

const mobileView = ['User', 'Organizations', 'Locations'];
