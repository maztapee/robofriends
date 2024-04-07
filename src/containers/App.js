import React, {Component, useMemo} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            search_field: "",
            error: false,
            filtered: [],
            previous_search: ""
        }
    }

    componentDidMount (){
  
            fetch("https://jsonplaceholder.typicode.com/users")

            .then(response => {
                if(!response.ok) throw new Error('Could not fetch your data');
                return response.json()
            })
    
            .then(users => {
                console.log("this was called and users set");
                this.setState({
                    ...this.state, 
                    robots: users,
                    filtered: users
                });
            })
            .catch(error => {
                console.log(`Error fetching data ${error}`);
                this.setState({error: true})
            })
    }

    onSearchChange = (event) =>{
        if(!event.target.value?.trim()?.length) return;
        this.doFilter(event.target.value?.trim());
    };

    doFilter = (value = "") => {
        const { robots } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(value.toLowerCase())
        });
        this.setState({
            ...this.state,
            filtered: filteredRobots
        });
    }

    onClickDelete = (RobotListId) => {
        console.log(RobotListId, " The ID to be deleted");
        const indexOfSelected = RobotListId;
        const CopyOfFiltered = this.state.filtered;
        CopyOfFiltered.splice(indexOfSelected,1);
        this.setState({
            ...this.state,
            filtered: [...CopyOfFiltered]
        });
    };

    render(){
        const { robots, search_field } = this.state;
        if(this.state.error){
            return <h1> An error has occurred. Failed to fetch your RoboFriends list </h1>
        };
        
        if(!this.state.error && !robots.length){
            return <h1>
                Loading...
            </h1>
        }else{
            
            // const filteredRobots = robots.filter(robot => {
            //     return robot.name.toLowerCase().includes(search_field.toLowerCase())
            // });



            return (
                <div className='tc'>
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </div>
                    <Scroll>
                        <CardList 
                        robots={this.state.filtered}
                        delete_button={this.onClickDelete}
                        />
                    </Scroll>
                </div>
            )
        }

    }

}

export default App;