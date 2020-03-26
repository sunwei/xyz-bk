
export function makeClient() {
  
  return function(){
    console.log("Fake http client...");
  };
  
}

const client = makeClient()

export default client
