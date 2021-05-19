import NewPost from "./NewPost";
import Feed from "./Feed";

const Home = () => {
    return (
        <div className="container">
            <NewPost/>
            <Feed/>
        </div>
    );
}

export default Home;