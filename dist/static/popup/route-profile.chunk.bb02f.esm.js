(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BM80:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return r}));var i=n("hosL"),o=n("NWYn"),s=n.n(o);class r extends i.Component{constructor(...t){super(...t),this.state={time:Date.now(),count:10},this.updateTime=()=>{this.setState({time:Date.now()})},this.increment=()=>{this.setState({count:this.state.count+1})}}componentDidMount(){this.timer=setInterval(this.updateTime,1e3)}componentWillUnmount(){clearInterval(this.timer)}render({user:t},{time:e,count:n}){return Object(i.h)("div",{class:s.a.profile},Object(i.h)("h1",null,"Profile: ",t),Object(i.h)("p",null,"This is the user profile for a user named ",t,"."),Object(i.h)("div",null,"Current time: ",new Date(e).toLocaleString()),Object(i.h)("p",null,Object(i.h)("button",{onClick:this.increment},"Click Me")," ","Clicked ",n," times."))}}},NWYn:function(t){t.exports={profile:"profile__t2Dqz"}}}]);
//# sourceMappingURL=route-profile.chunk.bb02f.esm.js.map