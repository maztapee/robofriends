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
            filteredRobots: [],
            showModal: false,
            available: []
        }
    }

    componentDidMount (){
  
            fetch("https://jsonplaceholder.typicode.com/users")

            .then(response => {
                if(!response.ok) throw new Error('Could not fetch your data');
                return response.json()
            })
    
            .then((users) => {
                this.setState({robots: users})
                this.setState({available: users});
            })
            .catch(error => {
                console.log(`Error fetching data ${error}`);
                this.setState({error: true})
            })
    };

    onSearchChange = (event) =>{
        this.setState({search_field: event.target.value});
        return event;
    };

    add_robot = (new_robot)=>{
        let new_name = new_robot.name;
        let new_email = new_robot.email;
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
        if(!(new_name.trim()) && !(new_email.trim())){
            return
        }else{
            this.closeForm();
            alert("Successfully added new robofriend");
            this.setState({
                robots: this.state.robots.push(new_robot)
            });
            this.setState({
                available: this.state.robots
            })
        }
    };

    remove_robot = (robot_id)=>{
        console.log('The ID intended to be removed is: '+ robot_id); 
        this.setState({
            robots: this.state.robots.filter((robot) => robot.id !== robot_id)
        });
        this.setState({
            available: this.state.robots
        });
    };

    new_robofriends = (currentRobotList)=>{
        currentRobotList = this.state.robots;
        let newest_robots = currentRobotList.slice(-5);
        return newest_robots;
    };

    old_robofriends = (currentRobotList)=>{
        currentRobotList = this.state.robots;
        let oldest_robots = currentRobotList.slice(0,5);
        return oldest_robots;
    };

    navigation = (criteria)=>{

        if(criteria ==='friends'){
            this.setState({
                robots: this.state.available
            });
        };

        if(criteria ==='add'){
            this.setState({
                showModal: true
            });
        };

        if(criteria ==='new'){
            console.log("new");
            console.log(this.new_robofriends(this.state.robots));
            this.setState({
                robots: this.new_robofriends(this.state.robots)
            })
        };

        if(criteria ==='old'){
            console.log("old");
            console.log(this.old_robofriends(this.state.robots));
            this.setState({
                robots: this.old_robofriends(this.state.robots)
            })
        };

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

            const search_change = ()=>{
                this.onSearchChange();
            };

            if(search_change){
                this.filteredRobots = robots.filter(robot => {
                    return robot.name.toLowerCase().includes(search_field.toLowerCase())
                });
            };

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
                            robots={this.filteredRobots}
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