import React from "react";

const owl = {
    title: "",
    src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh365D_Flwv6QlxxQTlBqNmoF-83WOow7I0X6ZtuHjZld8wpemnVdJFnP0jb-ngNLMpJ9lWUqB2uXGOgyh-2UDhm7uJLNTW-9vQ_t-C_LvnYkCJ8hraXBUgofQFeFPhlcPvljJYb5e8Xknq/s1600/Gaiola+dos+macacos.jpg',
    width:  '500px'
};


function Owl(){
    return (
      <div>
        <h1>{owl.title}</h1>
        <img 
          src={owl.src}
          alt={owl.alt}
          width={owl.width} />
      </div>
    );
}
export default Owl;