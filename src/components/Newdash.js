import React, { Component } from 'react'

export default class Newdash extends Component {
  render() {
    return (
      <div>
     
     
      <div className="div-responsive">
    <div class="breadcrumb breadcrumb1" style={{"Display":"flex"}} >
    <img src="admin.JPG"/>
    <span  style= {{"padding-left": 1050,  "width": 20}}>
      <img src="login.png " data-toggle="modal" data-target="#popUpWindow" style={{"width": 60, "height": "40px"}}/>

      <div class="modal fade" id="popUpWindow" >
          <div class="modal-dialog">
            <div class="modal-content">
             
              <div class="modal-header">
                
                <img src="adlogin.jpg" style={{"height":140, "width":180, "margin-left": 140,"border-radius": 25}}  alt=""/> 
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
             
              <div class="modal-header">
                <form role="form" style={{"width":600}}>
                  <div class="form-group">
                 <h6>USERNAME</h6>
                <input type="Username" class="form-control" placeholder="Username"/>
                <h6>PASSWORD</h6>
                <input type="password" class="form-control" placeholder="Password" />
                  </div>
                </form>
              </div>
            
              <div class="modal-footer">
                <button class="btn btn-primary btn-block">Registered Sub Admin</button>
              </div>
              
            </div>
          </div>
        </div>
    </span>
    
    </div>

    
    <div class="d-flex bg-light" style="display: flex; flex-direction: row; ">
    
      <div class="p-2 border Dashboard">
          <ul class="list-group" >
              <li class="list-group-item" style={{"border":"white solid"}}>Dashborad</li> 
            <a href="practionals.html"> <li class="list-group-item ">Active item</li> </a>
             <a href="index.html"><li class="list-group-item ">Second item</li></a>
             <a href="index.html"> <li class="list-group-item ">Third item</li></a>
            </ul>
      </div>
     
      <div class="p-2  dashboard-body">
        
          
          
          <div class="jumbotron">
            <center><h4>ITEM 1</h4> </center>

<div class="d-flex align-items-start E-fucn-con">
  <div class="p-2 E-fucn-con1">
    <span class="e-func-inherit"></span>
    <span class="e-func-inherit"></span>
    <span class="e-func-inherit"></span>
    
  </div>
 

  <div class="p-2 drop">
      <div class="btn-group" style={{"padding-left": 30,"padding-top":4}}>
          <button type="button" class="btn btn-danger" style="background-color: white; color: black; " >Action</button>
          <button type="button" style="background-color: white; color: black;" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div> 
        </div>   
  </div>

</div>

           
            <div class="d-flex align-items-start search-bar">
              <div class="p-2 " style={{height: "60px", "display": "flex", flexBasis: '30%', "justify-content": "space-around"}}>  
              <h6 style="padding:10px; padding-left:30px;"> Search the record by name </h6>
              </div>
              <div class="p-2 " style={{"height": "60px", "display": "flex", "flex-basis": "60%", "justify-content": "space-around"}}> 
                <form class="form-inline" action="/action_page.php" >
                <input class="form-control mr-sm-2" type="text" style={{"width": "400px"}}  placeholder="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
                
              </form>
              </div>      
            </div>  
            
              <div class="table-responsive">
              <table class="table table-hover" style="margin-top:10px; background-color: azure; overflow: auto; ">
                <thead>
                  <tr>
                      <th>#</th>
                      <th>Image</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>status</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr >
                      <td>1.</td>
                      <td><img src="men.jpg" class="img-circle" alt="Cinque Terre" width="60" height="35"/> </td>
                    <td >John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td>
                      <button class="btn btn-success" type="submit">Delete</button>
                      <button class="btn btn-success" type="submit" data-toggle="modal" data-target="#myModal">View</button> 
			
                      
 
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
  }
}
