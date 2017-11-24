import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const AuthorsList = [
    {
        src: require("../img/samer.jpeg"),
        name: "Samer Buna",
        bio: [
            <p key="1">
                Samer is a polyglot coder with years of practical experience in
                designing, implementing, and testing software, including web and
                mobile applications development, API design, functional
                programming, optimization, system administration, databases, and
                scalability. He worked in several industries including real
                estate, government, education, and publications.
            </p>,
            <p key="2">
                Samer has also authored several technical books and online
                courses about Node.js, React.js, GraphQL, and Ruby on Rails. He
                is passionate about everything JavaScript, and he loves
                exploring new libraries.
            </p>
        ]
    },
    {
        src: require("../img/swizec.jpg"),
        name: "Swizec Teller",
        bio: (
            <p>
                Hi I'm Swizec, a geek with a hat, React instructor and author of
                books and courses on web development. I've been doing JavaScript
                since before jQuery was cool and building my first *real*
                component way back in 2015 blew my mind.
            </p>
        )
    },
    {
        src: require("../img/juho.jpg"),
        name: "Juho Vepsäläinen",
        bio: (
            <p>
                Juho Vepsäläinen is behind the SurviveJS effort. In addition to
                being a core developer of webpack, he has been active in the
                open source scene since the early 2000s. Blue Arrow Awards
                winner.
            </p>
        )
    },
    {
        src: require("../img/robert.jpg"),
        name: "Robert Pankowecki",
        bio: (
            <p>
                Robert Pankowecki is Ruby on Rails developer, working remotely
                for more than five years. At Arkency he's worked on number of
                web projects in collaboration with small startups as well as
                large corporations. The creator of active_reload library which
                made your Rails apps faster in development mode. Founder of
                wroc_love.rb conference and one of the leading speakers at Lower
                Silesian Ruby User Group. Author and co-author of four books
                ‘Async Remote' , 'Fearless Refactoring: Rails Controllers',
                'Rails meets React.js', 'React.js by example'.
            </p>
        )
    },
    {
        src: require("../img/andrzej.jpeg"),
        name: "Andrzej Krzywda",
        bio: (
            <p>
                Andrzej Krzywda is the founder and CEO of Arkency, a Rails
                consultancy. He spends time reviewing dozens of legacy Rails
                apps every year, finding patterns, applying fixes. Cares about
                code quality, maintainability and explicitness. For 5 years he's
                been teaching Rails at the University of Wrocław in a way that
                shows my students the beauty and speed of delivering Rails
                applications, as well as the mess that they can sometimes turn
                into. Working with students has taught him patience and how to
                structure his knowledge so it is easily digestible.
            </p>
        )
    },
    {
        src: require("../img/stephen.jpg"),
        name: "Stephen Grider",
        bio: (
            <p>
                Stephen Grider has been building complex Javascript front ends
                for top corporations in the San Francisco Bay Area. With an
                innate ability to simplify complex topics, Stephen has been
                mentoring engineers beginning their careers in software
                development for years, and has now expanded that experience onto
                Udemy, authoring the highest rated React course. He teaches on
                Udemy to share the knowledge he has gained with other software
                engineers. Invest in yourself by learning from Stephen's
                published courses.
            </p>
        )
    },
    {
        src: require("../img/azat.jpeg"),
        name: "Azat Mardan",
        bio: (
            <p>
                Azat is a Technology Fellow, Manager at Capital One, and a
                JavaScript/Node.js expert with several online courses on Udemy
                and Node University, and 14 books published on the topic,
                including top-sellers React Quickly (Manning, 2017), Full Stack
                JavaScript (Apress, 2015), Practical Node.js (Apress, 2014) and
                Pro Express.js (Apress, 2014). In his spare time, Azat writes
                about tech on Webapplog.com, speaks at conferences and
                contributes to open-source. Before becoming an expert in
                Node.js, Azat finished his Master’s in Information Systems
                Technology; and worked at U.S. federal government agencies,
                small startups and big corporations with various technologies
                such as Java, SQL, PHP, Ruby, etc. Azat is passionate about
                technology and finance, as well as new disruptive ways of
                educating and empowering people.
            </p>
        )
    },
    {
        src: require("../img/igor.jpg"),
        name: "Igor Lamoš",
        bio: (
            <p>
                Igor's passion for software development can be tracked back to
                2000. In the past, he has been working for major media players
                in the European market within transactional business projects in
                insurance industry. He has gradually become an expert connecting
                both software and insurance worlds together. A constant desire
                for improvement led him to found his own software company -
                BePlus. In the last years, he has been particularly interested
                in React and React Native while leading his small team in the
                "lead-by-example" way. Besides a few specialized apps for
                insurance brokers, currently he is working primarily on his own
                projects and trying to pass gained experience on to other
                developers. He holds the rule, that the correct application of
                appropriate technologies according to the specific use-cases
                creates high quality software. That's what he would like to show
                to everyone else …
            </p>
        )
    }
];

const Author = ({ src, name, bio }) => (
    <Row>
        <Col md={3}>
            <Image
                src={src}
                circle
                style={{ width: "180px", marginTop: "4em" }}
            />
        </Col>
        <Col md={8}>
            <h2>{name}</h2>
            {bio}
        </Col>
    </Row>
);

export default Author;
export { AuthorsList };
