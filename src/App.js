import react from 'react';
import BasicTable from './Components/BasicTable/BasicTable';
import GhuriBazar from './Components/GhuriBazar/GhuriBazar';
import TablePage from './Components/TablePage/TablePage';

function App() {
    const [users, setUsers] = react.useState([]);

    react.useEffect(() => {
        setUsers('Abir');
    }, []);
    console.log(users);
    return (
        <div className="container">
            <GhuriBazar />

            <BasicTable />

            <TablePage />
        </div>
    );
}

export default App;
