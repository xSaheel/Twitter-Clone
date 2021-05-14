import Home from "./components/Home";
import SignIn from "./components/SignIn";
import MyPosts from "./components/MyPosts";
import MyProfile from "./components/MyProfile";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";

const App = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/myposts" component={MyPosts}/>
                <Route path="/myprofile" component={MyProfile}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default App