// import {$,jQuery} from 'jquery';
// export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;

$(document).ready(_=>{
    scrollTo(0,0);
    const _side_nav=".side-bar .side_nav";
    const variable_difference=50;
    const project=".tab_content #projects .content .project-container";
    window._top={
            home:{
                id:"#home",
                target:"#home_tab",
                top:$('#home').offset().top
            },
            projects:{
                id:"#projects",
                target:"#projects_tab",
                top:$('#projects').offset().top-variable_difference
            },
            achievements:{
                id:"#achievements",
                target:"#achievements_tab",
                top:$('#achievements').offset().top-variable_difference
            },
            internships:{
                id:"#internships",
                target:"#internships_tab",
                top:$('#internships').offset().top-variable_difference
            },
            skills:{
                id:"#skills",
                target:"#skills_tab",
                top:$('#skills').offset().top-variable_difference
            },
            academics:{
                id:"#academics",
                target:"#academics_tab",
                top:$('#academics').offset().top-variable_difference
            },
            contact:{
                id:"#contact",
                target:"#contact_tab",
                top:$('#contact').offset().top-variable_difference
            }
    };
    $(document).on("click",_side_nav+" span:not(#resume_tab)",function(){
        // scroll=true;
        ChangeTab(this);
        // scroll=false;
    });
    $(document).on("click",project,function(){
        toggleExpanded(this);
    });
    $(document).scroll(_=>{
        if(!$("body").hasClass("scrolling")){
            let current_top=$(document).scrollTop();
            switch(true){
                case (current_top>=_top.contact.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.contact.target).parent().addClass("active");
                    break;
                case (current_top>=_top.academics.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.academics.target).parent().addClass("active");
                    break;
                case (current_top>=_top.skills.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.skills.target).parent().addClass("active");
                    break;
                case (current_top>=_top.internships.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.internships.target).parent().addClass("active");
                    break;
                case (current_top>=_top.achievements.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.achievements.target).parent().addClass("active");
                    break;
                case (current_top>=_top.projects.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.projects.target).parent().addClass("active");
                    break;
                case (current_top>=_top.home.top):
                    $(_side_nav+".active").removeClass("active");
                    $(_top.home.target).parent().addClass("active");
                    break;
            }
        }

    });
    let ChangeTab=(element)=>{
        $("body").addClass("scrolling");
        $(_side_nav+".active").removeClass("active");
        $(element).parent().addClass("active");
        scrollTo(0,$("#"+$(element).data('id')).offset().top);
        setTimeout(_=>{
            $("body").removeClass("scrolling");
        },1500);
        
    }
    let toggleExpanded=(element)=>{
        if(!$(element).hasClass("expanded")){
            $(project+".expanded").addClass("d-flex").removeClass("d-block");
            setTimeout(_=>{
                $(project+".expanded").removeClass("expanded");
            },1);
        }
        $(element).toggleClass("d-flex").toggleClass("d-block");
        setTimeout(_=>{
            $(element).toggleClass("expanded");
        },1);
        
    }
});