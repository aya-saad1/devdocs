// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    community: [
        'community/intro',
        'community/mission',
        'community/roadmap',
        {
            label: 'Meetings',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'community/meetings',
                },
            ],
            link: {
                type: 'doc',
                id: 'community/meetings',
            },
        },
        'community/research',
    ],
    development: [
        {
            label: 'Development',
            type: 'category',
            items: [
                {
                    label: 'Process',
                    type: 'category',
                    items: [
                            'development/process/peer-review',
                            'development/process/integration-review',
                            'development/process/testing',
                            {
                                type: 'doc',
                                id: 'development/process/testing-integrated-issues',
                                className: 'docusaurus-hidden',
                            },
                            {
                                type: 'doc',
                                id: 'development/process/qatesting',
                                className: 'docusaurus-hidden',
                            },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/process',
                    },
                },
                {
                    label: 'Tracker',
                    type: 'category',
                    items: [
                        {
                            type: 'autogenerated',
                            dirName: 'development/tracker',
                        },
                    ],
                    link: {
                        type: 'doc',
                        id: 'development/tracker',
                    },
                },
            ],
            link: {
                type: 'doc',
                id: 'development/index',
            },
        },
        {
            label: 'Policies',
            type: 'category',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'development/policies',
                },
            ],
        },
    ],
};

module.exports = sidebars;
