import Home from "./components/Home";
import SignIn from "./components/SignIn";
import TopPosts from "./components/TopPosts";
import MyProfile from "./components/MyProfile";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/signin" component={SignIn}/>
                <Route path="/topposts" component={TopPosts}/>
                <Route path="/myprofile" component={MyProfile}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    )
}

export default App