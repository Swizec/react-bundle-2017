import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "../css/bootstrap-override.css";
import "../css/bootstrap-custom-utils.css";
import "../css/salesbury-lilac.css";
import "./index.css";

const TemplateWrapper = ({ children, data }) => (
    <div className="cheatsheet">
        <Helmet>
            <script async src="https://gumroad.com/js/gumroad.js" />
            <meta name="author" content="Swizec Teller" />
            <meta name="description" content={data.site.siteMetadata.title} />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta property="og:url" content="https://bestjavascript.io" />
            <meta property="og:title" content={data.site.siteMetadata.title} />
            <meta property="og:image" content={data.site.siteMetadata.cover} />
            <meta property="og:type" content="website" />
            <meta
                property="og:description"
                content={data.site.siteMetadata.description}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@swizec" />
            <meta name="twitter:creator" content="@swizec" />
            <meta name="twitter:title" content={data.site.siteMetadata.title} />
            <meta
                name="twitter:description"
                content={data.site.siteMetadata.description}
            />
            <meta name="twitter:image" content={data.site.siteMetadata.cover} />
            <title>{data.site.siteMetadata.title}</title>
        </Helmet>
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
                description
                cover
            }
        }
    }
`;

export default TemplateWrapper;
