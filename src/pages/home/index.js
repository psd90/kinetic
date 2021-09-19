import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Side from '../../components/side';
import Stats from '../../components/stats';
import News from '../../components/news';
import Sessions from '../../components/sessions';
import Opp from '../../components/opportunities';



const Home = () => {
    return (
        <div>
            <Header />
            <Side />
            <div className="flex">
            <Stats />
            <News />
            </div>
            <div className="flex-double">
            <Sessions />
            <Opp />
            </div>
            <Footer />
        </div>
    )
}

export default Home;