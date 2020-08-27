import React, {useState, useEffect} from 'react';
import DataTable from './DataTable';
import Nav from './Nav';
import API from './assets/API';
import InfoAreaContext from './utils/InfoAreaContext';


const InfoArea = () => {
    const [present, futureState] = useState({
        users: [],
        order: 'descend',
        filteredUsers: [],
        headings: [
            {name: "Image", width: "20%"},
            {name: "Name", width: "20%"},
            {name: "Email", width: "20%"},
            {name: "Tel", width: "10%"}
        ]
    })
};


