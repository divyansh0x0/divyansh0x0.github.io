
if (window.matchMedia){
    const match_media_color_scheme = window.matchMedia('(prefers-color-scheme: dark)')
    
    if (match_media_color_scheme.matches){
        document.documentElement.setAttribute('data-theme', 'dark')
        console.log("Dark theme enabled")
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light')
    }
    
    match_media_color_scheme.addEventListener(
        'change', e => {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark')
                console.log("Dark theme enabled")
                return;
            } 
            document.documentElement.setAttribute('data-theme', 'light')
        }
    )

}
else{
    console.log("No support for matchMedia. Defaulting to light theme")
    document.documentElement.setAttribute('data-theme', 'light')
}


const menubtn = document.querySelector('#menu-btn')
const closebtn = document.querySelector('#close-btn')
const menu_wrapper = document.querySelector('#floating-menu')
const body = document.querySelector('body')
var is_menu_open = menu_wrapper.checkVisibility();
menubtn.addEventListener('click', () => {
    if (!is_menu_open){
        menubtn.setAttribute('style', 'display: None;');
        menu_wrapper.setAttribute('style', 'display: block;');
        closebtn.setAttribute('style', 'display: block;');
        body.setAttribute('style', 'overflow: hidden;');
        is_menu_open = true;
    }
});
closebtn.addEventListener('click', () => {
    if (is_menu_open){
        menu_wrapper.setAttribute('style', 'display: none;');
        menubtn.setAttribute('style', 'display: block;');
        closebtn.setAttribute('style', 'display: None;');
        body.setAttribute('style', 'overflow: scroll;');

        is_menu_open = false;
    }
});