import React from "react";
import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from '@fluentui/react/lib/Breadcrumb';

const items: IBreadcrumbItem[] = [
  { text: 'Category', key: 'category', onClick: _onBreadcrumbItemClicked },
  { text: 'Topic 1', key: 't1', onClick: _onBreadcrumbItemClicked },
  { text: 'Topic 2', key: 't2', onClick: _onBreadcrumbItemClicked },
  { text: 'Topic 3', key: 't3', onClick: _onBreadcrumbItemClicked },
  { text: 'Topic 4', key: 't4', onClick: _onBreadcrumbItemClicked, isCurrentItem: true },
];

export default class BreadCrumbs extends React.Component {
  render() {
    return (
            <Breadcrumb
              items={items}
              maxDisplayedItems={10}
              ariaLabel="Breadcrumb with items rendered as buttons"
              overflowAriaLabel="More links"
            />
    );
  }
}

function _onBreadcrumbItemClicked(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem): void {
  console.log(`Breadcrumb item with key "${item.key}" has been clicked. ${ev.toString()}`);
}