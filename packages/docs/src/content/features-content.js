import React from 'react';
import IconApiDocs from '../assets/icon-api-docs.svg'
import IconDatabase from '../assets/icon-database.svg'
import IconSecurity from '../assets/icon-security.svg'
import IconWorld from '../assets/icon-world.svg'
import IconFileStorage from '../assets/icon-download-file.svg'
import IconScaling from '../assets/icon-increase.svg'
import IconCode from '../assets/icon-code.svg'
import IconTypeScript from '../assets/icon-typescript.svg'
import IconRefresh from '../assets/icon-refresh.svg'
import IconEnv from '../assets/icon-env.svg'
import IconClock from '../assets/icon-clock.svg'

const ICONCLASSNAME = 'w-12 h-12'

export const features_content = [
    {
        title: <span><span className='text-purple'>97%</span> Less Code</span>,
        route: "/features/less-code",
        icon: <IconCode className={ICONCLASSNAME} />,
        info: "Stop writing repeated boilerplate code. Focus on your business logic",
        description: "EzBackend is designed to reduce the amount of boilerplate you have to write",
        media: null,
        released: true,
        flip_card: 'Cillum veniam ullamco amet magna ut aute officia cupidatat pariatur proident laborum dolor.',
    },
    {
        title: <span><span className='text-purple'>14.2x</span> Faster</span>,
        route: "/features/benchmarks",
        icon: <IconScaling className={ICONCLASSNAME} />,
        info: "Learn how EzBackend implements performance as a first class citizen",
        description: "EzBackend uses Fastify under the hood, a NodeJS framework with 5 times the benchmark performance as Express (At the time of writing) (Support with our own benchmarks)",
        media: null,
        released: true,
        flip_card: 'Ea dolor irure magna cupidatat voluptate ea in consectetur tempor Lorem.',
    },
    {
        title: "Authentication",
        route: "/docs/auth/user-auth",
        icon: <IconSecurity className={ICONCLASSNAME} />,
        info: "Add authentication to your backend in one line of code.",
        description: "",
        media: null,
        released: true,
        flip_card: 'Tempor mollit laboris qui laboris commodo eu sunt non exercitation laborum ex cillum sit do.',
    },
    {
        title: "Database Agnostic",
        route: "/docs/basics/configuration",
        icon: <IconDatabase className={ICONCLASSNAME} />,
        info: "Supports enterprise Databases: Postgres, MySQL, MongoDB, & more",
        description: "EzBackend uses typeorm under the hood, which supports XXX DBs. It also utilise database hooks to provide row level security",
        media: null,
        released: true,
        flip_card: 'Amet exercitation elit cillum aliqua anim deserunt magna eu deserunt.',
    },
    {
        title: "Instant API Generation",
        route: "/docs/basics/auto-generated-routes",
        icon: <IconWorld className={ICONCLASSNAME} />,
        info: "Instant API endpoints generation with customization capabilities",
        description: "",
        media: null,
        released: true,
        flip_card: 'Sunt mollit adipisicing magna ullamco quis.',
    },
    {
        title: "Automated Documentation",
        route: "/docs/basics/basic-routing#viewing-available-routes",
        icon: <IconApiDocs className={ICONCLASSNAME} />,
        info: "API Documentation automatically generated to OpenAPI Specification",
        description: "",
        media: null,
        released: true,
        flip_card: 'Et id ipsum laboris id officia veniam nisi.',
    },


    {
        title: "TypeScript Support",
        // route: "/features/benchmarks",
        icon: <IconTypeScript className={ICONCLASSNAME} />,
        info: "Typescript reflection system with typescript types despite writing plain javascript",
        description: <div>EzBackend supports typescript out of the box. However, the file looks like it is written in plain javascript.<br /><br /> Because EzBackend uses a strong type inference system under the hood, most functions within the framework automatically have rich IDE support out of the box</div>,
        media: null,
        released: true,
        flip_card: 'Reprehenderit non cillum consequat consectetur.',
    },

    {
        title: "Fast Refresh",
        // route: "/features/benchmarks",
        icon: <IconRefresh className={ICONCLASSNAME} />,
        info: "Fast, reliable editing experience, with changes being reflected immediately with ctrl-s",
        description: <div>EzBackend uses ts-node-dev under the hood, which recompiles only necessary files with every refresh, significantly reducing compile times and updated code with every ctrl-s<br /><br />It restarts target node process when any of required files changes (as standard node-dev) but shares Typescript compilation process between restarts. This significantly increases speed of restarting comparing to node-dev -r ts-node/register ..., nodemon -x ts-node ... variations because there is no need to instantiate ts-node compilation each time.</div>,
        media: null,
        released: true,
        flip_card: 'Eiusmod eiusmod cupidatat minim deserunt cupidatat magna consequat do magna.',
    },



    {
        title: "Automated Database Interface",
        // route: "/features/benchmarks",
        icon: <IconDatabase className={ICONCLASSNAME} />,
        info: "View, edit and update database entries with an excel-like interface",
        description: "",
        media: null,
        released: true,
        flip_card: 'Irure laborum do id id aute reprehenderit anim excepteur.',
    },
    {
        title: <div>Consistent <br /> Dev & Prod Env</div>,
        // route: "/features/benchmarks",
        icon: <IconEnv className={ICONCLASSNAME} />,
        info: "Minimal additional configuration for deployment",
        description: <div>EzBackend automatically detects if it is running in a development environment or production environment, and automatically configures itself to run securely and safely in either one<br /><br />While EzBackend runs with strong defaults, these defaults are still entirely configurable to your custom needs</div>,
        media: null,
        released: false,
        flip_card: 'Irure duis nisi ut eu officia culpa.',
    },

    {
        title: "One-Line Realtime Functionality",
        // route: "/features/benchmarks",
        icon: <IconClock className={ICONCLASSNAME} />,
        info: "Subscribe to database updates with socket.io",
        description: "",
        media: null,
        released: false,
        flip_card: 'Duis aliqua magna fugiat nostrud pariatur ad consectetur exercitation.',
    },

    {
        title: "One-Line Storage Functionality",
        // route: "/features/benchmarks",
        icon: <IconFileStorage className={ICONCLASSNAME} />,
        info: "Transition seamlessly between local storage and cloud providers",
        description: "",
        media: null,
        released: false,
        flip_card: 'Consectetur culpa ut do veniam elit adipisicing ea officia labore nulla laboris.',
    },

]