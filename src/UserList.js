import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'




function UserList () {

const [listOfUSer, setListOfUSer] = useState([])

useEffect(() => {

axios.get('https://jsonplaceholder.typicode.com/users')
.then(response =>{ setListOfUSer(response.data) ; console.log(listOfUSer) })
.catch(error => console.error(error)) 
}, [])

return( 
    <div>
    <h1 className="title">List Of Users</h1>
    {listOfUSer.map(user => 
    <Jumbotron fluid>
    <Container className="grid-container">
    <div key={user.id} className="grid-item"> 
            <p className="name">Name: {user.name}</p>
            <p className="username">User Name: {user.username}</p>
            <p className="email">Email: {user.email}</p>
            <p className="address">Address: {user.address.street}  {user.address.suite}  {user.address.city}  {user.address.zipcode}  {user.address.geo.lat}  {user.address.geo.lng}</p>
            <p className="phone">Phone: {user.phone}</p>
            <p className="website">Website: {user.website}</p>
            <p className="company">Company: {user.company.name}   {user.company.catchPhrase}   {user.company.bs}</p>
        </div>
    </Container>
    </Jumbotron>
        )}
    </div>

)


}

export default UserList; 