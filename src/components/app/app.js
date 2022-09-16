import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John', salary: 3000, increase: false, rise: true, id: uuidv4() },
                { name: 'Veronika', salary: 2000, increase: true, rise: false, id: uuidv4() },
                { name: 'Max', salary: 1500, increase: false, rise: false, id: uuidv4() }
            ]
        }

    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })

        console.log(id);
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: uuidv4()
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
       this.setState(({ data }) => ({
            data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
        }))
    }

    render() {
        const emploeese = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo
                emploeese={emploeese}
                increased={increased}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployersAddForm
                    onAdd={this.addItem} />
            </div>
        );
    }
}



export default App;