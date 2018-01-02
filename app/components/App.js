import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import 'jquery';
// import "./includes/waypoints.min.js";
// import "./includes/jquery.scrollTo.min.js";
// import "./includes/jquery.localScroll.min.js";
// import "./includes/jquery.magnific-popup.min.js";
// import "./includes/validate.js";
// import "./includes/common.js";
// import "./includes/typed.js"; 
	
// import './animate.min.css';
// import './font-awesome.min.css';
// import ',/style.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path ='/battle/results' component={Results}/>
            <Route path='/popular' component={Popular} />
            <Route render={() => <p>Not Found</p>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
// $(document).ready(function () {
//   console.log('ready!');
//   $('.menu').toggleClass('menu--close');
//   $('.nav-button').on('click', function () {
//     $(".nav-button .line:nth-of-type(1)").toggleClass("line1");
//     $(".nav-button .line:nth-of-type(2)").toggleClass("line2");
//     $(".nav-button .line:nth-of-type(3)").toggleClass("line3");
//     $('.menu').toggleClass('menu--open');
//     return false;
//   });
//   $('.nav-button').click();
//   $('#top').hide();
//   $(window).on('scroll', function () {
//     if ($(this).scrollTop() > 10) {
//       $('#top').fadeIn();
//     } else {
//       $('#top').fadeOut();
//     }
//   });
//   $('#top').on('click', function (e) {
//     $("html, body").animate({
//       scrollTop: 0
//     }, 500);
//   });
// });
// $(function () {
//   $("#typed").typed({
//     stringsElement: $('#typed-strings'),
//     typeSpeed: 90,
//     backDelay: 900,
//     loop: false,
//     contentType: 'html',
//     resetCallback: function () { newTyped(); }
//   });
//   $(".reset").click(function () {
//     $("#typed").typed('reset');
//   });
// });
// function newTyped() { }

