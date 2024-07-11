// const user={
//     name:"Aman singh",
//     greet:()=>{
//       const greetingsAgain=()=>{
//         console.log(this);
//         console.log(`${this.name}`);
//       }
//       greetingsAgain();
//     }
//   }
//   user.greet();

  const user2={
    name:"Aman singh",
    greet: function(){

        console.log(this);

        (function (a) {
            const fn = a;
             // global object
            console.log(`${fn.name}`)
        })(this);

    //   const greetingsAgain=()=>{
    //     console.log(`${this.name}`)
    //   };
    //   greetingsAgain();
    }
  }
  user2.greet();

  // In case of arrow functions, this points to the lexical context

  // this

//   function abc() {
//     console.log(this);
//   }

