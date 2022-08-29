import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

function App() {

    const data = [
        {name: 'John', salary: 3000, increase: false},
        {name: 'Veronika', salary: 2000, increase: true},
        {name: 'Max', salary: 1500, increase: false},

    ];

    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployersAddForm />
        </div>
    );
}

export default App;