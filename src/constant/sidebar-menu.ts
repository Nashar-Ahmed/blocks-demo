import { MenuItem } from '../models/sidebar';

const createMenuItem = (
  id: string,
  name: string,
  path: string,
  icon?: MenuItem['icon'],
  options: Partial<Omit<MenuItem, 'id' | 'name' | 'path' | 'icon'>> = {}
): MenuItem => ({
  id,
  name,
  path,
  icon,
  ...options,
});

const createMenuItemWithChildren = (
  id: string,
  name: string,
  path: string,
  icon: MenuItem['icon'],
  children: MenuItem[],
  options: Partial<Omit<MenuItem, 'id' | 'name' | 'path' | 'icon' | 'children'>> = {}
): MenuItem => ({
  id,
  name,
  path,
  icon,
  children,
  ...options,
});

{
  /* for permission wise restriction 
createMenuItem('invoices', 'INVOICES', '/invoices', 'ReceiptText', {
  isIntegrated: true,
  permissions: [MENU_PERMISSIONS.INVOICE_READ, MENU_PERMISSIONS.INVOICE_WRITE],
}),
*/
  /* for role wise restriction 
  createMenuItem('iam', 'IAM', '/identity-management', 'Users', {
    isIntegrated: true,
    roles: MENU_PERMISSIONS.ADMIN_ONLY,
  }),
*/
}

export const menuItems: MenuItem[] = [

  createMenuItem('iam', 'IAM', '/', 'Users', {
    isIntegrated: true,
  }),
  
];
