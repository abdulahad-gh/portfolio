import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title, content, linksrc }) => {
    return (
        <Helmet>
            <title>{title} | abdul ahad</title>
            <meta name='description' content={content} />
            <link rel="canonical" href={linksrc} />
        </Helmet>
    );
};

export default PageTitle;