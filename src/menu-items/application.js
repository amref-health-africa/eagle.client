// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconMapPin
} from '@tabler/icons';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconMapPin
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const application = {
    id: 'application',
    title: <FormattedMessage id="My Dashboards" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'glt',
            title: <FormattedMessage id="Global Leadership Team" />,
            type: 'collapse',
            icon: icons.IconUserCheck,
            children: [
                {
                    id: 'groupfinance',
                    title: <FormattedMessage id="Finance" />,
                    type: 'item',
                    url: '/GLT/GroupFinance/businessunits under group finance'
                },
                {
                    id: 'grouphumanresource',
                    title: <FormattedMessage id="Human Resource" />,
                    type: 'item',
                    url: '/GLT/GroupFinance/businessunits under group finance'
                }
            ]
        },
        {
            id: 'countryoffices',
            title: <FormattedMessage id="Countryoffices" />,
            type: 'collapse',
            icon: icons.IconMapPin,
            children: [
                {
                    id: 'kenya',
                    title: <FormattedMessage id="Kenya" />,
                    type: 'item',
                    url: '/GLT/GroupFinance/businessunits under group finance'
                },
                {
                    id: 'uganda',
                    title: <FormattedMessage id="Uganda" />,
                    type: 'item',
                    url: '/GLT/GroupFinance/businessunits under group finance'
                }
            ]
        }
    ]
};

export default application;
