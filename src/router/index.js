import PublicTemplate from '@/templates/Public'
import ApprovalPage from '@/pages/General/Approval'
import CostPage from '@/pages/General/Cost'
import CoverPage from '@/pages/General/Cover'
import DeadlinePage from '@/pages/General/Deadline'
import DescriptionPage from '@/pages/General/Description'
import IconPage from '@/pages/General/Icon'
import SignaturePage from '@/pages/General/Signature'

export default [
    {
        path: '',
        name: 'General',
        component: PublicTemplate,
        meta: {},
        redirect: { name: 'General.Home', },
        children: [
            {
                path: 'aprovacao',
                name: 'General.Approval',
                component: ApprovalPage,
                meta: {},
            },
            {
                path: 'custo',
                name: 'General.Cost',
                component: CostPage,
                meta: {},
            },
            {
                path: 'capa',
                name: 'General.Cover',
                component: CoverPage,
                meta: {},
            },
            {
                path: 'prazo',
                name: 'General.Deadline',
                component: DeadlinePage,
                meta: {},
            },
            {
                path: 'descricao',
                name: 'General.Description',
                component: DescriptionPage,
                meta: {},
            },
            {
                path: 'icones',
                name: 'General.Icon',
                component: IconPage,
                meta: {},
            },
            {
                path: 'assinatura',
                name: 'General.Signature',
                component: SignaturePage,
                meta: {},
            },
        ],
    },
]