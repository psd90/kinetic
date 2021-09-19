import React from 'react';
import Header from '../../components/header';
import Side from '../../components/side';
import Footer from '../../components/footer';
import AddDoc from '../../components/addDoc';
import DocCollection from '../../components/docCollection';



const Documents = () => {
    return (
        <div>
            <Header /> 
            <Side />
        <div className="doc">
            <AddDoc />
        </div>
            <DocCollection />
            <Footer />
        </div>
    )
}

export default Documents;