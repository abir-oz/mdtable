import React from 'react';
import BasicTable from './Components/BasicTable/BasicTable';
import GhuriBazar from './Components/GhuriBazar/GhuriBazar';
import TablePage from './Components/TablePage/TablePage';

function App() {
    return (
        <div className="container">
            <GhuriBazar />

            <BasicTable />

            <TablePage />
        </div>
    );
}

export default App;
