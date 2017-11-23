import React from "react";
import Link from "gatsby-link";

import { Row, Col, Image } from "react-bootstrap";
import Section, {
    LowSection,
    DarkSection,
    SectionTitle
} from "../components/Section";
import { SingleColumn, WideLeftColumn } from "../components/Columns";
import Testimonial from "../components/Testimonials";
import BuyButton, { Countdown, RawBuyButton } from "../components/BuyButton";
import Author, { AuthorsList } from "../components/Author";
import icon from "../img/icon.gif";
import icon2 from "../img/icon2.gif";
import cover from "../img/cover.gif";

const AboveHeader = () => (
    <div className="bg-white-dark padding-small-top">
        <div class="container">
            <Row>
                <Col md={2} className="text-center">
                    <img src={icon} />
                </Col>
                <Col
                    md={8}
                    className="text-center"
                    style={{ paddingTop: "20px" }}
                >
                    <p
                        style={{
                            display: "inline-block",
                            margin: 0,
                            top: "-12px",
                            position: "relative"
                        }}
                    >
                        40 hours of video, 1000+ pages of expert guidance, 7
                        authors
                    </p>
                    <h3
                        style={{
                            display: "inline",
                            top: "-9px",
                            position: "relative"
                        }}
                    >
                        <big>
                            <a
                                href="https://gum.co/jWTRq"
                                data-gumroad-single="true"
                                style={{ color: "black" }}
                            >
                                {" "}
                                👉 $99
                            </a>
                        </big>
                    </h3>
                    <br />
                    <Countdown
                        style={{ display: "inline", paddingLeft: "1em" }}
                    />
                </Col>
            </Row>
        </div>
    </div>
);

const Header = () => (
    <header className="text-left container">
        <Row>
            <Col md={11} mdOffset={1}>
                <h1>Level up your skills before 2017 ends</h1>
                <p className="lead">
                    Learn how to build modern JavaScript apps from 7 expert
                    authors
                </p>
            </Col>
        </Row>
    </header>
);

const SalesLetter = ({ part1, part2 }) => (
    <Section>
        <a name="bundle-sales-letter" />
        <Row>
            <WideLeftColumn mdOffset={1} style={{ marginTop: "-45px" }}>
                <a
                    href="https://gum.co/jWTRq"
                    data-gumroad-single="true"
                    style={{ color: "black" }}
                >
                    <Image src={cover} md={12} xs={4} />
                </a>
            </WideLeftColumn>
            <WideLeftColumn
                dangerouslySetInnerHTML={{ __html: part1.html }}
                mdOffset={2}
                xsOffset={1}
                xs={11}
            />
            <WideLeftColumn mdOffset={2} xsOffset={1} xs={11}>
                <BuyButton />
            </WideLeftColumn>
            <WideLeftColumn
                dangerouslySetInnerHTML={{ __html: part2.html }}
                mdOffset={2}
                xsOffset={1}
                xs={11}
            />
            <WideLeftColumn mdOffset={2} xsOffset={1} xs={11}>
                <BuyButton />
            </WideLeftColumn>
        </Row>
    </Section>
);

const Journey = ({ copy }) => (
    <DarkSection>
        <a name="your-journey" />
        <SectionTitle>
            Your journey from beginner to well-paid engineer
        </SectionTitle>
        <Row>
            <SingleColumn
                dangerouslySetInnerHTML={{ __html: copy.html }}
                md={8}
                xsOffset={1}
                xs={11}
            />
        </Row>
        <Row className="padding-big-top">
            <BuyButton />
        </Row>
    </DarkSection>
);

const Authors = () => (
    <Section>
        <a name="meet-the-authors" />
        <SectionTitle>Meet the authors</SectionTitle>
        <Row>
            <SingleColumn md={10} xsOffset={1} xs={11}>
                {AuthorsList.map(author => (
                    <Author {...author} key={author.name} />
                ))}
            </SingleColumn>
        </Row>
        <Row className="padding-big-top">
            <BuyButton caption="Learn from the best for $99 💪" />
        </Row>
    </Section>
);

const findMarkdown = (data, name) =>
    data.allMarkdownRemark.edges.find(({ node }) => node.id.includes(name))
        .node;

const IndexPage = ({ data }) => {
    const salesletterpt1 = findMarkdown(data, "sales-letter-pt1.md"),
        salesletterpt2 = findMarkdown(data, "sales-letter-pt2.md"),
        journey = findMarkdown(data, "learning-journey.md");

    return (
        <div>
            <AboveHeader />
            <Header />
            <LowSection className>
                <Col md={10} mdOffset={0}>
                    <Testimonial which="ruturaj" />
                </Col>
            </LowSection>
            <SalesLetter part1={salesletterpt1} part2={salesletterpt2} />
            <Journey copy={journey} />
            <Authors />
        </div>
    );
};

export const query = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    html
                }
            }
        }
    }
`;

export default IndexPage;
