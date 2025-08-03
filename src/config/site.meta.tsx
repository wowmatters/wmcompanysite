import { Code, Database, GlobeLock, Handshake } from "lucide-react";

export const SiteMetaInformation = {
    title: 'Wowmatters',
    description: 'Wowmatters is a leading provider of innovative technology solutions, specializing in custom software development, managed services, and digital transformation. We empower businesses with cutting-edge technologies to drive growth and efficiency.',
    logo: '/images/logo.png',
    favicon: '/images/favicon.ico',
    url: 'https://wowmatters.id',
    keywords: [
        'wow matters', 'wowmatters',
        'azure managed services',
        'decision support system',
        'due diligence information system',
        'blockchain logistics management',
        'ai customer support',
        'cost optimization and efficiency azure cloud',
        'application custom development', 
        'social network'
    ],
    headlines: [        
    'Innovative Solutions',
    'Digital Transformation',
    'Technology Enablement',
    'Future-Ready Systems',
    'Cloud Cost Optimization',
    'AI-Driven Insights',
    'Blockchain Logistics',
    'Managed Services',
    ],
    services: [
        {
            title: 'Custom Software Development',
            description: 'Tailored software solutions to meet unique business needs.',
            icon: <Code className="w-8 h-8" />
        }, {
            title: 'Technology Enablement',
            description: 'Optimizing business processes with the latest technologies. Cloud, AI, automation, and more',
            icon: <GlobeLock className="w-8 h-8" />
        }, {
            title: 'Database Management & Analytics',
            description: 'Build Insight-driven decisions and smart data integration for business growth',
            icon: <Database className="w-8 h-8" />
        }, {
            title: 'Managed Services',
            description: 'Comprehensive support to ensure smooth operations with proactive monitoring',
            icon: <Handshake className="w-8 h-8" />
        }
    ],
    caseStudies: [
        {
            title: 'Due Diligence Information System',
            description: 'A comprehensive analysis of a company\'s financial, operational, and legal aspects to assess its viability and risks.',
            image: 'due-diligence-case-study.jpg'
        }, {
            title: 'Blockchain-Based Logistics Management',
            description: 'A decentralized platform for tracking and managing logistics operations, ensuring transparency and efficiency.',
            image: 'blockchain-logistics-case-study.jpg'
        }, {
            title: 'AI-Powered Customer Support',
            description: 'An intelligent system that uses AI to enhance customer service interactions, providing quick and accurate responses.',
            image: 'ai-customer-support-case-study.jpg'
        }, {
            title: 'Decision Support System',
            description: 'A system that helps in making informed decisions by analyzing data and providing actionable insights.',
            image: 'decision-support-system-case-study.jpg'
        }, {
            title: 'Cost Optimization And Efficiency Azure Cloud',
            description: 'A project focused on reducing costs and improving efficiency through the use of Azure cloud services.',
            image: 'cost-optimization-azure-cloud-case-study.jpg'
        }
    ]
}