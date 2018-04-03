import PublicTemplate from '@/templates/Public'
import ApprovalPage from '@/pages/General/Approval'
import CostPage from '@/pages/General/Cost'
import CoverPage from '@/pages/General/Cover'
import ConditionsPage from '@/pages/General/Conditions'
import DescriptionPage from '@/pages/General/Description'
import PaymentPage from '@/pages/General/Payment'
import SignaturePage from '@/pages/General/Signature'
import HomePage from '@/pages/General/Home'

export default [
    {
        path: '',
        name: 'General',
        component: PublicTemplate,
        meta: {},
        redirect: { name: 'General.Home', },
        children: [
            {
                path: '/',
                name: 'General.Home',
                component: HomePage,
                meta: {},
            },
            {
                path: '/0',
                name: 'General.Cover',
                component: CoverPage,
                meta: {},
            },
            {
                path: '/1',
                name: 'General.Description',
                component: DescriptionPage,
                meta: {},
            },
            {
                path: '/2',
                name: 'General.Cost',
                component: CostPage,
                meta: {},
            },
            {
                path: '/3',
                name: 'General.Payment',
                component: PaymentPage,
                meta: {},
            },
            {
                path: '/4',
                name: 'General.Conditions',
                component: ConditionsPage,
                meta: {},
            },
            {
                path: '/5',
                name: 'General.Approval',
                component: ApprovalPage,
                meta: {},
            },
            {
                path: '/6',
                name: 'General.Signature',
                component: SignaturePage,
                meta: {},
            },
        ],
    },
]