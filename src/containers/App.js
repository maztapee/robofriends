import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorHandler from './ErrorHandler';
import NavigationBar from '../components/NavigationBar';
import AddRobotForm from '../components/AddRobotForm';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: [],
            search_field: "",
            error: false,
            available: [],
            showModal: false
        }
    }

    componentDidMount (){
  
            fetch("https://jsonplaceholder.typicode.com/users")

            .then(response => {
                if(!response.ok) throw new Error('Could not fetch your data');
                return response.json()
            })
    
            .then(users => this.setState({robots: users}))
            .catch(error => {
                console.log(`Error fetching data ${error}`);
                this.setState({error: true})
            })
    }

    onSearchChange = (event) =>{
        this.setState({search_field: event.target.value});
    };

    add_robot = (new_robot)=>{
        const currentRobotList = this.state.robots;
        // Function to find current max id in robots
        function findMaxId (arr){
            let maxId = 0;
            for (let robot of arr){
                if (robot.id > maxId){
                    maxId = robot.id;
                }
            };
            return maxId;
        };

        let maxId = findMaxId(currentRobotList);
        new_robot.id=maxId+1; //assigning new id to new robots which  is one more than the last max id
        this.setState({
            robot: this.state.robots.push(new_robot)
        });
    };

    
    remove_robot = (robot_id)=>{
        console.log('The ID intended to be removed is: '+ robot_id); 
        this.setState({
            robots: this.state.robots.filter((robot) => robot.id !== robot_id)
        })
    };

    navigation = (criteria)=>{

        if(criteria ==='add'){
            this.setState({
                showModal: true
            });
        }
    };

    closeForm = ()=>{
        this.setState({
            showModal: false
        })
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
            const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(search_field.toLowerCase())
            });

            return (
                <div className='tc'>
                    <div className='tc'>
                        <h1 className='f2'>RoboFriends</h1>
                        <div className='inline-flex'>
                            <NavigationBar onNavigate={this.navigation} />
                            <SearchBox searchChange={this.onSearchChange}/>
                        </div>
                    </div>
                    <div className={this.state.showModal ? 'visible' : 'hidden'}>
                        <AddRobotForm onclose={this.closeForm} submit_form={this.add_robot}/>
                    </div>
                    <Scroll>
                        <ErrorHandler>
                            <CardList 
                            robots={filteredRobots}
                            remove_from_list={this.remove_robot}
                            />
                        </ErrorHandler>
                    </Scroll>
                </div>
            )
        }

    }

}

export default App;