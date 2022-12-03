import React from "react";
import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from '@fluentui/react/lib/Breadcrumb';

const items: IBreadcrumbItem[] = [
  { text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 1', key: 'f1', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 2', key: 'f2', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 3', key: 'f3', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 4', key: 'f4', onClick: _onBreadcrumbItemClicked, isCurrentItem: true },
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