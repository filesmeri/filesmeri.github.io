var main = function() {
    // Retrieve
    let currentValue,totalValue;    
    let resetTotal, resetCurrent;
    
    if (resetTotal){
        totalValue=0;
    } else if (resetCurrent){
        currentValue=0;
    } else {
        totalValue = localStorage.getItem("totalNumber");
        currentValue = localStorage.getItem("currentNumber");
    }

    if(currentValue>24){
        $('#current-num-wrapper').addClass('crowded');
    }
    

    $('#total-num').html(totalValue);
    $('#current-num').html(currentValue);

    $('#in-button').on('click', (event)=>{
        currentValue++;
        totalValue++;
        if(currentValue>24){
            $('#current-num-wrapper').addClass('crowded');
        } else if (currentValue>0){
            $('#out-button').removeClass('disabled');
        }
        // Store
        localStorage.setItem("totalNumber", totalValue);
        localStorage.setItem("currentNumber", currentValue);

        $('#current-num').html(currentValue);
        $('#total-num').html(totalValue);
    });

    $('#out-button').on('click', (event)=>{
        if(currentValue<=25){
            $('#current-num-wrapper').removeClass('crowded');
          }
        if(currentValue<=0){
            currentValue=0;
            $('#out-button').addClass('disabled');
        } else{
        currentValue--;
        };
        localStorage.setItem("currentNumber", currentValue);
        
        $('#current-num').html(currentValue);
      });
    
      $('#reset-total').on('click', (event)=>{
          totalValue=0;
          resetTotal = localStorage.setItem("totalNumber", totalValue);
          $('#total-num').html(totalValue);
          currentValue=0;
          resetCurrent = localStorage.setItem("currentNumber", currentValue);        
          $('#current-num').html(currentValue);
      });

      $('#reset-current').on('click', (event)=>{
        currentValue=0;
        resetCurrent = localStorage.setItem("currentNumber", currentValue);        
        $('#current-num').html(currentValue);
    });

    
    
  };
  
  $(document).ready(main);

     /* Open */
    function openNav() {
        document.getElementById("myNav").style.height = "100vh";
    }
    /* Close */
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    } 