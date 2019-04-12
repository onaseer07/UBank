//when user clicks on the next button it will fade out the id 0 & fade in id 1
    //setting id 0 css visibility to hidden, display none

    const questions = ['business-information','business-expenses']
    let $busInfo = $(`#${questions[0]}`);
    let $busExp = $(`#${questions[1]}`);

    $('#next').on('click',function(){

        $busInfo.fadeOut()
                .css({'display':'none'});
                
        $busExp.fadeIn()
               .css({'visibility':'visible'});
    })

    $('#back').on('click', function() {
        
        $busInfo.fadeIn()
                .css({'display':'block'});

        $busExp.fadeOut()
                .css(
                    {
                        'visibility':'hidden',
                        'display':'none'
                    }
                );
    })
    
    
