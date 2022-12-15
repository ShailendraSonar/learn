import Header from './Header'
import React from "react";
import { v4 as uuid } from "uuid";
import Firebasecon from './Firebasecon'
import  {useState, useEffect} from "react";
import Show from './Show'
import DynamicInput from './DynamicInput'
import Dyn_2 from './Dyn_2'
import Show2 from './Show2'



const E = ()=>{
    const [todos, setTodos] = useState([]);
    const [lis, setLis] = useState([]);

    useEffect(() => {
        getTodos();
      }, []);

    const saveTodo = (fName,Email,Phone, Location, Link, CName, CRole) => {
        const saveToFirebase = Firebasecon.firestore();
        saveToFirebase.collection("todos").add({
          id: uuid(),
          name: fName,
          email:Email,
          phone:Phone,
          location:Location,
          link:Link,
          cName: CName,
          cRole:CRole
        });
      };
     

      const getTodos = () => {
        const getFromFirebase = Firebasecon.firestore().collection("todos");
        getFromFirebase.onSnapshot((querySnapShot) => {
          const saveFirebaseTodos = [];
          querySnapShot.forEach((doc) => {
            saveFirebaseTodos.push(doc.data());
          });
        //   console.log(todos);
          setTodos(saveFirebaseTodos);
        });
      };

      const okDo = (Li)=>{
        const saveToFirebase = Firebasecon.firestore();
        saveToFirebase.collection("lis").add({
          id: uuid(),
          li:Li
        })
      }
      const getDo = () => {
        const getFromFirebase = Firebasecon.firestore().collection("lis");
        getFromFirebase.onSnapshot((querySnapShot) => {
          const saveFirebaseTodos = [];
          querySnapShot.forEach((doc) => {
            saveFirebaseTodos.push(doc.data());
          });
        //   console.log(todos);
        setLis(saveFirebaseTodos);
        });
      };

      

      

    return (
        <>
        
        <Header saveTodo={saveTodo} getTodos={getTodos}  />
        <DynamicInput  getDo={getDo}/>
        <Dyn_2 okDo={okDo}/>
        <Show todos={todos}/>
        <Show2 lis={lis}/>
        
        </>
    );
};

export default E;