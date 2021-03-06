import React from 'react';
import { Helmet } from 'react-helmet';

//Load Ins
import AlexPointing from '../../static/alex-image-pointing.jpg';
import Layout from '../../components/layouts/Layout';
import StartingOut from '../../components/StartingOut';

const Contact = () => {
    return (
        <Layout>
            <Helmet>
                <title>Contact Me</title>
            </Helmet>
            <StartingOut
                title="You should be able to contact me....soon 🤷‍♂️"
                imageSrc={AlexPointing}
                altImage="Alex teeth"
            />
        </Layout>
    )
}

export default Contact