import React from "react";
import Form from "./form";
import TodoList from "./todoList";
import ReduxToastr from 'react-redux-toastr'
const App = () => (
  <div className="row mt-5">

    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick />
    <div className="jumbotron">
      <h3>LOGO</h3>
    </div>
    <div className="col-md-8 col-sm-9 col-sm-offset-2 col-md-offset-2">
      <Form />
    </div>
    <div className="col-md-12 col-sm-12">
      <TodoList />
    </div>
  </div>
);
export default App;