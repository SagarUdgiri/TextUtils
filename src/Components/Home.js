import PropTypes from 'prop-types';
const Home = (props)=> {
    const nav=props.title.map((titles)=>{
    return    <nav style={{color:'red'}}>
        <li>{titles}</li>
    </nav>
    })
    return (
        <div>
            <h1>This is a Functional Home component</h1>
            {nav}
        </div>
    )
}

export default Home;
Home.propTypes={
    title: PropTypes.string,
}