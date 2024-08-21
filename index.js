// Question 1:

function hasAllUniqueCharacters(value) {

    // let rev = value.reverse(); - couldn't how revers the string this one used for array. 

  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < value.length; j--) {
        // console.log(value[i])
        // console.log(value[j])

      if (value[i] === rev[j]) { 
        return true;
      }else{
        return false
      }
    }
  }
}


console.log(hasAllUniqueCharacters("hello"));
console.log(hasAllUniqueCharacters("world"));



// Question 2 - Task 2:

const TotalSpent = async () => {
    sqlquery = `SQL_QUERY_HERE`;

    try {
        const response = await funcDD(sqlquery);   // i assume a database function to pass the sql query fetch from db used 

        if(response){
            console.log(response)
        }else{
            res.status(400, {message: 'Errror Invalid'})
        }
    } catch (error) {
        res.status(400, {message: 'Errror Invalid'})
    }
}