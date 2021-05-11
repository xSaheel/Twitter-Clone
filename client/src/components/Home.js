import Navbar from "./Navbar"
import NewPost from "./NewPost";
import Feed from "./Feed";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <NewPost/>
                <Feed/>
            </div>
        </div>
    );
}

export default Home;