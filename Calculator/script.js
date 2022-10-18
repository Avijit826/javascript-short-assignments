let sum = 0;
function insert(num){
   document.querySelector('.textview').value += num;
  }
  
  function equals(){
    // document.querySelector('.textview').value = eval(document.querySelector('.textview').value);
    try {
      document.querySelector('.textview').value = eval(document.querySelector('.textview').value); 
  } catch (e) {
      if (e instanceof SyntaxError) {
          alert(e.message);
          clean();
      }
  }
      
  }
  
  function clean(){
    document.querySelector('.textview').value= "";
  }
  
  function back(){
    document.querySelector('.textview').value = document.querySelector('.textview').value.slice(0, -1);
  }