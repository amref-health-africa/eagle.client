// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconSitemap, IconBoxMultiple, IconChartDots, IconUserCheck, IconKey } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics,
    IconSitemap,
    IconBoxMultiple,
    IconChartDots,
    IconUserCheck,
    IconKey
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const admin = {
    id: 'admin',
    title: <FormattedMessage id="Admin Configuration" />,
    type: 'group',
    children: [
        {
            id: 'section',
            title: <FormattedMessage id="Sections" />,
            type: 'item',
            url: '/admin/Section',
            icon: icons.IconSitemap,
            breadcrumbs: false
        },
        {
            id: 'subsection',
            title: <FormattedMessage id="Sub-Sections" />,
            type: 'item',
            url: '/admin/subection',
            icon: icons.IconBoxMultiple,
            breadcrumbs: false
        },
        {
            id: 'businessunit',
            title: <FormattedMessage id="Business Units" />,
            type: 'item',
            url: '/admin/businessunit',
            icon: icons.IconDeviceAnalytics,
            breadcrumbs: false
        },
        {
            id: 'admindashboard',
            title: <FormattedMessage id="Dashboards" />,
            type: 'item',
            url: '/admin/admindashboard',
            icon: icons.IconChartDots,
            breadcrumbs: false
        },
        {
            id: 'user',
            title: <FormattedMessage id="users" />,
            type: 'item',
            url: '/admin/user',
            icon: icons.IconUserCheck,
            breadcrumbs: false
        },
        {
            id: 'businessunituser',
            title: <FormattedMessage id="Business unit & users" />,
            type: 'item',
            url: '/admin/businessunituser',
            icon: icons.IconKey,
            breadcrumbs: false
        }
    ]
};

export default admin;
