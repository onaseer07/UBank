//when user clicks on next button the scene fades out the current question and fades in a new one

// Array created to hold questions
    const questions = ['business-information','business-expenses']
    //storing questions in variables
    let $busInfo = $(`#${questions[0]}`);
    let $busExp = $(`#${questions[1]}`);

    $('#next').on('click',function(){
        //next tag click will fade out the current question
        $busInfo.fadeOut()
                .css({'display':'none'});
         //and fade in the next question       
        $busExp.fadeIn()
               .css({'visibility':'visible'});
    })

    $('#back').on('click', function() {
        //back button will fade in the previous question
        $busInfo.fadeIn()
                .css({'display':'block'});
        // and fade out the current question 
        $busExp.fadeOut()
                .css(
                    {
                        'visibility':'hidden',
                        'display':'none'
                    }
                );
    })
    
    
