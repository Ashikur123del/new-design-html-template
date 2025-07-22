
// background scroll

$(window).scroll(function(){
    $('.navbar').toggleClass('scolled',$(this).scrollTop()>100)
})

// background ends

// type event start here

var typed = new Typed(".title",{
    strings: ["Ashikur Rhoman","Junner Web Developer","Responsive Design"],
    typeSpeed:100,
    loop:true
})
// typeSpeed ends

// todo applecation

$(".btn").click(function(){
    var input = $(".input").val();
    var NewText = $(".div1").append('<p>'+input+'<i class="fa-solid fa-trash icons"></i>'+'</p>')
})

$(".div1").on('click','.icons',function(){
    $(this).parent().hide();
})

// add and remove end
   window.onload = function (){
        var option = {
            title:{
                text:"BarChart Start Here"
            },
            axisY:{
                title:"Yearly value poarsent %"
            },
            axisX:{
                title:"Year With Month"
            },
            data:[
                {
                    type:"column",
                    dataPoints:[
                        {label:"january 2010",y:70 },
                        {label:"january 2010",y:90 },
                        {label:"january 2010",y:80 },
                        {label:"january 2010",y:70 },
                        {label:"january 2010",y:90 },
                        {label:"january 2010",y:70 },
                        {label:"january 2010",y:95 },
                    ]
                }
            ]
        }
        $("#barChart").CanvasJSChart(option )
   }

// bar Chart Start here

// countar up start

$(".counts").counterUp({
    time: 3000
})

// countar up start

// animate section start here

$(".part1").waypoint(function(){
    $(".part1").addClass("animate fadeInLeft")
},{
    offset:"50%"
})

$(".part-2").waypoint(function(){
    $(".part-2").addClass("animate fadeInDown")
},{
    offset:"50%"
})