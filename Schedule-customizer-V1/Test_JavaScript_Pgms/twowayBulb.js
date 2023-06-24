function fun2() {
   document.getElementById('str').style.display="true";
   document.getElementById("str").style.fontSize="135px" ;
   console.log("in fun2 function...");
   }

function fun1() {

   console.log("in fun1 function...");
   document.getElementById('str').style.display="true";
   document.getElementById("str").style.fontSize="35px" ;

   
   }
function doc_write1() {

  document.write(5 + 6);
}


function doc_print() {

  window.print();
}

function win_alert1() {

  alert("Alert testing!!");
  console.log("in window alert1 function...");
}