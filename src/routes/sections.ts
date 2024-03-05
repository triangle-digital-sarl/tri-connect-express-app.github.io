// import List, { Item, Text, Separator } from '@smui/list';

type DemoSection = {
	component?: any;
	name: string;
	route?: string;
	shortcut?: string;
	indent: number;
	repos?: string[];
};

export const sections: (
	| DemoSection
	| {
			name: string;
			separator: true;
	  }
)[] = [
	{
		name: 'API',
		route: '/swagger',
		indent: 0
	},
	{
		name: 'Database',
		route: '/db',
		indent: 0
	},
	{
		name: 'System Desgin',
		route: '/system-design/01_Introduction_and_Goals',
		indent: 0
	},
	{
		name: 'Introduction and Goals',
		route: '/system-design/01_Introduction_and_Goals',
		indent: 1
	},
	{
		name: 'Architecture Constraints',
		route: '/system-design/02_Architecture_Constraints',
		indent: 1
	},
	{
		name: 'Context and scope',
		route: '/system-design/03_Context_and_scope',
		indent: 1
	},
	{
		name: 'Solution Strategy',
		route: '/system-design/04_Solution_Strategy',
		indent: 1
	},
	{
		name: 'Build Block',
		route: '/system-design/05_Building_Block_View',
		indent: 1
	},
	{
		name: 'Runtime View',
		route: '/system-design/06_Runtime_View',
		indent: 1
	},
	{
		name: 'Deployment View',
		route: '/system-design/07_Deployment_View',
		indent: 1
	},
	{
		name: 'Crosscutting Concepts',
		route: '/system-design/08_Crosscutting_Concepts',
		indent: 1
	},
	{
		name: 'Architecture Decisions',
		route: '/system-design/09_Architecture_Decisions',
		indent: 1
	},
	{
		name: 'Quality Requirements',
		route: '/system-design/10_QualityRequirements',
		indent: 1
	},
	{
		name: 'Risks and Technical Debt',
		route: '/system-design/11_Risks_and_Technical_Debt',
		indent: 1
	},
	{
		name: 'Glossary',
		route: '/system-design/12_Glossary',
		indent: 1
	}

	// {
	//   name: 'SvelteKit',
	//   route: '/SVELTEKIT.md',
	//   indent: 1,
	// },
	// {
	//   name: 'Theming',
	//   route: '/THEMING.md',
	//   indent: 0,
	// },
	// {
	//   name: 'Migrating',
	//   route: '/MIGRATING.md',
	//   indent: 0,
	// },
	// {
	//   name: 'sep1',
	//   separator: true,
	// },
	// {
	//   name: 'Quick Guide',
	//   route: '/demo/quick-guide/',
	//   indent: 0,
	// },
	// {
	//   name: 'sep2',
	//   separator: true,
	// },
	// {
	//   name: 'Accordion',
	//   route: '/demo/accordion/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/accordion',
	//   ],
	// },
	// {
	//   name: 'Action Buttons',
	//   indent: 0,
	// },
	// {
	//   name: 'Button',
	//   route: '/demo/button/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/button',
	//   ],
	// },
	// {
	//   name: 'Floating Action Button',
	//   route: '/demo/fab/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/fab',
	//   ],
	// },
	// {
	//   name: 'Icon Button',
	//   route: '/demo/icon-button/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/icon-button',
	//   ],
	// },
	// {
	//   name: 'App Bars',
	//   indent: 0,
	// },
	// {
	//   name: 'Bottom App Bar',
	//   route: '/demo/bottom-app-bar/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/bottom-app-bar',
	//   ],
	// },
	// {
	//   name: 'Top App Bar',
	//   route: '/demo/top-app-bar/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/top-app-bar',
	//   ],
	// },
	// {
	//   name: 'Badge',
	//   route: '/demo/badge/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/badge',
	//   ],
	// },
	// {
	//   name: 'Banner',
	//   route: '/demo/banner/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/banner',
	//   ],
	// },
	// {
	//   name: 'Cards',
	//   route: '/demo/card/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/card',
	//   ],
	// },
	// {
	//   name: 'Common',
	//   route: '/demo/common/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/common',
	//   ],
	// },
	// {
	//   name: 'Data Table',
	//   route: '/demo/data-table/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/data-table',
	//   ],
	// },
	// {
	//   name: 'Dialog',
	//   route: '/demo/dialog/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/dialog',
	//   ],
	// },
	// {
	//   name: 'Drawer',
	//   route: '/demo/drawer/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/drawer',
	//   ],
	// },
	// {
	//   name: 'Elevation',
	//   route: '/demo/elevation/',
	//   indent: 0,
	// },
	// {
	//   name: 'Image List',
	//   route: '/demo/image-list/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/image-list',
	//   ],
	// },
	// {
	//   name: 'Inputs and Controls',
	//   indent: 0,
	// },
	// {
	//   name: 'Autocomplete',
	//   route: '/demo/autocomplete/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/autocomplete',
	//   ],
	// },
	// {
	//   name: 'Checkbox',
	//   route: '/demo/checkbox/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/checkbox',
	//   ],
	// },
	// {
	//   name: 'Chips',
	//   route: '/demo/chips/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/chips',
	//   ],
	// },
	// {
	//   name: 'Form Field',
	//   route: '/demo/form-field/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/form-field',
	//   ],
	// },
	// {
	//   name: 'Radio Button',
	//   route: '/demo/radio/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/radio',
	//   ],
	// },
	// {
	//   name: 'Segmented Button',
	//   route: '/demo/segmented-button/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/segmented-button',
	//   ],
	// },
	// {
	//   name: 'Select Menu',
	//   route: '/demo/select/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/select',
	//   ],
	// },
	// {
	//   name: 'Slider',
	//   route: '/demo/slider/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/slider',
	//   ],
	// },
	// {
	//   name: 'Switch',
	//   route: '/demo/switch/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/switch',
	//   ],
	// },
	// {
	//   name: 'Text Field',
	//   route: '/demo/textfield/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/textfield',
	//   ],
	// },
	// {
	//   name: 'Layout Grid',
	//   route: '/demo/layout-grid/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/layout-grid',
	//   ],
	// },
	// {
	//   name: 'List',
	//   route: '/demo/list/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/list',
	//   ],
	// },
	// {
	//   name: 'Menu Surface',
	//   route: '/demo/menu-surface/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu-surface',
	//   ],
	// },
	// {
	//   name: 'Menu',
	//   route: '/demo/menu/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu',
	//   ],
	// },
	// {
	//   name: 'Paper',
	//   route: '/demo/paper/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/paper',
	//   ],
	// },
	// {
	//   name: 'Progress Indicators',
	//   indent: 0,
	// },
	// {
	//   name: 'Circular Progress',
	//   route: '/demo/circular-progress/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/circular-progress',
	//   ],
	// },
	// {
	//   name: 'Linear Progress',
	//   route: '/demo/linear-progress/',
	//   indent: 1,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/linear-progress',
	//   ],
	// },
	// {
	//   name: 'Ripple',
	//   route: '/demo/ripple/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/ripple',
	//   ],
	// },
	// {
	//   name: 'Snackbar',
	//   route: '/demo/snackbar/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar',
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar/kitchen',
	//   ],
	// },
	// {
	//   name: 'Tabs',
	//   route: '/demo/tabs/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab',
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab-bar',
	//   ],
	// },
	// {
	//   name: 'Tooltip',
	//   route: '/demo/tooltip/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/tooltip',
	//   ],
	// },
	// {
	//   name: 'Touch Target',
	//   route: '/demo/touch-target/',
	//   indent: 0,
	//   repos: [
	//     'https://github.com/hperrin/svelte-material-ui/tree/master/packages/touch-target',
	//   ],
	// },
	// {
	//   name: 'Typography',
	//   route: '/demo/typography/',
	//   indent: 0,
	// },
];
